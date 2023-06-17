setup:
	git config core.hooksPath .githooks
	npm ci

format-check:
	npx prettier --check .

format:
	npx prettier --write .