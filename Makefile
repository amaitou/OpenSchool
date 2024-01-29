YELLOW := \033[1;33m
GREEN := \033[1;32m
RED := \033[1;31m
LIGHT_GREEN := \033[1;92m
RESET := \033[0m

build:
	@clear
	@echo "$(YELLOW)[*] Phase of building the image ...$(RESET)"
	@docker build --tag hkg:latest .

run:
	@echo "$(GREEN)[*] Phase of running the container ...$(RESET)"
	@docker container run --publish 8088:3000 --name hkg hkg:latest

show:
	@echo "$(LIGHT_GREEN)[*] Docker info $(RESET)"
	docker container ls -a
	docker image ls

clean:
	@echo "$(RED)[*] Phase of cleaning the container and image ...$(RESET)"
	docker container rm -f $(shell docker container ls -aq)
	docker image rm -f $(shell docker image ls -q)

.PHONY: build run show clean