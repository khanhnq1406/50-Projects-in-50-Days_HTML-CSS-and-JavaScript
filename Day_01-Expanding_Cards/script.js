const panels = document.querySelectorAll(".panel");

panels.forEach((div) => {
  div.addEventListener("click", function () {
    if (!div.classList.contains("expand")) {
      removeActiveClass();
      div.classList.add("expand");
    } else removeActiveClass();
  });
});

const removeActiveClass = function () {
  panels.forEach((div) => {
    div.classList.remove("expand");
  });
};
