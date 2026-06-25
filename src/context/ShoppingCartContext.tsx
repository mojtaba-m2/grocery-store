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
};

const ShoppingCartContext = createContext({} as TShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartContextProvider({
  children,
}: TShppingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<TCartItems[]>([]);

  return (
    <ShoppingCartContext.Provider value={{ cartItems }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
