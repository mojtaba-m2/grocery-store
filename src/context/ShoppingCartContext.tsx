"use client";

import { createContext, useContext, useEffect, useState } from "react";

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
  getProductQty: (id: number) => number;
  cartTotalQty: number;
  handleDecreaseProductQty: (id: number) => void;
  handleRemoveBtn: (id: number) => void;
};

const ShoppingCartContext = createContext({} as TShoppingCartContext);

export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartContextProvider({
  children,
}: TShppingCartContextProviderProps) {
  const [cartItems, setCartItems] = useState<TCartItems[]>([]);

  const cartTotalQty = cartItems.reduce((totalQty, item) => {
    return totalQty + item.qty;
  }, 0);

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id === id)?.qty || 0;
  };

  const handleIncreaseProductQty = (id: number) => {
    setCartItems((prevCartItems) => {
      const productExists = prevCartItems.find((item) => item.id === id);

      if (!productExists) {
        return [...prevCartItems, { id: id, qty: 1 }];
      } else {
        return prevCartItems.map((item) => {
          if (item.id === id) {
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

  // وجود نداره
  // وجود داره میخوایم ازش کم کنیم
  // محصول مورد نظر نیست

  const handleDecreaseProductQty = (id: number) => {
    setCartItems((prevCartItems) => {
      const isLastOne = prevCartItems.find((item) => item.id == id);

      if (isLastOne?.qty == 1) {
        return prevCartItems.filter((item) => item.id != id);
      } else {
        return prevCartItems.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleRemoveBtn = (id: number) => {
    setCartItems((prevCartItems) => {
      return prevCartItems.filter((item) => item.id != id);
    });
  };

  useEffect(() => {
    const storedCartItems = localStorage.getItem("ItemSidCart");

    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("ItemSidCart", JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreaseProductQty,
        getProductQty,
        cartTotalQty,
        handleDecreaseProductQty,
        handleRemoveBtn,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
