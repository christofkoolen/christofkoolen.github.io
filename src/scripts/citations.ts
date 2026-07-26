document.querySelectorAll<HTMLButtonElement>('.citation-toggle').forEach((toggle) => {
  toggle.addEventListener('click', () => {
    const panelId = toggle.dataset.panel;
    if (!panelId) return;

    const resources = toggle.closest<HTMLElement>('.publication-resources');
    const panel = document.getElementById(panelId);
    if (!resources || !panel) return;

    const shouldOpen = panel.hasAttribute('hidden');

    resources.querySelectorAll<HTMLElement>('.citation-content').forEach((content) => {
      content.hidden = true;
    });

    resources.querySelectorAll<HTMLButtonElement>('.citation-toggle').forEach((button) => {
      button.setAttribute('aria-expanded', 'false');
    });

    if (shouldOpen) {
      panel.hidden = false;
      toggle.setAttribute('aria-expanded', 'true');
    }
  });
});
