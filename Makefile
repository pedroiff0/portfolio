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
	node --check assets/js/main.js assets/js/sky.js assets/js/spectrum.js tools/record_demos.js
	python3 -m py_compile tools/fonte.py tools/traduzir.py tools/migrar_fonte.py
	python3 tools/build.py --check
	@echo "Validações de sintaxe concluídas com sucesso."

clean: ## Limpa relatórios temporários de teste
	rm -rf test-results/ playwright-report/

traduzir: ## Traduz por IA só os trechos pt-BR que mudaram (nota do vault -> src/traducoes.json)
	python3 tools/traduzir.py

publicar-local: ## Sincroniza a fonte do vault, traduz se marcado, gera projects.js e roda o smoke test
	python3 tools/traduzir.py --se-marcado
	python3 tools/build.py
	npm test
