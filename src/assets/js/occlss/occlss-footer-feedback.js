// Feedback form panel expander
jQuery( document ).ready(function( $ ) {

  jQuery('html').on('click', '.js-footer-feedback-close', function(event) {

    if (jQuery(this).parents('.occlss-footer-feedback__form-cont').hasClass('is-active')) {
      jQuery(this).parents('.occlss-footer-feedback__form-cont').removeClass('is-active');
      jQuery(this).parents('.js-occlss-footer-feedback').children().children('.js-occlss-footer-feedback-controls').removeClass('is-active');
      jQuery(this).parents('.js-occlss-footer-feedback').children().children('.js-occlss-footer-feedback-controls').children('.js-footer-feedback-open').attr("aria-expanded","false");
    }

    event.preventDefault();
    event.stopPropagation();
  });

    jQuery('html').on('click', '.js-footer-feedback-open', function(event) {
    
      if (!jQuery(this).parents('.occlss-footer-feedback__controls').hasClass('is-active')) {
        jQuery(this).parents('.occlss-footer-feedback__controls').addClass('is-active');
        jQuery(this).attr("aria-expanded","true");
        jQuery(this).parents('.js-occlss-footer-feedback').children().children('.occlss-footer-feedback__form-cont').addClass('is-active');

      }
      
      event.preventDefault();
      event.stopPropagation();
    });

    jQuery(document).on('DOMNodeInserted', function(e) {

      if ( jQuery(e.target).hasClass('js-occlss-footer-feedback') ) {

        var str = jQuery(e.target).children('.occlss-footer-feedback__wrapper')
        .children('.occlss-footer-feedback__form-cont')
        .find('.webform-submission-form')
        .find('.webform-confirmation__message').text();

        jQuery('.js-occlss-footer-feedback-controls').html('hello');
        jQuery('.js-occlss-footer-feedback-controls').addClass('occlss-footer-feedback__controls--submitted');
        jQuery('.js-occlss-footer-feedback-controls').html('<span class="occlss-footer-feedback__submitted-message js-occlss-footer-feedback-submitted-message">'+ jQuery.trim(str) +'</span>');

      }

    });
 
});