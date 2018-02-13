$(document).ready(function () {
  $('.js-occlss-form-cntrls-show-hide-password').click(function() {
    var getImage = $(this).children().children('svg').children().attr("xlink:href");
    var imgInVisible = getImage.replace("visible", "invisible");
    var imgVisible = getImage.replace("invisible", "visible");

    if( $(this).hasClass('show') ) {
      $(this).parents('.js-occlss-form-cntrls-password').children('.occlss-form-cntrls__input').attr('type','password');
      $(this).children().children('svg').children().attr("xlink:href",imgVisible);
      $(this).removeClass('show');
    } else {
       $(this).parents('.js-occlss-form-cntrls-password').children('.occlss-form-cntrls__input').attr('type','text');
       $(this).children().children('svg').children().attr("xlink:href",imgInVisible);
       $(this).addClass('show');
    }
  });
	
	$('#js-occlss-form-password-show-hide button[type="submit"]').on('click', function(event){
    var getImage = $(this).children().children('svg').children().attr("xlink:href");
    var imgInVisible = getImage.replace("visible", "invisible");
    $('.js-occlss-form-cntrls-show-hide-password').children().children('svg').children().attr("xlink:href",imgVisible);
		$('.js-occlss-form-cntrls-show-hide-password').addClass('show');
		$('.js-occlss-form-cntrls-show-hide-password').parents('.js-occlss-form-cntrls-password').children('.occlss-form-cntrls__input').attr('type','password');
  }); 
});