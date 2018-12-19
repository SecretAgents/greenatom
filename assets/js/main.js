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

  if ($('.colorbox-gallery').size()) {
    $('.colorbox-gallery').colorbox({rel:'colorbox-gallery', maxWidth:'95%', maxHeight:'95%'});
  }

  if ($('.colorbox-video').size()) {
    $('.colorbox-video').colorbox({width: '600px', height: '400px', iframe: true, maxWidth:'95%', maxHeight:'95%'});
  }
});
