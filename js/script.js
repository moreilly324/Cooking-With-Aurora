$(document).ready(function()	{
	$('#sub-list').click(blank);

	function blank() {
		$('#sub-list').val('');
	}
});

$(document).ready(function()	{
	$('.dropmenu').hover();

	function ()	{
		$(this).children('.submenu').slideDown(200);
	}

	function ()	{
		$(this).children('.submenu').slideUp(200);
	}
});