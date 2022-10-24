let closeButtons = document.querySelectorAll("[data-close-modal]");
let page = document.querySelector(".cel-cont");

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