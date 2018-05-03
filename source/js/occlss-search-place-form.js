(function (document, window, $, undefined) {
    'use strict';
    // bind change event to select
    $('.js-occlss-search-place-form-select').on('change', function () {
        var url = $(this).val(); // get selected value
        var api = 'https://api.postcodes.io/postcodes/' + url;
        
        $.get( api ).done(function( data ) {
            if (data.result.postcode) {
              window.location.href = 'https://apps.esriuk.com/app/MyNearest/18/view/c24c6ff042d14a4c8c7f64b97c58db76/index.html?x=' + data.result.longitude + '&y=' + data.result.latitude + '&sr=4326';
            }
        });
        
        return false;
    });

    

    // By postcode
    $("#js-occlss-search-place-form-postcode").submit(function (event) {
        var postcode = $(this).find('.occlss-form-cntrls__input').val();
        postcode = postcode.replace(/[^a-z0-9]/i, '');
        var api = 'https://api.postcodes.io/postcodes/' + postcode;
        
        $.get( api )
	        .done(function( data ) {
	          if (data.result.postcode) {
                window.location.href = 'https://apps.esriuk.com/app/MyNearest/18/view/c24c6ff042d14a4c8c7f64b97c58db76/index.html?x=' + data.result.longitude + '&y=' + data.result.latitude + '&sr=4326';
	          }
	    });

        event.preventDefault();
        event.stopPropagation();
    });

    // Get browser geolocation
    $("#js-occlss-search-place-form-link").on("click", function (event) {
        var geo_options = {
            enableHighAccuracy: true,
            maximumAge        : 0,
            timeout           : 6000
        };

        $(this).addClass('is-disabled');
        $(this).attr('tabindex', -1);
        $(this).children('.js-occlss-loading-bar').addClass('is-active');
        //$(this).append("<div class=\"occlss-loading-bar\"><div class=\"occlss-loading-bar__content occlss-loading-bar__content--dark-gray\"><i class=\"occlss-loading-bar__icon\"></i><i class=\"occlss-loading-bar__icon\"></i><i class=\"occlss-loading-bar__icon\"></i><i class=\"occlss-loading-bar__icon\"></i></div></div>");


        if (navigator.geolocation) {
            navigator.geolocation.watchPosition(positionFound, positionError, geo_options);
        } else {
            Alert("Geolocation is not supported by this browser.");
        }
       
       function positionFound(position) {
           window.location.href = 'https://apps.esriuk.com/app/MyNearest/18/view/c24c6ff042d14a4c8c7f64b97c58db76/index.html?x=' + position.coords.longitude + '&y=' + position.coords.latitude + '&sr=4326';
       }
       
       function positionError(error) {
           switch(error.code) {
               case error.PERMISSION_DENIED:
                   console.log("The request for Geolocation was denied, please ensure you have location services enabled and allow access when requested to use this feature.");
                   break;
               case error.POSITION_UNAVAILABLE:
                   console.log("Location information is currently unavailable.");
                   break;
               case error.TIMEOUT:
                   console.log("The request to get user location timed out.");
                   break;
               case error.UNKNOWN_ERROR:
                   console.log("An unknown error occurred.");
                   break;
           }
       }

        event.preventDefault();
        event.stopPropagation();
    });

})(document, window, jQuery);