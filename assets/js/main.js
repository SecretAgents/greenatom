$(document).ready(function(){
  $('.owl-carousel-simple').addClass('owl-carousel owl-theme').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: true,
    autoHeight: true,
    navText: ""
  });

  jQuery.extend(jQuery.colorbox.settings, {
      current: "{current} из {total}"
      // previous: "назад",
      // next: "вперёд",
      // close: "закрыть",
      // xhrError: "Не удалось загрузить содержимое.",
      // imgError: "Не удалось загрузить изображение.",
      // slideshowStart: "начать слайд-шоу",
      // slideshowStop: "остановить слайд-шоу"
 });

  $('.menu-open').on("click", function() {
    $('.additional-menu-wrapper').addClass('menu-change-visibility')
  });

  $('.menu-close').on( "click", function() {
    $('.additional-menu-wrapper').removeClass('menu-change-visibility')
  });

  if ($('.scrollbar-dynamic').size()) {
    $('.scrollbar-dynamic').scrollbar();
  }

  if ($('#additional-menu').size()) {
    $('#additional-menu').easytree({disableIcons: true});
  }

  if($('.gallery-list-item').size()) {
    $('.gallery-list-item .image-gallery').colorbox({rel:'image-gallery'});
  }
});
