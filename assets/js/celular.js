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

$(".js-fav").on("click", function () {
  $(this).find(".heart").toggleClass("is-active");
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

// JS SWEET ALERTS 2
const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

Toast.fire({
  icon: "info",
  title: "ENVIÓ GRATIS EN CABA.",

  customClass: {
    popup: "popup-info",
    title: "alert-titulo",
    timerProgressBar: "bar-alert",
  },
});


// JS DE LOS CELULARES INFO EN LA VENTANA MODAL

//JS VER-MAS1
var swiper = new Swiper(".psl-1", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-1").removeClass("active");
      $(".i-1#" + target).addClass("active");
    },
  },
});



swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-1").removeClass("active");
  $(".i-1#" + target).addClass("active");
});


//JS VER-MAS2
var swiper = new Swiper(".psl-2", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-2").removeClass("active");
      $(".i-2#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-2").removeClass("active");
  $(".i-2#" + target).addClass("active");
});


//JS VER-MAS3
var swiper = new Swiper(".psl-3", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-3").removeClass("active");
      $(".i-3#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-3").removeClass("active");
  $(".i-3#" + target).addClass("active");
});

//JS VER-MAS4
var swiper = new Swiper(".psl-4", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-4").removeClass("active");
      $(".i-4#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-4").removeClass("active");
  $(".i-4#" + target).addClass("active");
});

//JS VER-MAS5
var swiper = new Swiper(".psl-5", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-5").removeClass("active");
      $(".i-5#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-5").removeClass("active");
  $(".i-5#" + target).addClass("active");
});

//JS VER-MAS6
var swiper = new Swiper(".psl-6", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-6").removeClass("active");
      $(".i-6#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-6").removeClass("active");
  $(".i-6#" + target).addClass("active");
});

//JS VER-MAS7
var swiper = new Swiper(".psl-7", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-7").removeClass("active");
      $(".i-7#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-7").removeClass("active");
  $(".i-7#" + target).addClass("active");
});

//JS VER-MAS8
var swiper = new Swiper(".psl-8", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-8").removeClass("active");
      $(".i-8#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-8").removeClass("active");
  $(".i-8#" + target).addClass("active");
});

//JS VER-MAS9
var swiper = new Swiper(".psl-9", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-9").removeClass("active");
      $(".i-9#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-9").removeClass("active");
  $(".i-9#" + target).addClass("active");
});

//JS VER-MAS10
var swiper = new Swiper(".psl-10", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-10").removeClass("active");
      $(".i-10#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-10").removeClass("active");
  $(".i-10#" + target).addClass("active");
});

//JS VER-MAS11
var swiper = new Swiper(".psl-11", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-11").removeClass("active");
      $(".i-11#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-11").removeClass("active");
  $(".i-11#" + target).addClass("active");
});

//JS VER-MAS12
var swiper = new Swiper(".psl-12", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-12").removeClass("active");
      $(".i-12#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-12").removeClass("active");
  $(".i-12#" + target).addClass("active");
});

//JS VER-MAS13
var swiper = new Swiper(".psl-13", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-13").removeClass("active");
      $(".i-13#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-13").removeClass("active");
  $(".i-13#" + target).addClass("active");
});

//JS VER-MAS14
var swiper = new Swiper(".psl-14", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-14").removeClass("active");
      $(".i-14#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-14").removeClass("active");
  $(".i-14#" + target).addClass("active");
});

//JS VER-MAS15
var swiper = new Swiper(".psl-15", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-15").removeClass("active");
      $(".i-15#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-15").removeClass("active");
  $(".i-15#" + target).addClass("active");
});

//JS VER-MAS16
var swiper = new Swiper(".psl-16", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-16").removeClass("active");
      $(".i-16#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-16").removeClass("active");
  $(".i-16#" + target).addClass("active");
});

//JS VER-MAS17
var swiper = new Swiper(".psl-17", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-17").removeClass("active");
      $(".i-17#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-17").removeClass("active");
  $(".i-17#" + target).addClass("active");
});

//JS VER-MAS18
var swiper = new Swiper(".psl-18", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-18").removeClass("active");
      $(".i-18#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-18").removeClass("active");
  $(".i-18#" + target).addClass("active");
});

//JS VER-MAS19
var swiper = new Swiper(".psl-19", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-19").removeClass("active");
      $(".i-19#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-19").removeClass("active");
  $(".i-19#" + target).addClass("active");
});

