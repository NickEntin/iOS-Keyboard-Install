var full_path = {
	text: "First, open the Settings app.",
	image: {
		"iPhone": "01",
		"iPad": "01"
	},
	endpoint: false,
	buttons: {
		"Okay, next?": {
			text: "Next, go into the General menu.",
			image: {
				"iPhone": "02",
				"iPad": "02"
			},
			endpoint: false,
			buttons: {
				"Easy. Now what?": {
					text: "Click on \"Keyboard\". You may have to scroll down a bit.",
					image: {
						"iPhone": "03",
						"iPad": "02"
					},
					endpoint: false,
					buttons: {
						"Found it!": {
							text: "Now go into the Keyboards list. It should be the first option in the menu.",
							image: {
								"iPhone": "04",
								"iPad": "03"
							},
							endpoint: false,
							buttons: {
								"Got it, next?": {
									text: "Now click on \"Add New Keyboard...\".",
									image: {
										"iPhone": "05",
										"iPad": "04"
									},
									endpoint: false,
									buttons: {
										"Easy. Keep going.": {
											text: "Select the keyboard you want to add. It's probably under the \"Third-Party Keyboards\" section.",
											image: {
												"iPhone": "06",
												"iPad": "05"
											},
											endpoint: false,
											buttons: {
												"It's there! Am I done?": {
													text: "We're almost done. Many third-party keyboards require full access to implement features like theming and autocorrect.",
													image: {
														"iPhone": "07",
														"iPad": "06"
													},
													endpoint: false,
													buttons: {
														"Sounds cool, count me in!": {
															text: "Awesome! Click on the name of the keyboard you just installed.",
															image: {
																"iPhone": "07",
																"iPad": "06"
															},
															endpoint: false,
															buttons: {
																"Okay, next?": {
																	text: "Now toggle the \"Allow Full Access\" slider to the ON position.",
																	image: {
																		"iPhone": "08",
																		"iPad": "07"
																	},
																	endpoint: false,
																	buttons: {
																		"Got it. Now what?": {
																			text: "You should get a popup asking you to confirm. It's telling you that giving the keyboard full access gives it, well... full access. Click \"Allow\" to confirm.",
																			image: {
																				"iPhone": "09",
																				"iPad": "08"
																			},
																			endpoint: false,
																			buttons: {
																				"Makes sense. Am I done?": {
																					text: "Yep, that's it! You're now ready to go and enjoy your new keyboard. Have fun!",
																					image: {
																						"iPhone": "01",
																						"iPad": "01"
																					},
																					endpoint: true
																				}
																			}
																		}
																	}
																}
															}
														},
														"I'd rather not": {
															text: "In that case, you're done. Congrats on getting your keyboard fully set up. Enjoy!",
															image: {
																"iPhone": "01",
																"iPad": "01"
															},
															endpoint: true
														}
													}
												}
											}
										}
									}
								}
							}
						}
					}
				}
			}
		}
	}
};
