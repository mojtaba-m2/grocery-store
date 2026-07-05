"use client";

import { useShoppingCartContext } from "@/context/ShoppingCartContext";

interface IAddToCartProps {
  id: string;
}

function AddToCart({ id }: IAddToCartProps) {
  const {
    getProductQty,
    handleIncreaseProductQty,
    handleDecreaseProductQty,
    handleRemoveBtn,
  } = useShoppingCartContext();

  return (
    <div className="my-4 ">
      <div className="">
        <button
          className="bg-sky-500 text-white px-2 rounded "
          onClick={() => {
            handleIncreaseProductQty(Number(id));
          }}
        >
          +
        </button>
        <span className="mx-4">{getProductQty(Number(id))}</span>
        <button
          className="bg-sky-500 text-white px-2 rounded "
          onClick={() => {
            handleDecreaseProductQty(Number(id));
          }}
        >
          -
        </button>
      </div>

      <button
        className="bg-red-500 text-white my-2 px-3 rounded"
        onClick={() => {
          handleRemoveBtn(Number(id));
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default AddToCart;
