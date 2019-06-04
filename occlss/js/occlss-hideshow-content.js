(function (document, window, $, undefined) {
    'use strict';

    jQuery('html').on('click', '.js-occlss-hideshow-content-btn', function(event){
        
        if (jQuery(this).hasClass('is-active')) {
            jQuery(this).removeClass('is-active');
            jQuery(this).next('.js-occlss-hideshow-content').css("display","");
        } else {
            jQuery(this).addClass('is-active');
            jQuery(this).next('.js-occlss-hideshow-content').css("display","block");
        }

        event.preventDefault();
        event.stopPropagation();
    });


})(document, window, jQuery);