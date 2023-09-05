#!/bin/bash

HOST="${HOST:-http://localhost:3000}"


echo testing against $HOST

# Check if running locally
# if [ "$HOST" = "https://localhost:3000" ]; then
#     echo killing process on port 3000
#     kill $(lsof -t -i:3000) || true
#     while [[ -n $(lsof -t -i:3000) ]]; do
#         echo waiting kill
#         sleep 1
#     done
# fi
echo "Starting MongoDB in Docker..."
docker-compose up -d mongodb

sleep 5

echo "Seeding data into MongoDB..."
node scripts/seedUser.js

echo testing api
TEST_HOST=$HOST npx playwright test ./api_tests --project=chromium || {
    docker-compose down
    echo 'api test failed'
    exit 1
}

echo closing docker
docker-compose down
