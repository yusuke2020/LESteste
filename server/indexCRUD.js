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

app.get("/", (req, res) => {
  let SQL =
    "INSERT INTO produto (S_NOME_PRODUTO, N_VALOR_PRODUTO, N_QTDE_PRODUTO,S_CATEGORIA_PRODUTO) VALUES ('jooj22', 1245.69, 5, 'puzzle')";

  dbconfig.query(SQL, (err, result) => {
    console.log(err);
  });
});
app.listen(3001, () => {
  console.log("rodando servidor!");
});
