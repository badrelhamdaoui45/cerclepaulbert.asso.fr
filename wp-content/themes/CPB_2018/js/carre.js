jQuery(function($){
	$('.listing_activites li ul li').hover(
	  function() {
			 $('.carre',this).css('-moz-transform','rotate(0deg)');
			 $('.carre',this).css('width','5px');
			 $('.carre',this).css('height','5px');
			 $('.carre',this).css('top','0px');
			 $('.carre',this).css('background-color','#C10077');
		  }, function() {
			$('.carre',this).css('-moz-transform','rotate(55deg)');
			$('.carre',this).css('width','5px');
			$('.carre',this).css('height','5px');
			$('.carre',this).css('top','0px');
			$('.carre',this).css('background-color','#004f6f');
			}
		);
});