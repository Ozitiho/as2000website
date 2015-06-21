function dropdown() {
	var vis = $('.servicesdd').css("visibility");
	if(vis == "hidden"){
		//Before the dropdown is shown, it is first faded out again. 
		//This, because it's not faded out by default.
		//I don't use the window.onload because it might be in use in another page
		//And it is.
		$('.servicesdd').fadeOut(0);
		$('.servicesdd').css("visibility", "visible")
		$('.servicesdd').fadeIn(750);
		return;
	}
	$('.servicesdd').fadeOut(750, function() {
		$('.servicesdd')
			.css("visibility", "hidden")
	})
}