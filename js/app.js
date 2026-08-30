function renderSectors(list = setores) {
  const grid = document.getElementById("sectorsGrid");
  if (!grid) return;
  grid.innerHTML = list.map(s => `
    <a href="setores/setor-${String(s.id).padStart(2,"0")}.html" class="sector-card" data-cat="${s.cat}">
      <span class="sector-number">Setor ${String(s.id).padStart(2,"0")}</span>
      <h3>${s.nome}</h3>
      <p>${s.resumo}</p>
      <span class="tag">${s.tag}</span>
    </a>`).join("");
}
function filterSectors() {
  const q = (document.getElementById("searchInput").value || "").toLowerCase().trim();
  renderSectors(setores.filter(s =>
    s.nome.toLowerCase().includes(q) || s.resumo.toLowerCase().includes(q) || s.tag.toLowerCase().includes(q)
  ));
}
function filterCategory(cat, el) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  if (el) el.classList.add("active");
  renderSectors(cat === "all" ? setores : setores.filter(s => s.cat === cat));
}
document.addEventListener("DOMContentLoaded", () => renderSectors());
