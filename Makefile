create-net:
	docker network create default_network --subnet 172.66.0.0/16 || true

build:
	docker-compose \
		-f docker-compose.storage.yml \
		-f docker-compose.pear-app.yml \
		-p pear_app \
		build --pull

init: create-net build

dev:
	docker-compose \
        -f docker-compose.storage.yml \
		-f docker-compose.pear-app.yml \
		-p pear_app \
		up --build

storage:
	docker-compose  \
	-f docker-compose.storage.yml \
	-p pear_app \
	up

full: init dev
