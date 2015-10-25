$(function() {

	$(window).scroll(function () {
	    if ($(this).scrollTop() > 700) {
	        $('.geraldo').addClass('moveLeft')
	    }
	});
});
