

afterOnLoad = (function(window) {

	// Best effort cross platform adder for window.onload handlers.
	var addOnLoadHandler = function(f) {
		if (typeof window.addEventListener != "undefined") {
			// The common way in Firefox, Webkit, Opera, ...
			window.addEventListener("load", f, false);
		}
		else if (typeof window.attachEvent != "undefined") {
			// The IE way.
			window.attachEvent("onload", f);
		}
		else {
			// Fall back on lame function chaining.
			var originalWindowOnload = window.onload;
			if (typeof originalWindowOnload !== "function") {
				window.onload = f;
			}
			else {
				window.onload = function (event) {
					originalWindowOnload(event);
					f(event);
				};
			}
		}
	};

	// Internal housekeeping of "is window loaded?".
	var windowLoaded = false;

	// Set up onload handler to toggle our internal "is window loaded?" boolean.
	addOnLoadHandler(function() {
		windowLoaded = true;
	});

	// Return the afterOnloadFunction
	return (function(f) {
		if (windowLoaded) {
			f();
		}
		else {
			addOnLoadHandler(f);
		}
	});

})(window);
