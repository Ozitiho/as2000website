window.onload = function() 
{
	console.log("Starting...")
	
	var comments = new Array()
	comments[0] = "\"Dit is de fijnste garage in Nederland!!!\" -Monic Baak-Bertens"
	comments[1] = "\"Als je alleen het beste voor je auto wilt!!!\" -Manon Scherrenburg"
	
	var i = 1;                     //  set your counter to 1

	function myLoop () {           //  create a loop function
		setTimeout(function () {    //  call a 6s setTimeout when the loop is called
			var turn = i % comments.length
			$('.comment').fadeOut(750, function() {
				$('.comment')
					.text(comments[turn])
					.fadeIn(750)
			})
			i++;                     //  increment the counter
			myLoop();             //  Call the loop function again which will trigger another                         
		}, 6000)					//  ..  setTimeout()
	}

	myLoop();                      //  start the loop
}