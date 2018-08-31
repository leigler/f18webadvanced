
var Site = {}

Site.click = function(){
	$(".syllabus, .exit").on('click', function(){
		if($(window).outerWidth() > 768){
			$(".menu").toggleClass("reveal")
		}else{
			window.location.href = "http://f18webadvanced.teachinginter.net/assets/PSAM_2599_A_EIGLER-HARDING_FA18.pdf";
		}
	})
}

$(document).ready(function(){
	Site.click()
})