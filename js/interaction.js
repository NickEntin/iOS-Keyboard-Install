// start at the beginning
var path = full_path;

function goToFinalScreen() {
	path = {
		text: "This tutorial was brought to you by <a href=\"http://nickentin.com\">Nick Entin</a>.",
		image: "",
		buttons: {}
	};
	updateDisplay();

	var btn_restart = $("<a href=\"#\" class=\"button\">Start Over</a>").click(function() {
		path = full_path;
		updateDisplay();
	});
	$("#buttons").delay(300).queue(function() {
		$(this).append(btn_restart);
	});
}

function goToNextStep(option) {
	path = path.buttons[option];

	// if this is the end, show the final screen in 2.5 seconds
	if (path.endpoint) {
		console.log("Starting queue");
		$({}).delay(2500).queue(function() {
			console.log("Executing queue");
			goToFinalScreen();
		});
	}
}

function updateDisplay() {
	// fade text out for 300 ms, then fade back in (after changed) for 300 ms
	$("#text").fadeOut(300).fadeIn(300);

	// wait until text is not visible, then update
	$({}).delay(300).queue(function() {
		$("#instruction").html("<p>"+path.text+"</p>");

		$("#buttons").html("");
		for (var button in path.buttons) {
			var btn = $("<a href=\"#\" class=\"button\">"+button+"</a>");
			btn.click(function() {
				goToNextStep($(this).html());
				updateDisplay();
			});
			$("#buttons").append(btn);
		}

		$(this).dequeue();
	});
}

function preloadImagesForNextStep() {
	for (var b in path.buttons) {
		preloadImage(path.buttons[b].image);
	}
}

function preloadImage(url) {
	(new Image()).src = url;
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
