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

  // $('li.current_place.pushy-submenu').addClass('pushy-submenu-open').removeClass('pushy-submenu-closed');
  //
  // $('li.current_place').parents().each(function () {
  //   if ($(this).hasClass('pushy-submenu')) {
  //     $(this).addClass('pushy-submenu-open').removeClass('pushy-submenu-closed');
  //   }
  // });
});