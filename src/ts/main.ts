const panels = document.querySelectorAll('.panel');

panels.forEach((panel): void => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses(): void {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
}
