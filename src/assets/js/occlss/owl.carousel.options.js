jQuery( document ).ready(function( $ ) {
	$('.js-owl-carousel').owlCarousel({
		loop: true,
		margin: 34,
		nav: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 2
			},
			1200: {
				items: 3
			}
		}
	})
});