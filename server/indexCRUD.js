const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const dbconfig = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "AnemoYanfei1995@",
  database: "fatecgames",
});

app.use(cors());
app.use(express.json());

app.post("/registroProd", (req, res) => {
  const { nome } = req.body;
  const { valor } = req.body;
  const { qtde } = req.body;
  const { categoria } = req.body;

  let SQL =
    "INSERT INTO produto (S_NOME_PRODUTO, N_VALOR_PRODUTO, N_QTDE_PRODUTO,S_CATEGORIA_PRODUTO) VALUES (?,?,?,?)";

  dbconfig.query(SQL, [nome, valor, qtde, categoria], (err, result) => {
    if (err) {
      console.log(err);
      res.send("Erro ao inserir registro no banco de dados.");
    } else {
      res.send("Registro inserido com sucesso.");
    }
  });
});

/*app.get("/", (req, res) => {
  let SQL =
    "INSERT INTO produto (S_NOME_PRODUTO, N_VALOR_PRODUTO, N_QTDE_PRODUTO,S_CATEGORIA_PRODUTO) VALUES ('300 linhas', 7776, 1, 'teste')";
*/

app.get("/", (req, res) => {
  res.send("olarmundo");
});
app.listen(3001, () => {
  console.log("rodando servidor!");
});
