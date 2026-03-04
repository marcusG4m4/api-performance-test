# 🚀 API Performance Test — Node.js + k6

Projeto demonstrando testes de performance em uma API Node.js utilizando k6 para simulação de carga.

---

## 📌 Objetivo

Validar o comportamento da API sob carga simultânea de usuários, analisando:

- Tempo médio de resposta
- Percentil 95 (p95)
- Taxa de erro
- Estabilidade sob carga contínua

Este projeto demonstra conhecimentos em:

✔ Testes de Performance  
✔ Testes Não Funcionais  
✔ Análise de Métricas  
✔ Organização de Projeto  
✔ Boas práticas com Git  

---

## 🛠 Tecnologias Utilizadas

- **Node.js**
- **Express**
- **k6**
- JavaScript

---

## 📂 Estrutura do Projeto

```
api-performance-test/
│
├── src/
│   └── server.js              # API Node.js
│
├── tests/
│   └── performance/
│       └── load-test.js       # Script de teste de carga (k6)
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## 🔧 Como Executar o Projeto

### 1️⃣ Instalar dependências

```bash
npm install
```

---

### 2️⃣ Iniciar a API

```bash
node src/server.js
```

A API estará rodando em:

```
http://localhost:3000
```

---

### 3️⃣ Executar o teste de performance

```bash
k6 run tests/performance/load-test.js
```

---

## 📊 Cenário de Teste

- 50 usuários virtuais simultâneos
- Duração: 10 segundos
- SLA esperado: < 200ms
- Verificação de status HTTP 200
- Verificação de tempo de resposta

---

## 📈 Resultados Obtidos

Exemplo de execução:

- ✅ 100% das requisições com status 200
- ⏱ Tempo médio: ~112ms
- 📉 p95 abaixo de 140ms
- ❌ 0% de falhas

---

## 🧠 O que este projeto demonstra

- Capacidade de estruturar testes de performance
- Leitura e interpretação de métricas do k6
- Definição de SLA
- Organização profissional de repositório
- Separação clara entre código da API e testes

---

## 🔥 Próximas melhorias (Roadmap)

- [ ] Testes de estresse (Stress Test)
- [ ] Testes de pico (Spike Test)
- [ ] Integração com CI/CD (GitHub Actions)
- [ ] Geração de relatório automatizado
- [ ] Containerização com Docker

---

## 👨‍💻 Autor

Marcus  
GitHub: https://github.com/marcusG4m4

---

⭐ Projeto desenvolvido para fins de estudo e demonstração de competências em testes de software.
