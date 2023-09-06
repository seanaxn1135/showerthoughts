#!/bin/bash

HOST="${HOST:-http://localhost:3000}"

if [ "$HOST" = "http://localhost:3000" ]; then
    echo killing process on port 3000
    kill -15 $(lsof -t -i:3000) || true
    while [[ -n $(lsof -t -i:3000) ]]; do
        echo waiting kill
        sleep 1
    done

    npm run start &
fi

until $(curl --output /dev/null --head --fail -k $HOST); do

    sleep 5
    echo server is unreachable

done

echo testing against $HOST
TEST_HOST=$HOST npx playwright test ./api_tests --project=chromium || {
    echo 'api test failed'
    exit 1
}
