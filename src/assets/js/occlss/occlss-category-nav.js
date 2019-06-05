jQuery( document ).ready(function() {
  jQuery('html').on('click', '.js-occlss-category-nav .is-disabled .occlss-category-nav__link', function(event){
    event.preventDefault();
    event.stopPropagation();
  });
});