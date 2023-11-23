const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const conexao = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "crud",
});

conexao.connect((err) => {
  if (err) {
    console.error("Erro ao conectar ao MySQL:", err);
    return;
  }
  console.log("Conectado ao MySQL!");
});

app.post("/api/enviar-dados", (req, res) => {
  const dadosRecebidos = req.body;

  const query =
    "INSERT INTO cadastro_lista (nome, email, telefone, dataNascimento, cpf, numeroFesta, dataFesta, jaECliente) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  conexao.query(
    query,
    [
      dadosRecebidos.nome,
      dadosRecebidos.email,
      dadosRecebidos.telefone,
      dadosRecebidos.dataNascimento,
      dadosRecebidos.cpf,
      dadosRecebidos.numeroFesta,
      dadosRecebidos.dataFesta,
      dadosRecebidos.jaECliente,
    ],
    (err, resultados) => {
      if (err) {
        console.error("Erro ao inserir dados no MySQL:", err);
        res
          .status(500)
          .json({ mensagem: "Erro ao salvar dados no banco de dados" });
        return;
      }

      console.log("Dados inseridos no MySQL:", resultados);
      res.json({ mensagem: "Dados salvos com sucesso!" });
    }
  );
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
