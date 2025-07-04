console.log("Script berhasil dimuat!");
console.log("==========================================================");

const toggleBtn = document.getElementById('toggleBtn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('active');
});
document.addEventListener('click', (e) => {
  const isClickInsideSidebar = sidebar.contains(e.target);
  const isClickOnToggle = toggleBtn.contains(e.target);

  if (!isClickInsideSidebar && !isClickOnToggle) {
    sidebar.classList.remove('active');
  }
});