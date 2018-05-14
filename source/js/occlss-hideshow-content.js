(function (document, window, $, undefined) {
    'use strict';

    $('html').on('click', '.js-occlss-hideshow-content-btn', function(event){
        
        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
            $(this).next('.js-occlss-hideshow-content').css("display","");
        } else {
              $(this).addClass('is-active');
              $(this).next('.js-occlss-hideshow-content').css("display","block");
        }

        event.preventDefault();
        event.stopPropagation();
    });


})(document, window, jQuery);