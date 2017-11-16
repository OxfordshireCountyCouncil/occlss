$(document).ready(function () {
  
  $(".js-occlss-popular-content-pane").on('focus', function () {
    if (!$(this).data("mouseDown"))
      $(this).click();
  });

  $(".js-occlss-popular-content-pane").on('mousedown', function () {
    $(this).data("mouseDown", true);
  });

  $(".js-occlss-popular-content-pane").on('mouseup', function () {
    $(this).removeData("mouseDown");
  });

  $(".js-occlss-popular-content-pane").on('click', function (e) {
    if ($(this).hasClass('is-active')) {
      //Close the current section
      $('.js-occlss-popular-content-pane').removeClass('is-active');
      $('.collapsing-section').slideUp();
    } else {
      //close the prev section & open the newly click
      $('.js-occlss-popular-content-pane').removeClass('is-active');
      $('.collapsing-section').slideUp(); //Side up all sections that are open & remove their open class
      $(this).addClass('is-active');
      var sectionToOpen = $(this).next('.collapsing-section');
      $(sectionToOpen).slideDown();
    }
  });
});