//JS VER-MAS20
var swiper = new Swiper(".psl-20", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-20").removeClass("active");
      $(".i-20#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-20").removeClass("active");
  $(".i-20#" + target).addClass("active");
});

//JS VER-MAS21
var swiper = new Swiper(".psl-21", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-21").removeClass("active");
      $(".i-21#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-21").removeClass("active");
  $(".i-21#" + target).addClass("active");
});

//JS VER-MAS22
var swiper = new Swiper(".psl-22", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-22").removeClass("active");
      $(".i-22#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-22").removeClass("active");
  $(".i-22#" + target).addClass("active");
});

//JS VER-MAS23
var swiper = new Swiper(".psl-23", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-23").removeClass("active");
      $(".i-23#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-23").removeClass("active");
  $(".i-23#" + target).addClass("active");
});

//JS VER-MAS24
var swiper = new Swiper(".psl-24", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-24").removeClass("active");
      $(".i-24#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-24").removeClass("active");
  $(".i-24#" + target).addClass("active");
});

//JS VER-MAS25
var swiper = new Swiper(".psl-25", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-25").removeClass("active");
      $(".i-25#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-25").removeClass("active");
  $(".i-25#" + target).addClass("active");
});

//JS VER-MAS26
var swiper = new Swiper(".psl-26", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-26").removeClass("active");
      $(".i-26#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-26").removeClass("active");
  $(".i-26#" + target).addClass("active");
});

//JS VER-MAS27
var swiper = new Swiper(".psl-27", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-27").removeClass("active");
      $(".i-27#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-27").removeClass("active");
  $(".i-27#" + target).addClass("active");
});

//JS VER-MAS28
var swiper = new Swiper(".psl-28", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-28").removeClass("active");
      $(".i-28#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-28").removeClass("active");
  $(".i-28#" + target).addClass("active");
});

//JS VER-MAS29
var swiper = new Swiper(".psl-29", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-29").removeClass("active");
      $(".i-29#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-29").removeClass("active");
  $(".i-29#" + target).addClass("active");
});

//JS VER-MAS30
var swiper = new Swiper(".psl-30", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-30").removeClass("active");
      $(".i-30#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-30").removeClass("active");
  $(".i-30#" + target).addClass("active");
});

//JS VER-MAS31
var swiper = new Swiper(".psl-31", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-31").removeClass("active");
      $(".i-31#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-31").removeClass("active");
  $(".i-31#" + target).addClass("active");
});

//JS VER-MAS32
var swiper = new Swiper(".psl-32", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-32").removeClass("active");
      $(".i-32#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-32").removeClass("active");
  $(".i-32#" + target).addClass("active");
});

//JS VER-MAS33
var swiper = new Swiper(".psl-33", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-33").removeClass("active");
      $(".i-33#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-33").removeClass("active");
  $(".i-33#" + target).addClass("active");
});

//JS VER-MAS34
var swiper = new Swiper(".psl-34", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-34").removeClass("active");
      $(".i-34#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-34").removeClass("active");
  $(".i-34#" + target).addClass("active");
});

//JS VER-MAS35
var swiper = new Swiper(".psl-35", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-35").removeClass("active");
      $(".i-35#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-35").removeClass("active");
  $(".i-35#" + target).addClass("active");
});

//JS VER-MAS36
var swiper = new Swiper(".psl-36", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-36").removeClass("active");
      $(".i-36#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-36").removeClass("active");
  $(".i-36#" + target).addClass("active");
});

//JS VER-MAS37
var swiper = new Swiper(".psl-37", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-37").removeClass("active");
      $(".i-37#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-37").removeClass("active");
  $(".i-37#" + target).addClass("active");
});

//JS VER-MAS38
var swiper = new Swiper(".psl-38", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-38").removeClass("active");
      $(".i-38#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-38").removeClass("active");
  $(".i-38#" + target).addClass("active");
});

//JS VER-MAS39
var swiper = new Swiper(".psl-39", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-39").removeClass("active");
      $(".i-39#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-39").removeClass("active");
  $(".i-39#" + target).addClass("active");
});

//JS VER-MAS40
var swiper = new Swiper(".psl-40", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-40").removeClass("active");
      $(".i-40#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-40").removeClass("active");
  $(".i-40#" + target).addClass("active");
});

