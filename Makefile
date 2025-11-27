# Variables
DOCKER_USERNAME=softvence
PACKAGE_NAME=nestjs_starter
PACKAGE_VERSION=latest

# Docker image name
APP_IMAGE := $(DOCKER_USERNAME)/$(PACKAGE_NAME):$(PACKAGE_VERSION)

# Compose file
COMPOSE_FILE := compose.yaml

.PHONY: help build up upd down restart logs clean push containers volumes networks images

help:
	@echo "Available commands:"
	@echo "  make build        Build the Docker image"
	@echo "  make up           Start containers (attached)"
	@echo "  make upd          Start containers (detached)"
	@echo "  make down         Stop containers"
	@echo "  make restart      Restart containers"
	@echo "  make logs         Show logs of all services"
	@echo "  make clean        Remove containers, networks, volumes created by compose"
	@echo "  make push         Push the Docker image to Docker Hub"
	@echo "  make containers   List containers from compose"
	@echo "  make volumes      List volumes"
	@echo "  make networks     List networks"
	@echo "  make images       List images"

# Build the Docker image
build:
	docker build -t $(APP_IMAGE) .

# Start containers (attached)
up:
	docker compose -f $(COMPOSE_FILE) up --remove-orphans

# Start containers (detached)
upd:
	docker compose -f $(COMPOSE_FILE) up -d

# Stop containers
down:
	docker compose -f $(COMPOSE_FILE) down

# Restart containers
restart:
	docker compose -f $(COMPOSE_FILE) down
	docker compose -f $(COMPOSE_FILE) up -d

# Logs
logs:
	docker compose -f $(COMPOSE_FILE) logs -f

# Cleanup
clean:
	docker compose -f $(COMPOSE_FILE) down --volumes --remove-orphans
	docker rmi $(APP_IMAGE) || true

# List containers
containers:
	docker compose -f $(COMPOSE_FILE) ps

# List volumes
volumes:
	docker volume ls

# List networks
networks:
	docker network ls

# List images
images:
	docker images

# Push image
push:
	docker push $(APP_IMAGE)
