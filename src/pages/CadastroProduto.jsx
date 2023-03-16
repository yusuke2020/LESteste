import React from "react";

export default function CadastroProduto() {
  const newLocal =
    ((<div>Cadastro de Produtos</div>),
    (
      <div>
        <input type="text" name="nome" placeholder="Nome do Produto" />
        <input type="text" name="valor" placeholder="Preço" />
        <input type="text" name="categoria" placeholder="Categoria" />
        <input type="text" name="qtde" placeholder="Quantidade" />
        <button>Cadastrar</button>
      </div>
    ));
  return newLocal;
}
