import React, { useState } from "react";
import { getItem, setItem } from "../services/LocalStorageFunctions";
import { BsFillCartDashFill } from "react-icons/bs";
import { Vitrine } from "../css/style";
import { Header } from "../components/header";

export const Carrinho = () => {
  const [data, setData] = useState(getItem("cart") || []);
  const removeItem = (obj) => {
    const filtraArray = data.filter((produto) => produto.id !== obj.id);
    setData(filtraArray);
    setItem("cart", filtraArray);
  };

  const subTotal = data.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual.price,
    0
  );

  return (
    <div>
      <Header />
      <h3>{`Subtotal: R$ ${subTotal}`}</h3>
      <Vitrine>
        {data.map((produto) => (
          <div key={produto.id}>
            <h4>{produto.title}</h4>
            <img src={produto.thumbnail} alt={produto.title} />
            <h4>R${produto.price}</h4>
            <button onClick={() => removeItem(produto)}>
              <BsFillCartDashFill />
            </button>
          </div>
        ))}
      </Vitrine>
    </div>
  );
};
