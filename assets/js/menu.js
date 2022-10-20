//obtener elementos HTML
const nav = document.querySelector("nav"),
  toggleBtn = nav.querySelector(".toggle-btn");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

//código js para hacer navegación arrastrable
function onDrag({ movementY }) { //movementY obtiene el valor vertical del mouse
  const navStyle = window.getComputedStyle(nav), //obteniendo todo el estilo css del nav
    navTop = parseInt(navStyle.top), //obtener el valor superior del nav y convertirlo en un string
    navHeight = parseInt(navStyle.height), //obtener el valor de altura del nav y convertirlo en string
    windHeight = window.innerHeight; //obteniendo la altura de la ventana

  nav.style.top = navTop > 0 ? `${navTop + movementY}px` : "1px";
  if (navTop > windHeight - navHeight) {
    nav.style.top = `${windHeight - navHeight}px`;
  }
}

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
