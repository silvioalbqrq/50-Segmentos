function renderSectors(list = setores) {
  const grid = document.getElementById('sectorsGrid');
  if (!grid) return;

  grid.innerHTML = list.map(s => `
    <a href="setores/setor-${String(s.id).padStart(2, '0')}.html" class="sector-card" data-cat="${s.cat}">
      <span class="sector-number">Setor ${String(s.id).padStart(2, '0')}</span>
      <h3>${s.nome}</h3>
      <p>${s.resumo}</p>
      <span class="tag">${s.tag}</span>
    </a>
  `).join('');
}

function filterSectors() {
  const query = document.getElementById('searchInput').value.toLowerCase().trim();
  const filtered = setores.filter(s => 
    s.nome.toLowerCase().includes(query) || 
    s.resumo.toLowerCase().includes(query) ||
    s.tag.toLowerCase().includes(query)
  );
  renderSectors(filtered);
}

function filterCategory(cat) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  
  if (cat === 'all') {
    renderSectors();
  } else {
    renderSectors(setores.filter(s => s.cat === cat));
  }
}

// Inicializa
document.addEventListener('DOMContentLoaded', () => {
  renderSectors();
});