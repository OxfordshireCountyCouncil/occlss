jQuery( document ).ready(function( $ ) {
  $('.js-occlss-nav-toggler-button').click(function () {

    if ($(this).hasClass('is-active')) {
      $(this).parents().children('.occlss-site-nav__list').removeClass('is-active');
      $(this).removeClass('is-active');
    } else {
      $(this).parents().children('.occlss-site-nav__list').addClass('is-active');
      $(this).addClass('is-active');
    }
  });
});