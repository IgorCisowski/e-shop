import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center space-y-3">
          <h1 className="text-5xl text-center">HUGE COLLECTION</h1>
          <p>Laptops, phones, tablets & more</p>
          <Link
            to="/products"
            className="text-xl border-2 border-red-white px-2 py-1"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
    </section>
  );
}
