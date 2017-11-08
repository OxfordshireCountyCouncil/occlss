$(document).ready(function () {

  $(".js-occlss-category-pane").on('focus', function () {
    if (!$(this).data("mouseDown"))
      $(this).click();
  });

  $(".js-occlss-category-pane").on('mousedown', function () {
    $(this).data("mouseDown", true);
  });

  $(".js-occlss-category-pane").on('mouseup', function () {
    $(this).removeData("mouseDown");
  });

  $(".js-occlss-category-pane").on('click', function (e) {
    if ($(this).hasClass('is-active')) {
      //Close the current section
      $('.js-occlss-category-pane').removeClass('is-active');
      $('.collapsing-section').slideUp();
    } else {
      //close the prev section & open the newly click
      $('.js-occlss-category-pane').removeClass('is-active');
      $('.collapsing-section').slideUp(); //Side up all sections that are open & remove their open class
      $(this).addClass('is-active');
      var sectionToOpen = $(this).next('.collapsing-section');
      $(sectionToOpen).slideDown();
    }
  });
});