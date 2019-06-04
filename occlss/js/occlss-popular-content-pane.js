(function (document, window, $, undefined) {
  'use strict';

  var $popularContentPanes = jQuery('.js-occlss-popular-content-pane');
  
  var popularContentPaneSetup = function($pane, $allPanes, i) {
      $pane.children().find( "a" ).on('focus', function () {
        if (!jQuery(this).data("mouseDown") && !jQuery(this).parents('.js-occlss-popular-content-pane').hasClass('is-active'))
        jQuery(this).parents('.js-occlss-popular-content-pane').click();
      });
      $pane.on('focus', function () {
        if (!jQuery(this).data("mouseDown"))
        jQuery(this).click();
      });
      $pane.on('mousedown', function () {
        jQuery(this).data("mouseDown", true);
      });
      $pane.on('mouseup', function () {
        jQuery(this).removeData("mouseDown");
      });
      $pane.on('click', function (e) {
        var target = jQuery( e.target );
        if (!target.is( "a" )) {
          if (jQuery(this).hasClass('is-active')) {
            //Close the current section
            $allPanes.removeClass('is-active');
            jQuery('.collapsing-section').slideUp();
          } else {
            //close the prev section & open the newly click
            $allPanes.removeClass('is-active');
            jQuery('.collapsing-section').slideUp(); //Side up all sections that are open & remove their open class
            jQuery(this).addClass('is-active');
            var sectionToOpen = jQuery(this).next('.collapsing-section');
            jQuery(sectionToOpen).slideDown();
          }
        }
      });
  };
  $popularContentPanes.each(function (i) {
      var $this = jQuery(this);
      popularContentPaneSetup(jQuery(this), $popularContentPanes, i);
  });

})(document, window, jQuery);