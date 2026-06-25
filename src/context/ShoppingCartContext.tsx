"use client";

import { createContext, useContext, useState } from "react";

type TShppingCartContextProviderProps = {
  children: React.ReactNode;
};

type TCartItems = {
  id: number;
  qty: number;
};

type TShoppingCartContext = {
  cartItems: TCartItems[];
  handleIncreaseProductQty: (id: number) => void;
};

const ShoppingCartContext = createContext({} as TShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartContextProvider({
  children,
}: TShppingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<TCartItems[]>([]);

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((prevCartItem) => {
      const productExists = prevCartItem.find((item) => item.id == id);

      if (!productExists) {
        return [...prevCartItem, { id: id, qty: 1 }];
      } else {
        return prevCartItem.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  return (
    <ShoppingCartContext.Provider
      value={{ cartItems, handleIncreaseProductQty }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
