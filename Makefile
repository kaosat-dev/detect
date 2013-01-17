
build: components src/detect.js
	@component build --dev
	@component build --standalone detect -o lib -n detect

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js lib/*

.PHONY: clean
