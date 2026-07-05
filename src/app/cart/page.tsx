"use client";

import CartItem from "@/components/CartItem";
import Container from "@/components/Container";
import { IProductProps } from "@/components/ProductItem";
import { useShoppingCartContext } from "@/context/ShoppingCartContext";
import axios from "axios";
import { useEffect, useState } from "react";

interface ICodeData {
  id: string;
  code: string;
  percentage: number;
}

function Cart() {
  const { cartItems } = useShoppingCartContext();

  const [allProducts, setAllProducts] = useState<IProductProps[]>([]);

  const [discountCodeInput, setDiscountCodeInput] = useState<string>("");

  const [discountPercentage, setDiscountPercentage] = useState<number>(0);

  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios.get(`http://localhost:8000/products`).then((result) => {
      const { data } = result;

      setAllProducts(data);
    });
  }, []);



  const totalPrice: () => number = () => {
    return cartItems.reduce((total, item) => {
      let selectedProduct = allProducts.find(
        (product) => product.id === item.id.toString(),
      );
      return total + (selectedProduct?.price || 0) * item.qty;
    }, 0);
  };

  const subtotal = totalPrice();

  const discountedPrice: number = (subtotal * discountPercentage) / 100;

  const finalPrice: number = subtotal - discountedPrice;

  const handleSubmitDiscount = () => {
    axios(`http://localhost:8000/discounts?code=${discountCodeInput}`).then(
      (res) => {
        const data = res.data as ICodeData[];

        if (data.length > 0) {
          setDiscountPercentage(data[0].percentage);

          setMessage("Discount code applied");
        } else {
          setMessage("the discount code is invalid");
          setDiscountPercentage(0);
        }
      },
    );
  };

  return (
    <Container>
      <h1 className="my-6">Cart</h1>
      <div className="my-6 ">
        {cartItems.map((item) => (
          <CartItem key={item.id} {...item} />
        ))}
      </div>

      <div>
        <div className="border shadow-md p-4 mb-10">
          <h3> Subtotal : {subtotal.toLocaleString()} $</h3>
          <h3>Discount : {discountedPrice.toLocaleString()} $</h3>
          <h3>
            Total Price :
            {discountedPrice === 0
              ? subtotal.toLocaleString()
              : finalPrice.toLocaleString()}
            $
          </h3>

          <div>
            <input
              onChange={(e) => {
                setDiscountCodeInput(e.target.value);
              }}
              value={discountCodeInput}
              className="border mr-4"
              placeholder="کد تخفیف را وارد کنید"
              type="text"
            />
            <p
              className={
                message === "Discount code applied"
                  ? "text-green-500 my-1"
                  : "text-red-500 my-1"
              }
            >
              {message}
            </p>
            <button
              className="bg-sky-400 text-white px-4 py-1 rounded"
              onClick={() => {
                handleSubmitDiscount();
              }}
            >
              apply
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
