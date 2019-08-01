
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
        if($('.js-doc-mob-nav').hasClass('is-active')) {
            $('.js-doc-mob-nav').removeClass('is-active');
        } else {
            $('.js-doc-mob-nav').addClass('is-active ');
        }
        event.preventDefault();
    });

});



