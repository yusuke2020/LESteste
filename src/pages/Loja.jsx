import React, { useEffect, useState } from "react";
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs";
import { getItem, setItem } from "../services/LocalStorageFunctions";
import { Link } from "react-router-dom";
import { Vitrine } from "../css/style";
import { Header } from "../components/header";

export const Loja = () => {
  const [data, setData] = useState([]);
  const [carrinho, setCarrinho] = useState(getItem("cart") || []);

  useEffect(() => {
    const fetchAPI = async () => {
      const URL = "https://api.mercadolibre.com/sites/MLB/search?q=jogosps4";
      const response = await fetch(URL);
      const objJSON = await response.json();
      setData(objJSON.results);
    };
    fetchAPI();
  }, []);

  const handleClick = (obj) => {
    const item = carrinho.find((produto) => produto.id === obj.id);
    if (item) {
      const filtraArray = carrinho.filter((produto) => produto.id !== obj.id);
      setCarrinho(filtraArray);
      setItem("cart", filtraArray);
    } else {
      setCarrinho([...carrinho, obj]);
      setItem("cart", [...carrinho, obj]);
    }
  };
  return (
    <div>
      <Header />
      <Vitrine>
        {data.map((produto) => (
          <div key={produto.id}>
            <h4>{produto.title}</h4>
            <img src={produto.thumbnail} alt="" />
            <h4>R${produto.price}</h4>
            <button onClick={() => handleClick(produto)}>
              {carrinho.some(
                (itemCarrinho) => itemCarrinho.id === produto.id
              ) ? (
                <BsFillCartCheckFill />
              ) : (
                <BsFillCartPlusFill />
              )}
            </button>
          </div>
        ))}
      </Vitrine>
    </div>
  );
};
