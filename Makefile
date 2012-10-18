
%PHONY: default
default: afteronload-min.js README.md

# Minify afteronload.js with the UglifyJs web service.
afteronload-min.js: afteronload-src.js
	curl --data js_code="$$(cat $<)" http://marijnhaverbeke.nl/uglifyjs > $@

# Update the minified afteronload.js snippet in the readme.
README.md: afteronload-min.js
	perl -p -i -e "s/^afterOnLoad=function.*;$$/$$(cat $<);/g" $@

