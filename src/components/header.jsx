import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Top = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  background-color: cornflowerblue;
  padding: 20px;
  margin-bottom: 70px;

  a {
    text-decoration: none;
    color: aliceblue;

    &:hover {
      text-decoration: underline wavy;
    }
  }
`;

export const Header = () => {
  return (
    <Top>
      <Link to="/">Loja</Link>
      <Link to="/carrinho">Carrinho</Link>
      <Link to="/cadastroProdutos">Cadastro de Produtos</Link>
    </Top>
  );
};
