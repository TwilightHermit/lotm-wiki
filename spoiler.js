document.addEventListener("click", function (event) {
  var box = event.target.closest(".spoiler-body");
  if (box) {
    box.classList.add("revealed");
  }
});
