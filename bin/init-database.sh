#!/bin/bash

CONTAINER_NAME=pear_app-postgres-1
POSTGRES_USER=pear_app_postgres_user
POSTGRES_PASSWORD=simple
POSTGRES_DB=pear_app_development

echo "$POSTGRES_DB"
echo "$POSTGRES_USER"
echo "$POSTGRES_PASSWORD"


create_db_sql="CREATE DATABASE $POSTGRES_DB;"
create_user_sql="CREATE USER $POSTGRES_USER WITH PASSWORD '$POSTGRES_PASSWORD';"
grand_user_permissions_sql="GRANT ALL PRIVILEGES ON DATABASE $POSTGRES_DB TO $POSTGRES_USER;"

docker exec -ti "$CONTAINER_NAME" psql -U "admin" -d "postgres" -c "$create_db_sql"
docker exec -ti "$CONTAINER_NAME" psql -U "admin" -d "postgres" -c "$create_user_sql"
docker exec -ti "$CONTAINER_NAME" psql -U "admin" -d "postgres" -c "$grand_user_permissions_sql"
