console.log("Script berhasil dimuat!");
console.log("==========================================================");

const sidebar = document.getElementById("sidebar");
const toggleBtn = document.getElementById("toggleBtn");
const closeSidebarBtn = document.getElementById("closeSidebarBtn");
const kontentEdukasi = document.getElementById("kontentEdukasi");
toggleBtn.addEventListener("click", function() {
  sidebar.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});

closeSidebarBtn.addEventListener("click", function() {
  sidebar.classList.remove("active");
  toggleBtn.classList.remove("active");
});

function loadContent(page){
  kontentEdukasi.src = `../konten/halaman${page}.html`;
}