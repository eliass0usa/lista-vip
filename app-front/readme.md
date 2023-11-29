**Documentação do Projeto Lista VIP**

## Tecnologias Utilizadas:

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

## Configuração do Banco de Dados:

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

7. **Acesso ao Aplicativo:**

   - Abra o navegador e vá para [http://localhost:3000](http://localhost:3000).

8. **Interaja com o Aplicativo:**
   - Navegue, preencha o formulário e verifique a interação com o MySQL.

## Observações:

- Certifique-se de ter as permissões corretas no MySQL para criar e modificar bancos de dados.
- Pode ser necessário instalar o MySQL Workbench ou outra ferramenta para visualização do banco de dados, se desejar verificar diretamente no banco.

Este guia assume que o ambiente está configurado de forma semelhante ao seu ambiente original. Se houver alguma diferença, ajuste conforme necessário.
