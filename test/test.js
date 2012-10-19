// Simple basic test framework (that also works *before* onload).

function assertEqual(actual, expected, message)
{
	var results = document.getElementById('results');
	var entry = document.createElement("div");
	if (expected === actual) {
		entry.setAttribute("class", "assert assert-pass");
	}
	else {
		entry.setAttribute("class", "assert assert-fail");
		results.setAttribute("class", "fail");
	}
	var textNode = document.createTextNode('Actual: ' + actual + ', Expected: ' + expected + ', ' + message);
	entry.appendChild(textNode);
	results.appendChild(entry);
}