//JS VER-MAS41
var swiper = new Swiper(".psl-41", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-41").removeClass("active");
      $(".i-41#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-41").removeClass("active");
  $(".i-41#" + target).addClass("active");
});

//JS VER-MAS42
var swiper = new Swiper(".psl-42", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-42").removeClass("active");
      $(".i-42#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-42").removeClass("active");
  $(".i-42#" + target).addClass("active");
});

//JS VER-MAS43
var swiper = new Swiper(".psl-43", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-43").removeClass("active");
      $(".i-43#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-43").removeClass("active");
  $(".i-43#" + target).addClass("active");
});

//JS VER-MAS44
var swiper = new Swiper(".psl-44", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-44").removeClass("active");
      $(".i-44#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-44").removeClass("active");
  $(".i-44#" + target).addClass("active");
});

//JS VER-MAS45
var swiper = new Swiper(".psl-45", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-45").removeClass("active");
      $(".i-45#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-45").removeClass("active");
  $(".i-45#" + target).addClass("active");
});

//JS VER-MAS46
var swiper = new Swiper(".psl-46", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-46").removeClass("active");
      $(".i-46#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-46").removeClass("active");
  $(".i-46#" + target).addClass("active");
});

//JS VER-MAS47
var swiper = new Swiper(".psl-47", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-47").removeClass("active");
      $(".i-47#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-47").removeClass("active");
  $(".i-47#" + target).addClass("active");
});

//JS VER-MAS48
var swiper = new Swiper(".psl-48", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-48").removeClass("active");
      $(".i-48#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-48").removeClass("active");
  $(".i-48#" + target).addClass("active");
});

//JS VER-MAS49
var swiper = new Swiper(".psl-49", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-49").removeClass("active");
      $(".i-49#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-49").removeClass("active");
  $(".i-49#" + target).addClass("active");
});

//JS VER-MAS50
var swiper = new Swiper(".psl-50", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-50").removeClass("active");
      $(".i-50#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-50").removeClass("active");
  $(".i-50#" + target).addClass("active");
});

//JS VER-MAS51
var swiper = new Swiper(".psl-51", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-51").removeClass("active");
      $(".i-51#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-51").removeClass("active");
  $(".i-51#" + target).addClass("active");
});

//JS VER-MAS52
var swiper = new Swiper(".psl-52", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-52").removeClass("active");
      $(".i-52#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-52").removeClass("active");
  $(".i-52#" + target).addClass("active");
});

//JS VER-MAS53
var swiper = new Swiper(".psl-53", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-53").removeClass("active");
      $(".i-53#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-53").removeClass("active");
  $(".i-53#" + target).addClass("active");
});

//JS VER-MAS54
var swiper = new Swiper(".psl-54", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-54").removeClass("active");
      $(".i-54#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-54").removeClass("active");
  $(".i-54#" + target).addClass("active");
});

//JS VER-MAS55
var swiper = new Swiper(".psl-55", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-55").removeClass("active");
      $(".i-55#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-55").removeClass("active");
  $(".i-55#" + target).addClass("active");
});

//JS VER-MAS56
var swiper = new Swiper(".psl-56", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-56").removeClass("active");
      $(".i-56#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-56").removeClass("active");
  $(".i-56#" + target).addClass("active");
});

//JS VER-MAS57
var swiper = new Swiper(".psl-57", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-57").removeClass("active");
      $(".i-57#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-57").removeClass("active");
  $(".i-57#" + target).addClass("active");
});

//JS VER-MAS58
var swiper = new Swiper(".psl-58", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-58").removeClass("active");
      $(".i-58#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-58").removeClass("active");
  $(".i-58#" + target).addClass("active");
});

//JS VER-MAS59
var swiper = new Swiper(".psl-59", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-59").removeClass("active");
      $(".i-59#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-59").removeClass("active");
  $(".i-59#" + target).addClass("active");
});

//JS VER-MAS60
var swiper = new Swiper(".psl-60", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-60").removeClass("active");
      $(".i-60#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-60").removeClass("active");
  $(".i-60#" + target).addClass("active");
});

//JS VER-MAS61
var swiper = new Swiper(".psl-61", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-61").removeClass("active");
      $(".i-61#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-61").removeClass("active");
  $(".i-61#" + target).addClass("active");
});

