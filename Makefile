.PHONY: help dev test lint clean

help: ## Exibe a lista de comandos disponíveis
	@echo "Comandos disponíveis em Portfolio:"
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-18s\033[0m %s\n", $$1, $$2}'

dev: ## Inicia servidor web local de desenvolvimento (porta 8080)
	python3 -m http.server 8080

test: ## Executa testes de interface Playwright
	npm test

lint: ## Valida presença de arquivos e sintaxe JS
	@test -f index.html && echo "index.html presente."
	node --check fix_hud.js fix_canvases.js
	@echo "Validações de sintaxe concluídas com sucesso."

clean: ## Limpa relatórios temporários de teste
	rm -rf test-results/ playwright-report/
