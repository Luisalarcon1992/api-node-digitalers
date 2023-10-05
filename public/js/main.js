// On page load or when changing themes, best to add inline in `head` to avoid FOUC
const darkMode = document.getElementById('dark');

darkMode.addEventListener('click', () => {
  darkMode.setAttribute('class', 'bg-black');
});
