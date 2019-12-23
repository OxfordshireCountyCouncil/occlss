(function (document, window, $, undefined) {
    'use strict';
    var $accordionPanels = jQuery('.js-occlss-accordion');

    // Set up link
    var setupLinkSetup = function($link) {
        $link.on('click', function (e) {
            if (jQuery(this).attr('aria-expanded') == 'false') {

               jQuery(this).parents('.js-occlss-accordion')
               .find('[aria-expanded=true]')
               .attr('aria-expanded', false)
               .removeClass('is-active')
               .parent().next('.occlss-accordion__panel-content')
               .slideUp(200).attr('aria-hidden', 'true');

              jQuery(this).attr('aria-expanded', true)
              .addClass('is-active').parent()
              .next('.occlss-accordion__panel-content').slideDown(50).attr('aria-hidden', 'false');

            } else {
              jQuery(this).attr('aria-expanded', false)
              .removeClass('is-active')
              .parent().next('.occlss-accordion__panel-content')
              .slideUp(200).attr('aria-hidden', 'true');
            }
            return false;
       });
    };
  

    $accordionPanels.each(function (i) {

        // Get All the objects
        var $this = jQuery(this),
            $title = $this.find('.occlss-accordion__panel-title'),
            $contentPanel = $this.find('.occlss-accordion__panel-content'),
            $panelCounter = i,
            $panelLnk = "";


        $this.attr({
            role: 'tablist',
            multiselectable: 'true'
        });

        $contentPanel.each(function (i) {
            var $this = jQuery(this);
            var $panelID = ($panelCounter + '-' + i);

            $this.hide();

            $this.attr({
                'id': ('occlss-accordion-panel-' + $panelID),
                'aria-labelledby': 'control-' + ('occlss-accordion-panel-' + $panelID),
                'aria-hidden': 'true',
                'role': 'region'
            });
           

        });

        $title.each(function (i) {

            var $this = jQuery(this);
            var $panelID = ($panelCounter + '-' + i);

            var $panelLnk = jQuery('<button>', {
                'aria-expanded': 'false',
                'aria-controls': ('occlss-accordion-panel-' + $panelID),
                'id': 'control-' + ('occlss-accordion-panel-' + $panelID),
                'class': 'occlss-accordion__panel-lnk'
            });

            //

            $this.wrapInner($panelLnk);

            setupLinkSetup($this.find('button'));

        });

    });

  
  })(document, window, jQuery);