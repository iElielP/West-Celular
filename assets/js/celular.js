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


// JS SELECT

$('select[data-menu]').each(function() {

  let select = $(this),
      options = select.find('option'),
      menu = $('<div />').addClass('select-menu'),
      button = $('<div />').addClass('button'),
      list = $('<ul />'),
      arrow = $('<em />').prependTo(button);

  options.each(function(i) {
      let option = $(this);
      list.append($('<li />').text(option.text()));
  });

  menu.css('--t', select.find(':selected').index() * -41 + 'px');

  select.wrap(menu);

  button.append(list).insertAfter(select);

  list.clone().insertAfter(button);

});

$(document).on('click', '.select-menu', function(e) {

  let menu = $(this);

  if(!menu.hasClass('open')) {
      menu.addClass('open');
  }

});

$(document).on('click', '.select-menu > ul > li', function(e) {

  let li = $(this),
      menu = li.parent().parent(),
      select = menu.children('select'),
      selected = select.find('option:selected'),
      index = li.index();

  menu.css('--t', index * -41 + 'px');
  selected.attr('selected', false);
  select.find('option').eq(index).attr('selected', true);

  menu.addClass(index > selected.index() ? 'tilt-down' : 'tilt-up');

  setTimeout(() => {
      menu.removeClass('open tilt-up tilt-down');
  }, 500);

});

$(document).click(e => {
  e.stopPropagation();
  if($('.select-menu').has(e.target).length === 0) {
      $('.select-menu').removeClass('open');
  }
})