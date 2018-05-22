(function (document, window, $, undefined) {
  'use strict';

  var $popularContentPanes = $('.js-occlss-popular-content-pane');
  
  var popularContentPaneSetup = function($pane, $allPanes, i) {
      $pane.children().children().children().children().on('focus', function () {
        if (!$(this).data("mouseDown") && !$(this).parents('.js-occlss-popular-content-pane').hasClass('is-active'))
          $(this).parents('.js-occlss-popular-content-pane').click();
      });
      $pane.on('focus', function () {
        if (!$(this).data("mouseDown"))
          $(this).click();
      });
      $pane.on('mousedown', function () {
        $(this).data("mouseDown", true);
      });
      $pane.on('mouseup', function () {
        $(this).removeData("mouseDown");
      });
      $pane.on('click', function (e) {
        if ($(this).hasClass('is-active')) {
          //Close the current section
          //$allPanes.removeClass('is-active');
          //$('.collapsing-section').slideUp();
        } else {
          //close the prev section & open the newly click
          $allPanes.removeClass('is-active');
          $('.collapsing-section').slideUp(); //Side up all sections that are open & remove their open class
          $(this).addClass('is-active');
          var sectionToOpen = $(this).next('.collapsing-section');
          $(sectionToOpen).slideDown();
        }
      });
  };
  $popularContentPanes.each(function (i) {
      var $this = $(this);
      popularContentPaneSetup($(this), $popularContentPanes, i)
  });

})(document, window, jQuery);