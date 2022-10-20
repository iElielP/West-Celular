let inputBox = document.querySelector(".input-box"),
searchIcon = document.querySelector(".icon-search"),
closeIcon = document.querySelector(".fa-xmark");

searchIcon.addEventListener("click", () => inputBox.classList.add("open"));
closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));