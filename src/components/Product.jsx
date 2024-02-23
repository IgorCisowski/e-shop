import React from "react";
import { useState, useEffect, useContext } from "react";
import { CartContext } from "../context/cart";
import { useParams } from "react-router";

export default function Product() {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  const cartContext = useContext(CartContext);
  const { addToCart } = cartContext;
  async function getProducts() {
    const response = await fetch(`https://dummyapi.online/api/products/${id}`);
    const data = await response.json();
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, [id]);

  return (
    <section className="flex justify-center items-center w-full h-screen">
      <div className="px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 gap-y-5 gap-x-10">
        <div key={id} id={id}>
          <img src={products.thumbnailImage} alt="thumbnailImage" />
        </div>
        <div className="space-y-2">
          <p className="max-w-[400px]">{products.description}</p>
          <h3 className="font-semibold mt-2 text-2xl">{products.name}</h3>
          <p className="text-md">£ {products.basePrice}</p>
          <button
            className="text-xl border-2 border-red-white px-2 py-1"
            onClick={() => addToCart(products)}
          >
            Add to basket
          </button>
        </div>
      </div>
    </section>
  );
}
