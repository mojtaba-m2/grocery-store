"use client";

import Container from "@/components/Container";
import axios from "axios";
import { ChangeEvent, useState } from "react";

interface INewProduct {
  id: string;
  title: string;
  price: string;
  img: string;
  description: string;
}

function Dashborad() {
  const [newProduct, setNewProduct] = useState<INewProduct>({
    id: "",
    title: "",
    price: "",
    img: "",
    description: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setNewProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCreateProduct = () => {
    axios({
      method: "POST",
      url: "http://localhost:8000/products",
      data: {
        id: Math.floor(Math.random() * 1000).toString(),
        title: newProduct.title,
        description: newProduct.description,
        price: newProduct.price,
        img: newProduct.img,
      },
    });
  };

  return (
    <div className="bg-gray-200 p-4">
      <Container>
        <div className="grid grid-rows-4 w-1/2 ">
          <input
            onChange={handleChange}
            name="title"
            className="mt-4 p-1 border"
            type="text"
            placeholder="product title"
          />
          <input
            onChange={handleChange}
            name="price"
            className="mt-4 p-1 border"
            type="text"
            placeholder="product price"
          />
          <input
            onChange={handleChange}
            name="img"
            className="mt-4 p-1 border"
            type="text"
            placeholder="product image"
          />
        </div>
        <textarea
          onChange={handleChange}
          name="description"
          className="w-full p-2 border"
          placeholder="product description"
        ></textarea>

        <button
          className="mt-4 bg-sky-500 text-white px-4 py-2 rounded"
          onClick={handleCreateProduct}
        >
          create new product
        </button>
      </Container>
    </div>
  );
}

export default Dashborad;
