setup:
	git config core.hooksPath .githooks
	npm ci

lint:
	npm run format
	npm run lint