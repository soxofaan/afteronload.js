
afteronload-min.js: afteronload-src.js
	curl --data js_code="$$(cat $<)" http://marijnhaverbeke.nl/uglifyjs > $@

