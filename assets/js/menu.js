//obtener elementos HTML
const nav = document.querySelector("nav"),
  toggleBtn = nav.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});


//esta función llamará cuando el usuario haga clic en el botón del mouse y mueva el mouse en la navegación
nav.addEventListener("mousedown", () => {
  nav.addEventListener("mousemove", onDrag);
});

//esta función llamará cuando el usuario suelte el botón del mouse y deje el mouse desde la navegación
nav.addEventListener("mouseup", () => {
  nav.removeEventListener("mousemove", onDrag);
});
nav.addEventListener("mouseleave", () => {
  nav.removeEventListener("mousemove", onDrag);
});
