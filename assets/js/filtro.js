let items = document.querySelectorAll("[data-open-modal]");
let chosenItem;
let modal;
let closeButtons = document.querySelectorAll("[data-close-modal]");
let page = document.querySelector(".cel-cont");
const openingDuration = 600; //ms
const closingDuration = 600; //ms
const timingFunction = "cubic-bezier(.76,.01,.65,1.2)";

function flipAnimation(first, last, options) {
  let firstRect = first.getBoundingClientRect();
  let lastRect = last.getBoundingClientRect();
  let firstBorderRadius = window
    .getComputedStyle(first)
    .borderTopLeftRadius.replace("px", "");
  let lastBorderRadius = window
    .getComputedStyle(last)
    .borderTopLeftRadius.replace("px", "");

  let deltas = {
    top: firstRect.top - lastRect.top,
    left: firstRect.left - lastRect.left,
    width: firstRect.width / lastRect.width,
    height: firstRect.height / lastRect.height,
  };

  return last.animate(
    [
      {
        transformOrigin: "top left",
        borderRadius: `
${firstBorderRadius / deltas.width}px / ${firstBorderRadius / deltas.height}px`,
        transform: `
translate(${deltas.left}px, ${deltas.top}px) 
scale(${deltas.width}, ${deltas.height})
`,
      },
      {
        transformOrigin: "top left",
        transform: "none",
        borderRadius: `${lastBorderRadius}px`,
      },
    ],
    options
  );
}

page.addEventListener("click", (e) => {
  if (e.target && !e.target.matches("[data-open-modal], [data-open-modal] *"))
    return;
  chosenItem = e.target.closest("[data-open-modal]");

  modal = document.querySelector(`#${chosenItem.dataset.openModal} .modal`);

  document
    .querySelector(`#${chosenItem.dataset.openModal}`)
    .classList.add("active");

  page.dataset.modalState = "opening";

  chosenItem.classList.add("chosen");

  document.querySelector("body").classList.add("no-scroll");

  let animation = flipAnimation(chosenItem, modal, {
    duration: openingDuration,
    easing: timingFunction,
    fill: "both",
  });

  animation.onfinish = () => {
    page.dataset.modalState = "open";
    animation.cancel();
  };
});

closeButtons.forEach((closeButton) => {
  closeButton.addEventListener("click", (e) => {
    page.dataset.modalState = "closing";

    modal.querySelector(".modal__scroll-area").scrollTop = 0;

    document.querySelector("body").classList.remove("no-scroll");

    let animation = flipAnimation(chosenItem, modal, {
      duration: closingDuration,
      easing: timingFunction,
      direction: "reverse",
      fill: "both",
    });

    animation.onfinish = () => {
      page.dataset.modalState = "closed";
      chosenItem.classList.remove("chosen");
      document
        .querySelector(`#${chosenItem.dataset.openModal}`)
        .classList.remove("active");
      animation.cancel();
    };
  });
});

page.addEventListener("change", (e) => {
  if (e.target && e.target.matches(".filter-input")) {
    let filterInputs = Array.from(document.querySelectorAll(".filter-input"));
    let currentClasses = filterInputs
      .filter((input) => {
        return input.checked;
      })
      .map((input) => {
        return `.filter-${input.id}`;
      })
      .join(", ");

    document.querySelectorAll(".filter-active").forEach((item) => {
      item.classList.remove("filter-active");
    });

    if (currentClasses) {
      document
        .querySelectorAll(currentClasses)
        .forEach((label) => label.classList.add("filter-active"));
    }
  }
});

document.querySelector(".filter-clear").addEventListener("click", (e) => {
  document
    .querySelectorAll(".filter-input")
    .forEach((item) => (item.checked = false));
  document
    .querySelectorAll(".filter-active")
    .forEach((item) => item.classList.remove("filter-active"));
});