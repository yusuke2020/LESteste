import React from "react";
import { Switch, Route } from "react-router-dom";
import { Loja } from "./pages/Loja";
import { Carrinho } from "./pages/Carrinho";
import CadastroProduto from "./pages/CadastroProduto";
import CadastroPessoa from "./pages/CadastroPessoa";

export const Content = () => {
  return (
    <Switch>
      <Route exact path="/carrinho" component={Carrinho} />
      <Route exact path="/" component={Loja} />
      <Route exact path="/cadastroProdutos" component={CadastroProduto} />
      <Route exact path="/cadastroClientes" component={CadastroPessoa} />
    </Switch>
  );
};
