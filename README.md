# Steam App BD 2025.1

Este repositório contém o projeto **steam\_app\_bd\_2025\_1**, organizado em dois subprojetos:

* `steam-backend`: API RESTful em Python usando FastAPI e SQLAlchemy, conectada a um banco MySQL.
* `steam-frontend`: aplicação web em React + Vite, estilizada com Tailwind CSS e componentes de dashboard.

## Estrutura do Repositório

```
steam_app_bd_2025_1/
├─ steam-backend/      # Back-end Python (FastAPI)
├─ steam-frontend/     # Front-end React (Vite)
└─ README.md           # Documentação deste projeto
```

---

## 🚀 Rodando o Back‑End

1. Navegue até a pasta do backend:

   ```bash
   cd steam-backend
   ```
2. Crie e ative um ambiente virtual Python:

   ```bash
   python -m venv venv
   # Windows PowerShell:
   .\venv\Scripts\Activate.ps1
   # ou Windows CMD:
   .\venv\Scripts\activate.bat
   # macOS/Linux:
   source venv/bin/activate
   ```
3. Instale as dependências:

   ```bash
   pip install --upgrade pip
   pip install -r requirements.txt
   ```
4. Ajuste a string de conexão MySQL em `database.py` (usuário, senha, host, porta, nome do banco).
5. Inicie o servidor de desenvolvimento:

   ```bash
   uvicorn main:app --reload
   ```
6. Acesse a documentação interativa em:

   > [http://localhost:8000/docs](http://localhost:8000/docs)

---

## 🚀 Rodando o Front‑End

1. Navegue até a pasta do frontend:

   ```bash
   cd steam-frontend
   ```
2. Instale as dependências Node.js:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```
4. Abra no navegador:

   > [http://localhost:5173](http://localhost:5173)

---

## 📦 Tecnologias Utilizadas

### Back‑End

* **Python 3.10.11**
* **FastAPI** (framework web)
* **Uvicorn** (servidor ASGI)
* **SQLAlchemy 2.x** (ORM)
* **PyMySQL** (driver MySQL)
* **Pydantic** (validação de dados)
* **MySQL** (banco de dados)

### Front‑End

* **Node.js & NPM** (gerenciamento de pacotes)
* **Vite** (bundler e dev-server)
* **React 18** (biblioteca de UI)
* **Axios** (client HTTP)
* **Recharts** (gráficos)
* **Lodash** (funções utilitárias via alias)
