"""统一的 HTTP 入口：绕开系统代理、带上 GitHub Token。"""

import os

import requests

import config

_session = None


def session():
    global _session
    if _session is None:
        _session = requests.Session()
        _session.trust_env = config.USE_PROXY
        _session.headers.update({"User-Agent": "gh-radar/0.1"})
        token = os.getenv("GITHUB_TOKEN")
        if token:
            _session.headers["Authorization"] = f"Bearer {token}"
    return _session


def get(url, **kwargs):
    kwargs.setdefault("timeout", 30)
    return session().get(url, **kwargs)


def get_html(url, **kwargs):
    kwargs.setdefault("timeout", 30)
    headers = {"Accept": "text/html", "User-Agent": "Mozilla/5.0"}
    return session().get(url, headers=headers, **kwargs)
