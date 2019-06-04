jQuery( document ).ready(function() {
  jQuery('.js-occlss-nav-toggler-button').click(function () {

    if (jQuery(this).hasClass('is-active')) {
      jQuery(this).parents().children('.occlss-site-nav__list').removeClass('is-active');
      jQuery(this).removeClass('is-active');
    } else {
      jQuery(this).parents().children('.occlss-site-nav__list').addClass('is-active');
      jQuery(this).addClass('is-active');
    }
  });
});