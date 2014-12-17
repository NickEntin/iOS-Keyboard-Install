// start at the beginning
var path = full_path;

function goToNextStep(option) {
	if (path.endpoint) {
		// TODO: go to done screen
	} else {
		path = path.buttons[option];
	}
}

function updateDisplay() {
	// fade text out for 300 ms, then fade back in (after changed) for 300 ms
	$("#text").fadeOut(300).fadeIn(300);

	// wait until text is not visible, then update
	$({}).delay(300).queue(function() {
		console.log("Executing delayed function");

		$("#instruction").html("<p>"+path.text+"</p>");

		$("#buttons").html("");
		for (var button in path.buttons) {
			var btn = $("<a href=\"#\" class=\"button\" >"+button+"</a>");
			btn.click(function() {
				goToNextStep($(this).html());
				updateDisplay();
			});
			$("#buttons").append(btn);
		}

		$(this).dequeue();
	});
}

$(document).ready(function() {
	// set up initial button actions
	$("#buttons a#iPhone").click(function() {
		// set up preview image

		updateDisplay();
	});
	$("#buttons a#iPad").click(function() {
		// set up preview image

		updateDisplay();
	});
});
