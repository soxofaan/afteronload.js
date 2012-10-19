// AfterOnLoad.js
// Copyright (C) 2012 Stefaan Lippens
// JavaScript snippet for queueing functions
// to be triggered on/after the window load event.



// Generate the afterOnload function with a closure.
// Note that we use function arguments for attributes
// like window.addEventListener, window.onload, so that
// JavaScript minification can be more efficient.
afterOnLoad = (function(window, onload, addEventListener, attachEvent, function_) {

	// Internal housekeeping of "is window loaded?".
	var windowLoaded = false;

	var afterOnLoadImplementation = function(f) {
		// Queue on load event or fire immediately?
		if (windowLoaded) {
			f();
		}
		else {
			// Best effort cross platform adder for window.onload handlers.
			if (typeof window[addEventListener] === function_) {
				// The common way in Firefox, Webkit, Opera, ...
				window[addEventListener]("load", f, false);
			}
			else if (typeof window[attachEvent] === function_) {
				// The IE way.
				window[attachEvent](onload, f);
			}
			else {
				// Fall back on lame function chaining.
				var originalWindowOnload = window[onload];
				if (typeof originalWindowOnload !== function_) {
					window[onload] = f;
				}
				else {
					window[onload] = function (event) {
						originalWindowOnload(event);
						f(event);
					};
				}
			}
		}
	};

	// Set up onload handler to toggle our internal "is window loaded?" boolean.
	afterOnLoadImplementation(function() {
		windowLoaded = true;
	});

	return afterOnLoadImplementation;

})(window, 'onload', 'addEventListener', 'attachEvent', 'function');
