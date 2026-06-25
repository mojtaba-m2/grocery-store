"use client";

import { useShoppingCartContext } from "@/context/ShoppingCartContext";

function AddToCart() {
  const { cartItems } = useShoppingCartContext();

  return (
    <div className="my-4">
      <button className="bg-sky-500 text-white px-2  rounded ">+</button>
      <span className="mx-4">2</span>
      <button className="bg-sky-500 text-white px-2  rounded ">-</button>
    </div>
  );
}

export default AddToCart;
