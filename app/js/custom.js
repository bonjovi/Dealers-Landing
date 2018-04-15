$(function() {

	$('.underline').css('width', $('.section').offset().left + 200 + 'px');

	$(window).on('resize', function() {
		$('.underline').css('width', $('.section').offset().left + 200 + 'px');
	});

	
});