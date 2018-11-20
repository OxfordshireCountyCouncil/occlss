jQuery( document ).ready(function() {

    // do not close facets if click on facets panel
    jQuery('body').on('click', '.js-occlss-fp', function(e) {
      e.stopPropagation();
    });

    // click on body close the facets if opened
    jQuery(document).click(function() {
      if (jQuery('.js-occlss-fp').hasClass('is-open')) {
        jQuery('.js-occlss-fp').removeClass('is-open');
      }
    });

    // close and open facets on the mobile view
    jQuery('body').on('click', '.js-occlss-open-close-fp', function(e) {
      e.preventDefault();
      e.stopPropagation();
      jQuery('.js-occlss-fp').toggleClass('is-open');
    });
    
});

