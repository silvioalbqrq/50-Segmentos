/**
 * Proteção de código-fonte (dificulta inspeção)
 * Permite seleção e cópia do conteúdo textual visível
 */
(function () {
  'use strict';

  // 1. Bloqueia clique direito (menu de contexto)
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    return false;
  }, { capture: true });

  // 2. Bloqueia atalhos de DevTools / View Source / Save
  document.addEventListener('keydown', function (e) {
    // F12
    if (e.key === 'F12' || e.keyCode === 123) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    // Ctrl+Shift+I / Ctrl+Shift+J / Ctrl+Shift+C (DevTools)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C' || e.keyCode === 73 || e.keyCode === 74 || e.keyCode === 67)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    // Ctrl+U (View Source)
    if (e.ctrlKey && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    // Ctrl+S (Save Page)
    if (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.keyCode === 83)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    // Ctrl+Shift+S
    if (e.ctrlKey && e.shiftKey && (e.key === 'S' || e.keyCode === 83)) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    // Cmd+Option+I / Cmd+Option+J / Cmd+Option+C (Mac)
    if (e.metaKey && e.altKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
    // Cmd+U (Mac View Source)
    if (e.metaKey && (e.key === 'u' || e.key === 'U')) {
      e.preventDefault();
      e.stopPropagation();
      return false;
    }
  }, { capture: true });

  // 3. Detecta abertura de DevTools (aproximação por diferença de tamanho)
  var devtoolsOpen = false;
  var threshold = 160;

  function checkDevTools() {
    var widthDiff = window.outerWidth - window.innerWidth > threshold;
    var heightDiff = window.outerHeight - window.innerHeight > threshold;
    if (widthDiff || heightDiff) {
      if (!devtoolsOpen) {
        devtoolsOpen = true;
        // Opcional: redirecionar ou limpar (comentado para não atrapalhar uso legítimo)
        // document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#0a0e17;color:#94a3b8;font-family:sans-serif;">Inspeção de código não permitida.</div>';
      }
    } else {
      devtoolsOpen = false;
    }
  }

  setInterval(checkDevTools, 1000);

  // 4. Impede arrastar imagens e links (reduz captura fácil de assets)
  document.addEventListener('dragstart', function (e) {
    if (e.target.tagName === 'IMG' || e.target.tagName === 'A') {
      e.preventDefault();
      return false;
    }
  });

  // 5. Limpa console periodicamente (dificulta análise)
  if (typeof console !== 'undefined') {
    setInterval(function () {
      try {
        console.clear();
      } catch (err) {}
    }, 3000);
  }

  // 6. Desabilita seleção apenas em elementos de interface (não no conteúdo)
  // O conteúdo textual (.content-block, .intro-content, parágrafos de setores) permanece selecionável
})();