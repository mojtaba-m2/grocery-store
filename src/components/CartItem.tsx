import { useEffect, useState } from "react";
import axios from "axios";
import { IProductProps } from "./ProductItem";
import AddToCart from "./AddToCart";

interface ICartItemsProps {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItemsProps) {
  const [dataProduct, setDataProduct] = useState({} as IProductProps);

  useEffect(() => {
    axios.get(`http://localhost:8000/products/${id}`).then((result) => {
      const { data } = result;

      setDataProduct(data);
    });
  }, []);

  return (
    <div className=" grid grid-cols-12 mt-6">
      <img className="col-span-2 h-36" src={dataProduct.img} alt="" />

      <div className="col-span-10 bg-slate-200 p-4">
        <h2 className="text-2xl">{dataProduct.title}</h2>

        <p>
          product quantity: <span>{qty}</span>
        </p>

        <p>
          price: <span>{`${dataProduct.price} $`}</span>
        </p>

        <AddToCart id={id.toString()} />
      </div>
    </div>
  );
}

export default CartItem;