//JS VER-MAS62
var swiper = new Swiper(".psl-62", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-62").removeClass("active");
      $(".i-62#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-62").removeClass("active");
  $(".i-62#" + target).addClass("active");
});

//JS VER-MAS63
var swiper = new Swiper(".psl-63", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-63").removeClass("active");
      $(".i-63#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-63").removeClass("active");
  $(".i-63#" + target).addClass("active");
});

//JS VER-MAS64
var swiper = new Swiper(".psl-64", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-64").removeClass("active");
      $(".i-64#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-64").removeClass("active");
  $(".i-64#" + target).addClass("active");
});

//JS VER-MAS65
var swiper = new Swiper(".psl-65", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-65").removeClass("active");
      $(".i-65#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-65").removeClass("active");
  $(".i-65#" + target).addClass("active");
});

//JS VER-MAS66
var swiper = new Swiper(".psl-66", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-66").removeClass("active");
      $(".i-66#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-66").removeClass("active");
  $(".i-66#" + target).addClass("active");
});

//JS VER-MAS67
var swiper = new Swiper(".psl-67", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-67").removeClass("active");
      $(".i-67#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-67").removeClass("active");
  $(".i-67#" + target).addClass("active");
});

//JS VER-MAS68
var swiper = new Swiper(".psl-68", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-68").removeClass("active");
      $(".i-68#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-68").removeClass("active");
  $(".i-68#" + target).addClass("active");
});

//JS VER-MAS69
var swiper = new Swiper(".psl-69", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-69").removeClass("active");
      $(".i-69#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-69").removeClass("active");
  $(".i-69#" + target).addClass("active");
});

//JS VER-MAS70
var swiper = new Swiper(".psl-70", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-70").removeClass("active");
      $(".i-70#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-70").removeClass("active");
  $(".i-70#" + target).addClass("active");
});

//JS VER-MAS71
var swiper = new Swiper(".psl-71", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-71").removeClass("active");
      $(".i-71#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-71").removeClass("active");
  $(".i-71#" + target).addClass("active");
});

//JS VER-MAS72
var swiper = new Swiper(".psl-72", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-72").removeClass("active");
      $(".i-72#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-72").removeClass("active");
  $(".i-72#" + target).addClass("active");
});

//JS VER-MAS73
var swiper = new Swiper(".psl-73", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-73").removeClass("active");
      $(".i-73#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-73").removeClass("active");
  $(".i-73#" + target).addClass("active");
});

//JS VER-MAS73
var swiper = new Swiper(".psl-73", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-73").removeClass("active");
      $(".i-73#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-73").removeClass("active");
  $(".i-73#" + target).addClass("active");
});

//JS VER-MAS74
var swiper = new Swiper(".psl-74", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-74").removeClass("active");
      $(".i-74#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-74").removeClass("active");
  $(".i-74#" + target).addClass("active");
});

//JS VER-MAS75
var swiper = new Swiper(".psl-75", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-75").removeClass("active");
      $(".i-75#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-75").removeClass("active");
  $(".i-75#" + target).addClass("active");
});

//JS VER-MAS76
var swiper = new Swiper(".psl-76", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-76").removeClass("active");
      $(".i-76#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-76").removeClass("active");
  $(".i-76#" + target).addClass("active");
});

//JS VER-MAS77
var swiper = new Swiper(".psl-77", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-77").removeClass("active");
      $(".i-77#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-77").removeClass("active");
  $(".i-77#" + target).addClass("active");
});


//JS VER-MAS78
var swiper = new Swiper(".psl-78", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-78").removeClass("active");
      $(".i-78#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-78").removeClass("active");
  $(".i-78#" + target).addClass("active");
});


//JS VER-MAS79
var swiper = new Swiper(".psl-79", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-79").removeClass("active");
      $(".i-79#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-79").removeClass("active");
  $(".i-79#" + target).addClass("active");
});


//JS VER-MAS80
var swiper = new Swiper(".psl-80", {
  spaceBetween: 30,
  effect: "fade",
  // initialSlide: ,
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

      $(".i-80").removeClass("active");
      $(".i-80#" + target).addClass("active");
    },
  },
});

swiper.on("slideChange", function () {
  var index = this.activeIndex;

  var target = $(".ps-item").eq(index).data("target");

  console.log(target);

  $(".i-80").removeClass("active");
  $(".i-80#" + target).addClass("active");
});
