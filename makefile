setup:
	git config core.hooksPath .githooks
	npm ci
	npx playwright install --with-deps chromium webkit

format-check:
	npx prettier --check .

format:
	npx prettier --write .

e2e-tests:
	sh e2e-tests.sh