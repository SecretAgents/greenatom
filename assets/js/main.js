$(document).ready(function(){
  $('.owl-carousel-simple').addClass('owl-carousel owl-theme').owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    nav: true,
    autoHeight: true,
    navText: ""
  })

  $('.menu-open').on("click", function() {
    $('.additional-menu-wrapper').addClass('menu-change-visibility')
  });

  $('.menu-close').on( "click", function() {
    $('.additional-menu-wrapper').removeClass('menu-change-visibility')
  });

  if ($('.scrollbar-dynamic').size) {
    $('.scrollbar-dynamic').scrollbar();
  }

  if ($('#additional-menu').size) {
    $('#additional-menu').easytree({disableIcons: true});
  }
});
