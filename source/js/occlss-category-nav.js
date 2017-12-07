$(document).ready(function () {
  $('html').on('click', '.js-occlss-category-nav .is-active .occlss-category-nav__link', function(event){
    event.preventDefault();
    event.stopPropagation();
  });
});