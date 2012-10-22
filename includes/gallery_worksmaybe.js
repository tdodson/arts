$(document) .ready(function(){
	
	$('.gallery_thumbnails a') .click(function(e){
		
		e.preventDefault();
	// update thumbnails	
//	$('.gallery_thumbnails a') .removeClass('selected');
//	$('.gallery_thumbnails a') .children() .css('opacity','1');
//	
//	$(this) .addClass('selected');
//	$(this) .children() .css('opacity','.4');
//	
	// setup vars from thumbnail	
	var image_caption = $(this).attr('title');
	var image_fullsize = $(this) .attr('href');
	var image_preview = image_fullsize .replace('_fullsize', '_preview');	
	
	$('.gallery_caption').slideUp(500);
	$('.gallery_preview').fadeOut(500, function(){
	
		$('.gallery_preload_area') .html('<img src="'+image_preview+'"/>');
		$('.gallery_preload_area img') .imgpreload(function(){
		
			$('.gallery_preview') .html('<a class="overlaylink" href="'+image_fullsize+'" title="'+image_caption+'" style="background-image:url('+image_preview+');"></a>');
			$('.gallery_caption') .html('<p><a class="overlaylink" href="'+image_fullsize+'" title="'+image_caption+'">View Full Image</a></p><p>'+image_caption+'</p>');
			$('.gallery_preview').fadeIn(500);
			$('.gallery_caption').slideDown(500);
			
			setFancyboxLinks();
			updateThumbnails();
		
			});
		
		});
	
	
	});
	
//	 initialize gallery on load
	var first_image_caption = $('.gallery_thumbnails a').first().attr('title');
	var first_image_fullsize = $('.gallery_thumbnails a').first().attr('href');
	var first_image_preview = first_image_fullsize .replace('_fullsize', '_preview');	
	
	$('.gallery_caption').slideUp(500);
	$('.gallery_preview').fadeOut(500, function(){
	
		$('.gallery_preload_area') .html('<img src="'+first_image_preview+'"/>');
		$('.gallery_preload_area img') .imgpreload(function(){
		
			$('.gallery_preview') .html('<a class="overlaylink" href="'+first_image_fullsize+'" title="'+first_image_caption+'" style="background-image:url('+first_image_preview+');"></a>');
			$('.gallery_caption') .html('<p><a class="overlaylink" href="'+first_image_fullsize+'" title="'+first_image_caption+'">View Full Image</a></p><p>'+first_image_caption+'</p>');
			$('.gallery_preview').fadeIn(500);
			$('.gallery_caption').slideDown(500);
			
			setFancyboxLinks();
			updateThumbnails();
		
			});
		
		});
	
	

});

function setFancyboxLinks(){
	
	$('a.overlaylink') .fancybox({
	
		'titlePosition' : 'inside',
		'overlayColor' : '#000',
		'overlayOpacity' : '0.8',
		'transitionOut' : 'elastic',
		'transitionIn' : 'elastic',
		'autoScale' : true
	});

}

function updateThumbnails(){

	$('.gallery_thumbnails a').each(function(){
		
		if ( $('.gallery_preview a').attr('href') == $(this).attr('href') ){
			$(this).addClass('selected');
			$(this).children().fadeTo(250, .4)
		}else{
			$(this).removeClass('selected');
			$(this).children().css('opacity', '1');
		}
		
	});
	
	
	
	
	
	
	
	
}