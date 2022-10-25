let inputBox = document.querySelector(".input-box"),
searchIcon = document.querySelector(".search"),
closeIcon = document.querySelector(".b-close");

searchIcon.addEventListener("click", () => inputBox.classList.add("open"));
closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));