
$(document).ready( function(){

    // code example tabs
    $('.js-doc-example-pane-tabs__item a').click( function(event) {
        var tab_id = $(this).attr('href');
        if($(this).parents('.js-doc-example-pane-tabs__item').hasClass('doc-example-pane-tabs__item--open')) {
            $('.js-doc-example-pane-tabs__item').removeClass('doc-example-pane-tabs__item--open');
            $('.js-doc-example-pane-tabs__code').removeClass('doc-example-pane-tabs__code--open');
        } else {
            $('.js-doc-example-pane-tabs__item').removeClass('doc-example-pane-tabs__item--open');
            $('.js-doc-example-pane-tabs__code').removeClass('doc-example-pane-tabs__code--open');
            $(tab_id).addClass('doc-example-pane-tabs__code--open');
            $(this).parents('.js-doc-example-pane-tabs__item').addClass('doc-example-pane-tabs__item--open');
        }
        event.preventDefault();
    });

    // expand left nav menu
    $('.js-doc-page-sidebar-close').click( function(event) {
        if($('.js-mobile-menu-layout').hasClass('mobile-menu-layout--expanded')) {
            $('.js-mobile-menu-layout').removeClass('mobile-menu-layout--expanded');
        } else {
            $('.js-mobile-menu-layout').addClass('mobile-menu-layout--expanded');
        }
        event.preventDefault();
    });

});



