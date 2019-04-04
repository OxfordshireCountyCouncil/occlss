// Feedback form panel expander
jQuery( document ).ready(function( $ ) {

  jQuery('html').on('click', '.js-footer-feedback-close', function(event) {

      if (jQuery(this).parents('.occlss-footer-feedback__form-cont').hasClass('is-active')) {
        jQuery(this).parents('.occlss-footer-feedback__form-cont').removeClass('is-active');
        jQuery(this).parents('.js-occlss-footer-feedback').children().children('.occlss-footer-feedback__controls').removeClass('is-active');
        
      }

      event.preventDefault();
      event.stopPropagation();
    });

    jQuery('html').on('click', '.js-footer-feedback-open', function(event) {
    
      if (!jQuery(this).parents('.occlss-footer-feedback__controls').hasClass('is-active')) {
        jQuery(this).parents('.occlss-footer-feedback__controls').addClass('is-active');
        jQuery(this).parents('.js-occlss-footer-feedback').children().children('.occlss-footer-feedback__form-cont').addClass('is-active');
      }
      
      event.preventDefault();
      event.stopPropagation();
    });

    $("body").on('DOMSubtreeModified', ".js-feedback-footer-form", function(e) {
          jQuery(this).parents('.js-occlss-footer-feedback').children().children('.occlss-footer-feedback__controls').children('.js-footer-feedback-open').remove();
          jQuery(this).parents('.js-occlss-footer-feedback').children().children('.occlss-footer-feedback__controls').children('.js-occlss-footer-feedback-submitted-message').text('Thank you for your feedback');
          jQuery(this).parents('.js-occlss-footer-feedback').children().children('.occlss-footer-feedback__controls').children('.occlss-footer-feedback__controls').addClass('occlss-footer-feedback__controls--submitted');
    });
 
});