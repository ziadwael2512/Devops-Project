#!/bin/sh

# Wait until Postgres is ready
until pg_isready -h db -p 5432 -U postgres; do
  echo "⏳ Waiting for PostgreSQL..."
  sleep 2
done

echo "✅ PostgreSQL is ready. Starting backend..."
exec node index.js
