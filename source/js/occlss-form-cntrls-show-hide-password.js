jQuery( document ).ready(function() {
  jQuery('.js-occlss-form-cntrls-show-hide-password').click(function() {
    var getImage = jQuery(this).children().children('svg').children().attr("xlink:href");
    var imgInVisible = getImage.replace("visible", "invisible");
    var imgVisible = getImage.replace("invisible", "visible");

    if( jQuery(this).hasClass('show') ) {
      jQuery(this).parents('.js-occlss-form-cntrls-password').children('.occlss-form-cntrls__input').attr('type','password');
      jQuery(this).children().children('svg').children().attr("xlink:href",imgVisible);
      jQuery(this).removeClass('show');
    } else {
      jQuery(this).parents('.js-occlss-form-cntrls-password').children('.occlss-form-cntrls__input').attr('type','text');
      jQuery(this).children().children('svg').children().attr("xlink:href",imgInVisible);
      jQuery(this).addClass('show');
    }
  });
	
	jQuery('#js-occlss-form-password-show-hide button[type="submit"]').on('click', function(event){
    var getImage = jQuery(this).children().children('svg').children().attr("xlink:href");
    var imgInVisible = getImage.replace("visible", "invisible");
    jQuery('.js-occlss-form-cntrls-show-hide-password').children().children('svg').children().attr("xlink:href",imgVisible);
		jQuery('.js-occlss-form-cntrls-show-hide-password').addClass('show');
		jQuery('.js-occlss-form-cntrls-show-hide-password').parents('.js-occlss-form-cntrls-password').children('.occlss-form-cntrls__input').attr('type','password');
  }); 
});