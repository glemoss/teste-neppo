# Chatbot CLI

> Desafio técnico para vaga de desenvolvedor na Neppo.

## Funcionalidades

- [x] Consulta de temperatura atual por cidade
- [x] Geocoding automático via Nominatim API
- [x] Dados climáticos via Open-Meteo API
- [x] Interface CLI interativa
- [x] Máquina de estados para controle de fluxo

## Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/teste-neppo.git

# Entre na pasta do projeto
cd teste-neppo

# Instale as dependências
npm install
```

## Como Usar

```bash
# Inicie o chatbot
npm start
```

## Estrutura do Projeto

```
src/
  ├── bot/          # Lógica do chatbot
  ├── services/     # Serviços de API
  ├── utils/        # Funções utilitárias
  └── index.js      # Entry point

tests/
  ├── bot/          # Testes do bot
  └── utils/        # Testes utilitários
```

## Testes

```bash
# Executar testes
npm test
```

## Tecnologias

- Node.js
- Vitest
- APIs:
  - Open-Meteo
  - Nominatim

---
Desenvolvido como parte do processo seletivo para a Neppo.