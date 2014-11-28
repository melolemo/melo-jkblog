$(document).ready(function(){
    var topBtn = jQuery('.scroll-top');
	topBtn.hide();
	jQuery(window).scroll(function () {
		if (jQuery(this).scrollTop() > 200) {
			topBtn.fadeIn();
		} else {
			topBtn.fadeOut();
		}
	});
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800, "swing");
        return false;
    });
});