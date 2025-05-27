function toggle(id, toggleElement) {
  const content = document.getElementById(id);
  const icon = toggleElement.querySelector('.toggle-icon');

  content.classList.toggle('hidden');

  if (content.classList.contains('hidden')) {
    icon.textContent = '▼';
  } else {
    icon.textContent = '▲';
  }
}
