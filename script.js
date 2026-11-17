document.getElementById("toggle-toc").addEventListener("click", function () {
  const toc = document.getElementById("contents");
  const collapsed = toc.classList.toggle("collapsed");
  this.textContent = collapsed ? "[表示]" : "[非表示]";
});
