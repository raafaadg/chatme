up:
	docker compose up -d --build --remove-orphans 
reup:
	docker compose up -d --force-recreate --build --remove-orphans
down:
	docker compose down --remove-orphans --volumes
