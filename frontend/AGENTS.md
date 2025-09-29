# Projeto Almoxarifado FAURG - Frontend

## Stack de Tecnologias

- **Gerenciador de Pacotes**: PNPM
- **Frontend**: React 18 + React Router 6 (SPA) + TypeScript + Vite
- **Estilização**: TailwindCSS 3
- **UI Components**: shadcn/ui (Radix UI + TailwindCSS)
- **Ícones**: Lucide React
- **Requisições API**: Axios

## Estrutura do Projeto

A estrutura de pastas do frontend foi organizada para separar as responsabilidades e facilitar a manutenção.

frontend/
├── client/ # Código-fonte da aplicação React
│ ├── components/
│ │ ├── shared/ # Componentes complexos usados em várias páginas (Ex: Sidebar)
│ │ └── ui/ # Componentes de UI básicos e genéricos (Ex: Button, Card)
│ ├── features/ # Lógica e componentes de cada funcionalidade específica
│ │ ├── products/
│ │ │ ├── components/ # Componentes usados apenas na funcionalidade de Produtos
│ │ │ └── api/ # Funções de chamada à API para Produtos
│ │ └── ... # Outras funcionalidades (categorias, usuários, etc.)
│ ├── hooks/ # Hooks customizados reutilizáveis
│ ├── lib/ # Funções utilitárias
│ ├── pages/ # Componentes que representam cada página da aplicação
│ ├── services/ # Configuração centralizada da API (Axios)
│ ├── App.tsx # Ponto de entrada com a definição das rotas
│ └── global.css # Estilos globais e tema do TailwindCSS
│
├── public/
│ └── assets/ # Imagens, ícones e outros arquivos estáticos
│
├── shared/ # Tipos TypeScript compartilhados com o backend
│ └── api.ts # "Contrato" que define a estrutura dos dados da API
│
└── package.json # Dependências e scripts do projeto

### Sistema de Rotas (SPA)

- As rotas da aplicação são gerenciadas pelo **React Router 6**.
- O arquivo `client/App.tsx` é o responsável por definir qual componente de página será renderizado para cada URL.
- Os componentes de página ficam em `client/pages/`.

### Comunicação com a API (Backend Django)

- **Serviço Centralizado**: Todas as chamadas para a API são gerenciadas através do `client/services/api.ts`, que utiliza **Axios**.
- **Variável de Ambiente**: A URL base da API do Django é configurada no arquivo `.env` na raiz do `frontend`, garantindo que não seja necessário alterar o código para apontar para um servidor diferente (desenvolvimento ou produção).
- **Tipos Compartilhados**: A pasta `shared/` contém as interfaces TypeScript que definem a estrutura dos dados (ex: `Produto`, `Categoria`). Isso garante que o frontend e o backend "falem a mesma língua", evitando erros de integração.

## Comandos de Desenvolvimento

Todos os comandos devem ser executados dentro da pasta `frontend`.

```bash
# Instala as dependências (necessário apenas na primeira vez)
pnpm install

# Inicia o servidor de desenvolvimento na porta 8080
pnpm dev

# Gera a build de produção na pasta /dist
pnpm build

# Roda a verificação de tipos do TypeScript
pnpm typecheck
```
