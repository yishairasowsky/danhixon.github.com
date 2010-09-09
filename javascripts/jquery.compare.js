(function($){ 
	
	$.fn.compare = function(options)
	{
		$(this).each(function(index, one){
			
			var first = $(one).find('img:first');
			var other = $(one).find('img:last');
			other.hide();

			$(one).mouseover(function(){
				first.hide();
				other.show();
			}).mouseout(function(){
				first.show();
				other.hide();
			});
		});
		
	}
})(jQuery);