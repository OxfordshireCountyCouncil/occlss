$(document).ready(function () {

    // do not close facets if click on facets panel
    $('body').on('click', '.js-occlss-fp', function(e) {
      e.stopPropagation();
    });

    // click on body close the facets if opened
    $(document).click(function() {
      if ($('.js-occlss-fp').hasClass('is-open')) {
        $('.js-occlss-fp').removeClass('is-open');
      }
    });

    // close and open facets on the mobile view
    $('body').on('click', '.js-occlss-open-close-fp', function(e) {
      e.preventDefault();
      e.stopPropagation();
      $('.js-occlss-fp').toggleClass('is-open')
    });
    
});

