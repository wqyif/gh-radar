const DATA = window.RADAR;
const THEME_COLORS = {
  play: "#ff8a5c",
  tool: "#8ab4ff",
  learn: "#c8ff4d",
  visual: "#ff7ab8",
  ai_app: "#5ce1c4",
  runtime: "#ffd166",
  infra: "#9aa0a6",
};

const state = { bucket: "all", theme: "all" };
const $ = (id) => document.getElementById(id);

function fmtStars(n) {
  return n >= 1000 ? (n / 1000).toFixed(1).replace(/\.0$/, "") + "k" : String(n);
}

function shortDate(iso) {
  return iso ? iso.slice(5) : "—";
}

function buildRail() {
  const rail = $("rail");
  const all = document.createElement("button");
  all.className = "seg";
  all.innerHTML = `<span class="seg-title">全部</span>
    <span class="seg-range">0–90 天</span>
    <span class="seg-count">${DATA.items.length} 个项目</span>`;
  all.dataset.bucket = "all";
  rail.appendChild(all);

  for (const b of DATA.buckets) {
    const el = document.createElement("button");
    el.className = "seg";
    el.dataset.bucket = b.key;
    el.innerHTML = `<span class="seg-title">${b.title}</span>
      <span class="seg-range">${b.min_age}–${b.max_age} 天</span>
      <span class="seg-count">${b.count} 个项目</span>`;
    rail.appendChild(el);
  }

  rail.addEventListener("click", (e) => {
    const btn = e.target.closest(".seg");
    if (btn) setBucket(btn.dataset.bucket);
  });
}

function buildThemes() {
  const box = $("themes");
  const make = (key, label, color) => {
    const el = document.createElement("button");
    el.className = "chip";
    el.dataset.theme = key;
    el.innerHTML = `${color ? `<span class="dot" style="--c:${color}"></span>` : ""}${label}`;
    box.appendChild(el);
  };
  make("all", "全部主题", "");
  for (const [key, label] of Object.entries(DATA.themes)) {
    make(key, label, THEME_COLORS[key]);
  }
  box.addEventListener("click", (e) => {
    const btn = e.target.closest(".chip");
    if (btn) setTheme(btn.dataset.theme);
  });
}

function card(item, index) {
  const el = document.createElement("article");
  el.className = "card" + (item.picked ? " picked" : "");
  el.style.setProperty("--i", index);

  const run = [];
  if (item.runnable.windows) run.push("Windows 可跑");
  if (item.runnable.gpu_required) run.push("需要 GPU");
  if (item.language) run.push(item.language);

  const tags = (item.concepts || []).slice(0, 3)
    .map((c) => `<span class="tag">${escapeHtml(c)}</span>`).join("");

  const hype = (item.hype && item.hype.length)
    ? `<div class="warn">可疑信号：${escapeHtml(item.hype.join("、"))}</div>` : "";

  el.innerHTML = `
    <div class="card-top">
      <span class="theme">
        <span class="dot" style="--c:${THEME_COLORS[item.theme] || "#8a9099"}"></span>
        ${escapeHtml(item.theme_title)}
      </span>
      ${item.picked ? '<span class="mark">精选</span>' : ""}
    </div>
    <h2><a href="${item.url}" target="_blank" rel="noopener">${escapeHtml(item.repo)}</a></h2>
    <p class="what">${escapeHtml(item.what)}</p>
    ${item.why ? `<p class="why">${escapeHtml(item.why)}</p>` : ""}
    ${hype}
    ${tags ? `<div class="tags">${tags}</div>` : ""}
    <div class="facts">
      <span><strong>${fmtStars(item.stars)}</strong> 星</span>
      <span>${shortDate(item.created_at)} 创建</span>
      ${run.map((r) => `<span>${escapeHtml(r)}</span>`).join("")}
      <span>${item.total.toFixed(2)} 分</span>
    </div>`;
  return el;
}

function escapeHtml(s) {
  return String(s ?? "").replace(/[&<>"']/g, (c) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[c]));
}

function render() {
  const list = $("list");
  const items = DATA.items
    .filter((it) => state.bucket === "all" || it.bucket === state.bucket)
    .filter((it) => state.theme === "all" || it.theme === state.theme)
    .sort((a, b) => (b.picked - a.picked) || (b.total - a.total));

  list.innerHTML = "";
  items.forEach((it, i) => list.appendChild(card(it, i)));

  $("empty").hidden = items.length > 0;
  $("count").textContent = `${items.length} / ${DATA.items.length} 个项目`;
  $("stamp").textContent = `导出于 ${DATA.generated}`;

  document.querySelectorAll(".seg").forEach((el) => {
    el.setAttribute("aria-pressed", String(el.dataset.bucket === state.bucket));
  });
  document.querySelectorAll(".chip").forEach((el) => {
    el.setAttribute("aria-pressed", String(el.dataset.theme === state.theme));
  });

  const hash = `#${state.bucket}/${state.theme}`;
  if (location.hash !== hash) history.replaceState(null, "", hash);
}

function setBucket(key) {
  state.bucket = key;
  render();
}

function setTheme(key) {
  state.theme = key;
  render();
}

function fromHash() {
  const [bucket, theme] = (location.hash.slice(1) || "all/all").split("/");
  state.bucket = bucket || "all";
  state.theme = theme || "all";
}

document.addEventListener("keydown", (e) => {
  if (e.target.matches("input, textarea")) return;
  const keys = ["all", ...DATA.buckets.map((b) => b.key)];
  const n = Number(e.key);
  if (e.key === "0") setBucket("all");
  else if (n >= 1 && n <= DATA.buckets.length) setBucket(keys[n]);
});

fromHash();
buildRail();
buildThemes();
render();
window.addEventListener("hashchange", () => { fromHash(); render(); });
