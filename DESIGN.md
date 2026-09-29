# DESIGN — Portfolio Architecture & Design Rules

## 1. Arquitetura da Interface

```mermaid
graph TD
    User["Visitante Web"] --> Index["index.html (Single Page Application)"]
    Index --> Canvas["assets/js & src/ (Partículas & Efeitos Visuais)"]
    Index --> Sections["Seções (Sobre, Projetos, Skills, Contato)"]
    Index --> CNAME["CNAME (pedroiff.com / Domínio Próprio)"]
    Tests["tests/ (Validação Visual Playwright)"] --> Index
```

---

## 2. Princípios de Design

1. **Estética Sci-Fi & Minimalismo:**
   - Paleta de cores dark mode com acentos em ciano, roxo e verde neon.
   - Efeitos de HUD cibernético e animações de canvas interativas sem comprometer 60fps.
2. **Zero Dependências Pesadas em Produção:**
   - Vanilla JS e CSS otimizado para carregamento instantâneo.
