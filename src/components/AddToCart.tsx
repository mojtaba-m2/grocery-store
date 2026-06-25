"use client";

import { useShoppingCartContext } from "@/context/ShoppingCartContext";

interface IAddToCartProps {
  id: string;
}

function AddToCart({ id }: IAddToCartProps) {
  const { cartItems, handleIncreaseProductQty } = useShoppingCartContext();

  console.log(cartItems);

  return (
    <div className="my-4">
      <button
        className="bg-sky-500 text-white px-2  rounded "
        onClick={() => {
          handleIncreaseProductQty(Number(id));
        }}
      >
        +
      </button>
      <span className="mx-4">3</span>
      <button className="bg-sky-500 text-white px-2  rounded ">-</button>
    </div>
  );
}

export default AddToCart;
