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
	// $("#text").fadeOut(200);

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

	// $("#text").fadeIn(200);
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
