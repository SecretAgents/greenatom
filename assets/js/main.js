$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
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

  $('.scrollbar-dynamic').scrollbar();
});