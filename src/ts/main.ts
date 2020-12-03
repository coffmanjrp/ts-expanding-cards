const panels: any = document.querySelectorAll('.panel');

panels.forEach((panel: any) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses(): void {
  panels.forEach((panel: any) => {
    panel.classList.remove('active');
  });
}
