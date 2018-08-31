
var Site = {}


Site.click = function(){

	$(".syllabus, .exit").on('click', function(){
		$(".menu").toggleClass("reveal")
	})
}



$(document).ready(function(){

	Site.click()


})