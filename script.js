//animation for slide down on homepage
$(document).ready(function () {
    $('.hover').slideDown(4000);
});

//slide in from sides animation in amenities section
var stop = false

$(window).scroll(function() {
	if ($(window).scrollTop() > 1100 && $(window).scrollTop() < 1200){
		$('#massage').animate({left:'15%'});
		$('#pools').animate({right:'15%'});
	} else {
		stop = true
	}
});

$(window).scroll(function() {
	if ($(window).scrollTop() > 1600 && $(window).scrollTop() < 2000){
		$('#lockers').animate({left:'15%'});
		$('#saunas').animate({right:'15%'});
	} else {
		stop = true
	}
});

//scrolling fades in quotes and about text
ScrollReveal({ reset: true }).reveal('#abouttext', {delay:600});
ScrollReveal({ reset: true }).reveal('#quote', {delay:600});

//makes alert when you submit form
function buttonClick() {
  alert("Thank you for contacting us. We'll get back to you as soon as possible.");
}
