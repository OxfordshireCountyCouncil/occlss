(function (document, window, $, undefined) {
    'use strict';

    // bind change event to select
    $('#js-occlss-search-place-form-select').on('change', function () {
        var url = $(this).val(); // get selected value
        if (url) { // require a URL
            window.location = url; // redirect
        }
        return false;
    });

    // By postcode
    $("#js-occlss-search-place-form-postcode").submit(function (event) {
        var url = $(this).find('.occlss-form__input').val();
        if (url) {
            window.location.href = 'https://www.oxfordshire.gov.uk/cms/near-me/454244/204579/' + url;
        }
        event.preventDefault();
        event.stopPropagation();
    });




    // Get browser geolocation
    $("#js-occlss-search-place-form-link").on("click", function () {

        var output = document.getElementById("out");

        if (!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser');
            return;
        }

        function success(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;
            window.location.href = 'https://www.oxfordshire.gov.uk/cms/near-me/' + latitude + '/' + longitude + '/GEO/Your approximate location';
        }

        function error() {
            console.log('Unable to retrieve your location');
        }

        navigator.geolocation.getCurrentPosition(success, error);

    });


})(document, window, jQuery);