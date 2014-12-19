// start at the beginning
var path = full_path;
var device;
var TRANSITION_TIME = 500;

function goToFinalScreen() {
	path = {
		text: "This tutorial was brought to you by <a href=\"http://nickentin.com\">Nick Entin</a>.",
		image: {
			"iPhone": "01",
			"iPad": "01"
		},
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
	preloadImagesForNextStep();
}

function updateDisplay() {
	// fade text out for 300 ms, then fade back in (after changed) for 300 ms
	$("#text").fadeOut(TRANSITION_TIME/2).fadeIn(TRANSITION_TIME/2);

	$("#nextscreen").fadeOut(0).css("background-image","url(img/"+device+"/"+path.image[device]+".png)").fadeIn(TRANSITION_TIME);
	$("#screen").delay(TRANSITION_TIME).queue(function() {
		$(this).css("background-image","url(img/"+device+"/"+path.image[device]+".png)");
		$(this).dequeue();
	}).fadeIn(0);

	// wait until text is not visible, then update
	$({}).delay(TRANSITION_TIME/2).queue(function() {
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
		preloadImage("img/"+device+"/"+path.buttons[b].image[device]+".png");
	}
}

function preloadImage(url) {
	(new Image()).src = url;
}

$(document).ready(function() {
	// set up initial button actions
	$("#buttons a#iPhone").click(function() {
		// set up preview image
		device = "iPhone";
		$("#preview").fadeOut(0).addClass("iPhone").fadeIn(TRANSITION_TIME);

		updateDisplay();
	});
	$("#buttons a#iPad").click(function() {
		// set up preview image
		device = "iPad";
		$("#preview").fadeOut(0).addClass("iPad").fadeIn(TRANSITION_TIME);

		updateDisplay();
	});

	// preload device images
	preloadImage("img/iPhone.svg");
	preloadImage("img/iPad.svg");
});
