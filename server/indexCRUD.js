const express = require("express");
const sql = require("mssql");
const app = express();

const config = {
  server: "localhost",
  database: "model",
  options: {
    trustedConnection: true, // Usando autenticação do Windows
  },
};

// Configuração da conexão com o banco de dados SQL Server
/*const config = {
  user: "sa",
  password: "mypassword",
  server: "localhost",
  database: "mydatabase",
  options: {
    encrypt: true,
    enableArithAbort: true,
  },
};*/

app.get("/", async (req, res) => {
  const SQL = `INSERT INTO PRODUTO (S_NOME_PRODUTO, N_VALOR_PRODUTO, N_QTDE_PRODUTO, S_CATEGORIA_PRODUTO)
  VALUES ('Ace attorney', 60, 5, 'Visual novel')`;
  config.query(SQL, (err, result) => {
    console.log(err);
  });
  res.send("Produto criado com sucesso");
});

/*
// Função para executar uma consulta SQL
const executaQuery = async (query) => {
  try {
    const pool = await sql.connect(config);
    const resultado = await pool.request().query(query);
    sql.close();
    return resultado.recordset;
  } catch (error) {
    console.log(error);
    throw error;
  }
};



// Rota para obter todos os produtos
app.get("/produtos", async (req, res) => {
  const produtos = await executaQuery("SELECT * FROM Produtos");
  res.send(produtos);
});

// Rota para obter um produto por ID
app.get("/produtos/:id", async (req, res) => {
  const produto = await executaQuery(
    `SELECT * FROM Produtos WHERE N_ID_PRODUTO = ${req.params.id}`
  );
  res.send(produto);
});


// Rota para criar um novo produto
/*app.post("/produtos", async (req, res) => {
  const { nome, preco, qtde, categoria } = req.body;
  await executaQuery(
    `INSERT INTO Produtos (S_NOME_PRODUTO, N_VALOR_PRODUTO, N_QTDE_PRODUTO, S_CATEGORIA_PRODUTO) VALUES ('${nome}', ${preco}, ${qtde}, '${categoria}')`
  );
  res.send("Produto criado com sucesso");
});

// Rota para atualizar um produto por ID
app.put("/produtos/:id", async (req, res) => {
  const { nome, preco, qtde, categoria } = req.body;
  await executaQuery(
    `UPDATE Produtos SET S_NOME_PRODUTO = '${nome}', N_VALOR_PRODUTO = ${preco},N_QTDE_PRODUTO = ${qtde},S_CATEGORIA_PRODUTO = '${categoria}' WHERE Id = ${req.params.id}`
  );
  res.send("Produto atualizado com sucesso");
});

// Rota para excluir um produto por ID
app.delete("/produtos/:id", async (req, res) => {
  await executaQuery(`DELETE FROM Produtos WHERE Id = ${req.params.id}`);
  res.send("Produto excluído com sucesso");
});
*/
// Inicia o servidor na porta 3000
app.listen(3000, () => console.log("Servidor iniciado na porta 3000"));

app.get("/", (req, res) => {
  res.send("olar mundo");
});

app.listen(3001, () => {
  console.log("rodando server");
});
