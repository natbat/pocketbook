jQuery(function($) {
	// Append ?print to the URL to trigger print preview mode
	if ((location.href.split('?')[1] || '').indexOf('print') > -1) {
		$('link[media=print]').attr('media', '');
	}
	
	$('.gmap').each(function(){
		
		var apiArguments = $(this).find('dt');
		var apiValues = $(this).find('dd');
		
		if(apiArguments.length) {
			var queryString = 'http://maps.google.com/staticmap?';
			
			for(i = 0; i < apiArguments.length; i++) {
				queryString = queryString + $(apiArguments[i]).text() + '=' + encodeURIComponent($(apiValues[i]).text()) + '&';
			}
			queryString = queryString + 'size=241x370';
			
			$(this).append('<img src="'+queryString+'" alt="map">');
			$(this).find('dl').hide();
		}
	});
	
});