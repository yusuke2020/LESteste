import React, { useState } from "react";
import "../css/styleCadastro.css";
import { Header } from "../components/header";
import Axios from "axios";

export default function CadastroPessoa() {
  const [valores, setValores] = useState({});

  const mudarValores = (valor) => {
    setValores((valorAnt) => ({
      ...valorAnt,
      [valor.target.name]: valor.target.value,
    }));
  };

  const aoClicarBtnCadastro = () => {
    Axios.post("http://localhost:3001/registroCli", valores)
      .then((resposta) => {
        console.log(resposta);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Header />
      <div className="container">
        <div className="containerCadastro">
          <h1>Cadastro de clientes</h1>
          Nome
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            className="inputCadastro"
            onChange={mudarValores}
          />
          Data de nascimento
          <input
            type="date"
            name="nascimento"
            className="inputCadastro"
            onChange={mudarValores}
          />
          E-mail
          <input
            type="text"
            name="email"
            placeholder="E-mail"
            className="inputCadastro"
            onChange={mudarValores}
          />{" "}
          CPF
          <input
            type="text"
            name="CPF"
            placeholder="CPF"
            className="inputCadastro"
            onChange={mudarValores}
          />
          <button onClick={aoClicarBtnCadastro}>Cadastrar</button>
        </div>
      </div>
    </div>
  );
}
