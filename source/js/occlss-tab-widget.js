(function (document, window, $, undefined) {
    'use strict';

    var $tabWidget = $('.js-occlss-tab-widget');

    var setupTabs = function ($tab, $allTabs, $tabPanels, $tabListItems, $mobileTab, $mobileTabs, i) {
        $mobileTab = $($mobileTab);

        $mobileTab
            .attr({
                'id': 'tab-link-' + i,
                'tabindex': '-1',
                'role': 'tab',
                'aria-selected': 'false',
                'aria-controls': 'tab-panel-' + i
            });
        $tab
            .attr({
                'id': 'tab-link-' + i,
                'tabindex': '-1',
                'role': 'tab',
                'aria-selected': 'false',
                'aria-controls': 'tab-panel-' + i
            });

        if ($tab.hasClass("is-active")) {
            $tab
                .attr({
                    'tabindex': '0',
                    'aria-selected': 'true',
                    'aria-describedby': 'occlss-tab-widget-description'
                })
                .addClass('is-active');
            $($mobileTab)
                .attr({
                    'tabindex': '0',
                    'aria-selected': 'true',
                    'aria-describedby': 'occlss-tab-widget-description'
                })
                .addClass('is-active');
        }

        $mobileTab.on('click', function (e) {
            e.preventDefault();
            mtabClick($(this), $allTabs, $tabPanels, $mobileTabs, i);
        });

        $tab.on('click', function (e) {
            e.preventDefault();
            tabClick($(this), $allTabs, $tabPanels, $mobileTabs, i);
        });

        $tab.on('focus', function (e) {
            tabClick($(this), $allTabs, $tabPanels, $mobileTabs, i);
        });

        $tab.on('keydown', function (e) {
            tabKeydown($(this), $allTabs, $tabPanels, $tabListItems, i, e);
        });

        if ($tab.hasClass("is-active") ) {
            tabClick($tab, $allTabs, $tabPanels, $mobileTabs, i);
        }
    };

    var setupTabPanels = function (tabPanel, i) {
        tabPanel
            .attr({
                'id': 'tab-panel-' + i,
                'role': 'tabpanel',
                'aria-hidden': 'true',
                'aria-labelledby': 'tab-link-' + i
            });

        if (tabPanel.class === "is-active") {
            tabPanel
                .attr('aria-hidden', 'false')
                .addClass('is-active');
        }
    };

    var tabClick = function ($thisTab, $allTabs, $tabPanels, $mobileTabs, i) {
        var $cmTab = $($mobileTabs[i]);

        $mobileTabs
            .attr({
                'tabindex': -1,
                'aria-selected': 'false'
            })
            .removeAttr('aria-describedby')
            .removeClass('is-active');

        $allTabs
            .attr({
                'tabindex': -1,
                'aria-selected': 'false'
            })
            .removeAttr('aria-describedby')
            .removeClass('is-active');
        $cmTab
            .attr({
                'tabindex': 0,
                'aria-selected': 'true',
                'aria-describedby': 'occlss-tab-widget-description'
            })
            .addClass('is-active');

        $thisTab
            .attr({
                'tabindex': 0,
                'aria-selected': 'true',
                'aria-describedby': 'occlss-tab-widget-description'
            })
            .addClass('is-active');

        $tabPanels
            .attr('aria-hidden', 'true')
            .removeClass('is-active');

        $tabPanels.eq(i)
            .attr('aria-hidden', 'false')
            .addClass('is-active');
    };

    var mtabClick = function ($thisTab, $allTabs, $tabPanels, $mobileTabs, i) {
        
        var $cTab = $($allTabs[i]);

        $mobileTabs
            .attr({
                'tabindex': -1,
                'aria-selected': 'false'
            })
            .removeAttr('aria-describedby')
            .removeClass('is-active');

        $allTabs
            .attr({
                'tabindex': -1,
                'aria-selected': 'false'
            })
            .removeAttr('aria-describedby')
            .removeClass('is-active');
        
        $cTab
            .attr({
                'tabindex': 0,
                'aria-selected': 'true',
                'aria-describedby': 'occlss-tab-widget-description'
            })
            .addClass('is-active');

        $thisTab
            .attr({
                'tabindex': 0,
                'aria-selected': 'true',
                'aria-describedby': 'occlss-tab-widget-description'
            })
            .addClass('is-active');

        $tabPanels
            .attr('aria-hidden', 'true')
            .removeClass('is-active');

        $tabPanels.eq(i)
            .attr('aria-hidden', 'false')
            .addClass('is-active');
    };

    var tabKeydown = function ($thisTab, $allTabs, $tabPanels, $tabListItems, i, e) {
        var keyCode = e.which,
            $nextTab = $thisTab.parent().next().is('li') ? $thisTab.parent().next().find('a') : false,
            $previousTab = $thisTab.parent().prev().is('li') ? $thisTab.parent().prev().find('a') : false,
            $firstTab = $thisTab.parent().parent().find('li:first').find('a'),
            $lastTab = $thisTab.parent().parent().find('li:last').find('a');

        switch (keyCode) {
            // Left/Up
            case 37:
            case 38:
                e.preventDefault();
                e.stopPropagation();

                if (!$previousTab) {
                    $lastTab.focus();
                } else {
                    $previousTab.focus();
                }

                break;

            // Right/Down
            case 39:
            case 40:
                e.preventDefault();
                e.stopPropagation();

                if (!$nextTab) {
                    $firstTab.focus();
                } else {
                    $nextTab.focus();
                }

                break;

            // Home
            case 36:
                e.preventDefault();
                e.stopPropagation();

                $firstTab.focus();

                break;

            // End
            case 35:
                e.preventDefault();
                e.stopPropagation();

                $lastTab.focus();

                break;

            // Enter/Space
            case 13:
            case 32:
                e.preventDefault();
                e.stopPropagation();

                break;
        }
    };

    $tabWidget.each(function () {

        // Get All the objects
        var $this = $(this),
            $tabList = $this.find('> ul'),
            $tabListItems = $tabList.find('li'),
            $allTabs = $tabListItems.find('a'),
            $mobileTabs = $('.js-occlss-mob-tab'),
            $tabPanels = $this.find('> div > div');

        $tabList.attr('role', 'tablist');
        $tabListItems.attr('role', 'presentation');

        $allTabs.each(function (i) {
            setupTabs($(this), $allTabs, $tabPanels, $tabListItems, $mobileTabs[i], $mobileTabs, i);
        });

        $tabPanels.each(function (i) {
            setupTabPanels($(this), i);
        });


    });


    $('html').addClass('js').removeClass('no-js');

})(document, window, jQuery);