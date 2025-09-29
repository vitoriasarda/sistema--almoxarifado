## Pré-requisitos

Certifique-se de ter os seguintes softwares instalados:

- **Node.js** (versão 18 ou superior)
- **pnpm** (gerenciador de pacotes para o frontend)
- **Python** (versão 3.10 ou superior)

## 1. Configurando o Backend (Django)

Siga os passos abaixo dentro da pasta `backend` do projeto.

### 1.1. Crie e Ative um Ambiente Virtual

É uma boa prática isolar as dependências do Python em um ambiente virtual.

```bash
# Navegue até a pasta do backend
cd backend

# Crie o ambiente virtual
python -m venv venv

# Ative o ambiente virtual
# No Windows:
.\venv\Scripts\activate

1.2. Instale as Dependências
Com o ambiente ativado, instale todas as bibliotecas Python necessárias.

Bash

pip install -r requirements.txt
1.3. Execute as Migrações do Banco de Dados
Este comando cria o arquivo de banco de dados (db.sqlite3) e as tabelas necessárias.

Bash

python manage.py migrate

1.4. Inicie o Servidor do Backend
O backend Django rodará, por padrão, na porta 8000.

Bash

python manage.py runserver
O backend agora está pronto e aguardando requisições em http://127.0.0.1:8000.

2. Configurando o Frontend (React)
Abra um novo terminal e siga os passos dentro da pasta frontend.

2.1. Instale as Dependências
O pnpm irá instalar todas as bibliotecas JavaScript listadas no package.json.

Bash

# Navegue até a pasta do frontend
cd frontend

# Instale as dependências
pnpm install
2.2. Inicie o Servidor de Desenvolvimento
O frontend React rodará, por padrão, na porta 8080.

Bash

pnpm dev
```
