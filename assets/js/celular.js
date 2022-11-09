$(document).ready(function () {
  // JS DESTACADO
  var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 20,
      stretch: 0,
      depth: 350,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });

  // JS BUSCAR
  let inputBox = document.querySelector(".input-box"),
    searchIcon = document.querySelector(".search"),
    closeIcon = document.querySelector(".b-close");

  searchIcon.addEventListener("click", () => inputBox.classList.add("open"));
  closeIcon.addEventListener("click", () => inputBox.classList.remove("open"));

  document.addEventListener("keyup", (e) => {
    if (e.target.matches("#buscador")) {
      if (e.key === "Escape") e.target.value = "";

      document.querySelectorAll(".product-search").forEach((mobile) => {
        mobile.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? mobile.classList.remove("search-cel")
          : mobile.classList.add("search-cel");
      });
    }
  });

  // JS DE LOS CELULARES INFO EN LA VENTANA MODAL
  var swiper = new Swiper(".product-slider", {
    spaceBetween: 30,
    effect: "fade",
    // initialSlide: 2,
    loop: false,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    // mousewheel: {
    //     // invert: false
    // },
    on: {
      init: function () {
        var index = this.activeIndex;

        var target = $(".ps-item").eq(index).data("target");

        console.log(target);

        $(".img-item").removeClass("active");
        $(".img-item#" + target).addClass("active");
      },
    },
  });

  swiper.on("slideChange", function () {
    var index = this.activeIndex;

    var target = $(".ps-item").eq(index).data("target");

    console.log(target);

    $(".img-item").removeClass("active");
    $(".img-item#" + target).addClass("active");

    if (swiper.isEnd) {
      $(".prev").removeClass("disabled");
      $(".next").addClass("disabled");
    } else {
      $(".next").removeClass("disabled");
    }

    if (swiper.isBeginning) {
      $(".prev").addClass("disabled");
    } else {
      $(".prev").removeClass("disabled");
    }
  });

  $(".js-fav").on("click", function () {
    $(this).find(".heart").toggleClass("is-active");
  });
});

//JS FILTRO
var items = $(".results .item");
var amount;

$("select.filter").on("change", function () {
  var fltrProd = $("select#marcas");
  var fltrPlat = $("select#alm");

  var prodVal = fltrProd.val();
  var platVal = fltrPlat.val();

  if (prodVal == "0" && platVal == "0") {
    // show all items
    items.removeClass("hidden").addClass("visible");
  } else {
    // filter and show only items with selected values in data attr
    items.addClass("hidden").removeClass("visible");

    if (prodVal == "0" && platVal != "0") {
      $('.item[data-filter-alm="' + platVal + '"]')
        .removeClass("hidden")
        .addClass("visible");
    } else if (prodVal != "0" && platVal == "0") {
      $('.item[data-filter-marcas="' + prodVal + '"]')
        .removeClass("hidden")
        .addClass("visible");
    } else {
      $(
        '.item[data-filter-alm="' +
          platVal +
          '"][data-filter-marcas="' +
          prodVal +
          '"]'
      )
        .removeClass("hidden")
        .addClass("visible");
    }
  }
});