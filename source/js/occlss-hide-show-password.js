$(document).ready(function () {
  $('.js-occlss-hide-show').click(function() {
    var getImage = $(this).children().children('svg').children().attr("xlink:href");
    var imgInVisible = getImage.replace("visible", "invisible");
    var imgVisible = getImage.replace("invisible", "visible");

    if( $(this).hasClass('show') ) {
      $(this).parents('.js-occlss-group-password').children('.occlss-form-cntrs__input').attr('type','password');
      $(this).children().children('svg').children().attr("xlink:href",imgVisible);
      $(this).removeClass('show');
    } else {
       $(this).parents('.js-occlss-group-password').children('.occlss-form-cntrs__input').attr('type','text');
       $(this).children().children('svg').children().attr("xlink:href",imgInVisible);
       $(this).addClass('show');
    }
  });
	
	$('#js-occlss-form-password-show-hide button[type="submit"]').on('click', function(event){
    var getImage = $(this).children().children('svg').children().attr("xlink:href");
    var imgInVisible = getImage.replace("visible", "invisible");
    $('.js-occlss-hide-show').children().children('svg').children().attr("xlink:href",imgVisible);
		$('.js-occlss-hide-show').addClass('show');
		$('.js-occlss-hide-show').parents('.js-occlss-group-password').children('.occlss-form-cntrs__input').attr('type','password');
  }); 
});