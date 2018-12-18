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

  // $('.scrollbar-dynamic').scrollbar();

  $('.navigation-toggle-link').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    $('.top-menu-list-item').removeClass('active');
    $('.navigation-list').toggleClass('active');
  });

  $('.navigation-list-item > a').on('click', function(e) {
    e.preventDefault();
    $('.navigation-list ul').removeClass('active');
    $(this).siblings('ul').toggleClass('active');
  });

  $('.top-menu-list-item').on('click', function(e) {
    e.preventDefault();
    $('.navigation-list, .navigation-toggle-link').removeClass('active');
    $(this).siblings('.top-menu-list-item').removeClass('active');
    $(this).toggleClass('active');
  });

  if ($('#additional-menu').size()) {
    $('#additional-menu').easytree({disableIcons: true});
  }
});