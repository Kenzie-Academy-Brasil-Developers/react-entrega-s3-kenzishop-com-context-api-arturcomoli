import { createContext, useState } from "react";
import toast from "react-hot-toast";
import db from "../../db/db";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    const local = JSON.parse(localStorage.getItem("@KenzieShop: Cart")) || [];
    const numberId = Number(id);
    const product = db.find((item) => item.id === numberId);
    const formattedProduct = {
      ...product,
      formattedPrice: Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(product.price),
    };

    const newLocal = [...local, formattedProduct];
    localStorage.setItem("@KenzieShop: Cart", JSON.stringify(newLocal));
    toast.success("Item adicionado ao carrinho!");
    setCart(newLocal);
  };

  const deleteAll = () => {
    const empty = [];
    localStorage.setItem("@KenzieShop: Cart", JSON.stringify(empty));
    toast.success("Itens Deletados!!");
    setCart(empty);
  };

  const deleteItem = (id) => {
    const local = JSON.parse(localStorage.getItem("@KenzieShop: Cart")) || [];
    const numberId = Number(id);
    const product = local.find((item) => item.id === numberId);
    const index = local.indexOf(product);
    const array = [...local];
    array.splice(index, 1);

    localStorage.setItem("@KenzieShop: Cart", JSON.stringify(array));
    toast.success("Item Deletado!");

    setCart(array);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, deleteAll, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};
