const sql = require("mssql");

const config = {
  user: "yfuchs",
  password: "AnemoYanfei1995@",
  server: "localhost",
  database: "model",
  /*options: {
    enableArithAbort: true,
  },*/
};

async function connect() {
  try {
    await sql.connect(config);
    console.log("Banco conectado com sucesso!");
  } catch (error) {
    console.error(`Erro ao conectar ao banco de dados: ${error}`);
  }
}

module.exports = { connect, sql };
