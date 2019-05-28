
build: node_modules
	gulp

node_modules: package.json
	npm install

.PHONY: build
