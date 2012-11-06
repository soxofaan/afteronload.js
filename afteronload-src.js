// AfterOnLoad.js
// Copyright (C) 2012 Stefaan Lippens
// JavaScript snippet for queueing functions
// to be triggered on/after the window load event.



// Generate the afterOnload function with a closure.
afterOnLoad = (function(window) {

	// Improve minification efficiency by using variables for some long attribute names/strings.
	var onload = 'onload', addEventListener = 'addEventListener', attachEvent = 'attachEvent';

	// Internal housekeeping of "is window loaded?".
	var windowLoaded = false;

	var afterOnLoadImplementation = function(f) {

		// Original window.onload function.
		// Minification is more efficient if we define it here instead of just before we need it.
		var originalWindowOnload = window[onload];

		// Queue on load event or fire immediately?
		if (windowLoaded) {
			f();
		}
		else {
			// Best effort cross platform adder for window.onload handlers.
			if  (window[addEventListener]) {
				// The common way in Firefox, Webkit, Opera, ...
				window[addEventListener]("load", f, false);
			}
			else if (window[attachEvent]) {
				// The IE way.
				window[attachEvent](onload, f);
			}
			else {
				// Fall back on lame function chaining.
				window[onload] = (originalWindowOnload ? (function (event) {
					originalWindowOnload(event);
					f(event);
				}) : f);
			}
		}
	};

	// Set up onload handler to toggle our internal "is window loaded?" boolean.
	afterOnLoadImplementation(function() {
		windowLoaded = true;
	});

	return afterOnLoadImplementation;

})(window);
