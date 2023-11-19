const btnNext = document.querySelector(".btn-next");
const btnPrev = document.querySelector(".btn-prev");
const runner = document.querySelector(".runner");
const circle = document.querySelectorAll(".circle");

let progressStep = 0;
let runnerWidth = [0, 130, 220, 350];

btnNext.addEventListener("click", function () {
  runner.style.animationName = `move-progress${++progressStep}`;
  runner.style.width = `${runnerWidth[progressStep]}px`;
  runner.style.animationDirection = "normal";
  checkButton();
  circleActiveToggle();
});

btnPrev.addEventListener("click", function () {
  runner.style.animationDirection = "reverse";
  runner.style.animationName = `move-progress${progressStep}`;
  runner.style.width = `${runnerWidth[--progressStep]}px`;
  checkButton();
  circleActiveToggle();
});

const checkButton = function () {
  if (progressStep <= 0) {
    btnPrev.setAttribute("disabled", "");
  } else {
    btnPrev.removeAttribute("disabled");
  }
  if (progressStep >= 3) {
    btnNext.setAttribute("disabled", "");
  } else {
    btnNext.removeAttribute("disabled");
  }
};

const circleActiveToggle = function () {
  circle.forEach((circleElement) => circleElement.classList.remove("active"));
  circle[progressStep].classList.add("active");
};
