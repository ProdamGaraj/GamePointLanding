$(document).ready(function(){
	$('.slider').slick({
		dots:true,
		slidesToShow: 1,
		autoplay:true,
		speed:1200,
		autoplaySpeed:1000,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});





