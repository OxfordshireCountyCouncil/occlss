// code example tabs
$(document).ready( function(){
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
});