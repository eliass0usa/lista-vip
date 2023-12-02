## Documentação do Projeto Lista VIP UNINOVE - 2023

### Tecnologias Utilizadas:

### Frontend:

- **React:** Uma biblioteca JavaScript para criar interfaces de usuário.
- **Material-UI:** Uma biblioteca de componentes React que implementa o Material Design.
- **react-hook-form:** Uma biblioteca para gerenciar formulários no React.
- **axios:** Uma biblioteca para fazer requisições HTTP.

### Backend:

- **Node.js:** Ambiente de execução JavaScript server-side.
- **Express:** Framework web para Node.js.
- **cors:** Middleware para habilitar o controle de acesso HTTP (CORS).
- **mysql2:** Cliente MySQL para Node.js.

### Banco de Dados:

- **MySQL:** Sistema de gerenciamento de banco de dados relacional.

### Outros:

- **Git:** Sistema de controle de versão distribuído.
- **npm:** Gerenciador de pacotes para Node.js.

## Estrutura do Projeto:

```
lista-vip/
│
├── app-front/                  # Aplicação Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── pages/         # Páginas da aplicação
│   │   │   │   ├── Form.js    # Componente de formulário
│   │   │   │   └── ...
│   │   │   ├── layouts/       # Layouts compartilhados
│   │   │   ├── styles/        # Estilos globais
│   │   │   └── ...
│   │   ├── services/           # Serviços, como requisições HTTP
│   │   └── ...
│   └── ...
│
└── app-front/src/components/backend/  # Backend da aplicação
    ├── node_modules/
    ├── package.json
    ├── server.js               # Configuração do servidor Express
    └── ...
```

## Configuração do Banco de Dados (LOCALMENTE):

- Abra `app-front/src/components/backend/server.js`.
- Modifique as configurações do banco de dados (`host`, `user`, `password`, `database`) conforme necessário.

## Instruções para Execução:

1. **Clonagem do Repositório:**

   ```bash
   git clone https://github.com/seu-usuario/lista-vip.git
   ```

2. **Instalação das Dependências no Frontend:**

   ```bash
   cd lista-vip/app-front
   npm install
   ```

3. **Instalação das Dependências no Backend:**

   ```bash
   cd lista-vip/app-front/src/components/backend
   npm install
   ```

4. **Configuração do Banco de Dados:**

   - Abra o arquivo `server.js` em `lista-vip/app-front/src/components/backend`.
   - Modifique as configurações do banco de dados (`host`, `user`, `password`, `database`) conforme necessário.

5. **Execução do Backend:**

   ```bash
   node server.js
   ```

6. **Execução do Frontend:**

   ```bash
   cd lista-vip/app-front
   npm start
   ```



7. **Interaja com o Aplicativo:**
   - Navegue, preencha o formulário. 

## LINK PARA ACESSO AO PROJETO HOSPEDADO:

[LINK PARA ACESSO ](https://mateusjsantana.github.io/lista-vip-project/)

## VIDEO DE APRESENTÇÃO DO PROJETO ( NÃO LISTADO ):
https://youtu.be/yeRm8CTHUnI

##INTEGRANTES
1. Elias Oliveira
2. Jose Mateus
3. João Beccari
4. Nicolas Barros
5. Felipe Souza
6. Luigi Botelho
