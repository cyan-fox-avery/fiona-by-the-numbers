
const sourceToggle = document.getElementById('toggle-sources');
const sourcesPanel = document.getElementById('sources-panel');

if (sourceToggle && sourcesPanel) {
  sourceToggle.addEventListener('click', () => {
    const isExpanded = sourceToggle.getAttribute('aria-expanded') === 'true';
    sourceToggle.setAttribute('aria-expanded', String(!isExpanded));
    sourcesPanel.hidden = isExpanded;
    sourceToggle.textContent = isExpanded ? 'Show notes & sources' : 'Hide notes & sources';
  });
}
