$( document ).ready(function() {

	// SLIDEING MENU ON MOBILE
	$( '.site-header .btn-toggle' ).click(function() {
		$('body .page').toggleClass('sliding');
	});

	// Width > 768
	$(window).on('resize', function() {
		if ($(window).width()>767.98) {
			$('.page').removeClass('sliding');
		}
	});
    
});