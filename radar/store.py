"""SQLite：每天存一次 star 快照，跨天相减才是真实热度。"""

import json
import sqlite3
from pathlib import Path

DB_PATH = Path("data/radar.db")

SCHEMA = """
CREATE TABLE IF NOT EXISTS snapshots (
    repo        TEXT NOT NULL,
    day         TEXT NOT NULL,
    stars       INTEGER,
    forks       INTEGER,
    open_issues INTEGER,
    PRIMARY KEY (repo, day)
);
CREATE TABLE IF NOT EXISTS analyses (
    repo  TEXT PRIMARY KEY,
    day   TEXT,
    payload TEXT
);
CREATE TABLE IF NOT EXISTS repo_meta (
    repo    TEXT PRIMARY KEY,
    updated TEXT,
    payload TEXT
);
"""


def load_meta(conn, repo):
    row = conn.execute("SELECT payload FROM repo_meta WHERE repo = ?", (repo,)).fetchone()
    return json.loads(row[0]) if row else None


def save_meta(conn, repo, day, payload):
    conn.execute(
        "INSERT OR REPLACE INTO repo_meta(repo, updated, payload) VALUES (?,?,?)",
        (repo, day, json.dumps(payload, ensure_ascii=False)),
    )
    conn.commit()


def connect(path=DB_PATH):
    Path(path).parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(path)
    conn.executescript(SCHEMA)
    return conn


def record(conn, repos, day):
    conn.executemany(
        "INSERT OR REPLACE INTO snapshots(repo, day, stars, forks, open_issues) VALUES (?,?,?,?,?)",
        [(r["full_name"], day, r["stars"], r["forks"], r["open_issues"]) for r in repos],
    )
    conn.commit()


def star_delta(conn, repo, since):
    """窗口内最早一次快照到现在的 star 增量；没有历史就返回 None。"""
    row = conn.execute(
        "SELECT stars FROM snapshots WHERE repo = ? AND day >= ? ORDER BY day ASC LIMIT 1",
        (repo, since),
    ).fetchone()
    row_now = conn.execute(
        "SELECT stars FROM snapshots WHERE repo = ? ORDER BY day DESC LIMIT 1",
        (repo,),
    ).fetchone()
    if not row or not row_now or row[0] == row_now[0]:
        return None
    return row_now[0] - row[0]


def save_analysis(conn, repo, day, payload):
    conn.execute(
        "INSERT OR REPLACE INTO analyses(repo, day, payload) VALUES (?,?,?)",
        (repo, day, json.dumps(payload, ensure_ascii=False)),
    )
    conn.commit()


def load_analysis(conn, repo):
    row = conn.execute("SELECT payload FROM analyses WHERE repo = ?", (repo,)).fetchone()
    return json.loads(row[0]) if row else None
