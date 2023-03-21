import React, { useState } from "react";
import "../css/styleCadastro.css";
import { Header } from "../components/header";
import Axios from "axios";

export default function CadastroProduto() {
  const [valores, setValores] = useState();
  const mudarValores = (valor) => {
    setValores((valorAnt) => ({
      ...valorAnt,
      [valor.target.name]: valor.target.value,
    }));
  };

  const aoClicarBtnCadastro = () => {
    Axios.post("http://localhost:3001/registroProd", {
      nome: valores.nome,
      valor: valores.valor,
      categoria: valores.categoria,
      qtde: valores.qtde,
    }).then((resposta) => {
      console.log(resposta);
    });
  };

  const newLocal = (
    <div>
      <Header />
      <div className="container">
        <div className="containerCadastro">
          <h1>Cadastro de produtos</h1>
          <input
            type="text"
            name="nome"
            placeholder="Nome do Produto"
            className="inputCadastro"
            onChange={mudarValores}
          />
          <input
            type="text"
            name="valor"
            placeholder="Preço"
            className="inputCadastro"
            onChange={mudarValores}
          />
          <input
            type="text"
            name="categoria"
            placeholder="Categoria"
            className="inputCadastro"
            onChange={mudarValores}
          />
          <input
            type="text"
            name="qtde"
            placeholder="Quantidade"
            className="inputCadastro"
            onChange={mudarValores}
          />
          <button onClick={() => aoClicarBtnCadastro()}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
  return newLocal;
}
