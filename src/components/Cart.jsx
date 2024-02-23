import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/cart";

export default function Cart() {
  const cartContext = useContext(CartContext);

  const { cartItems, addToCart, removeFromCart, getCartTotal, deleteItem } =
    cartContext;

  return (
    <section>
      <div className="px-6 lg:px-12 h-screen">
        {cartItems.length <= 0 ? (
          <div className="text-center mt-60">
            <h2 className="text-5xl mb-5">Your basket is empty</h2>
            <Link to="/products" className="text-xl border-2 px-3 py-1">
              GO SHOPPING
            </Link>
          </div>
        ) : (
          <div className="grid-cols-1 grid md:grid-cols-2 gap-10 mt-40">
            <div className="w-full">
              <ul className="space-y-5">
                {cartItems.map((el) => {
                  return (
                    <li className="flex gap-x-5" key={el.id}>
                      <img
                        src={el.thumbnailImage}
                        alt="product"
                        className="w-28"
                      />
                      <div className="w-full">
                        <h3 className="text-lg mb-3">{el.name}</h3>
                        <div className="flex justify-between">
                          <div className="flex gap-x-4">
                            <button onClick={() => removeFromCart(el)}>
                              -
                            </button>
                            <p>{el.quantity}</p>
                            <button onClick={() => addToCart(el)}>+</button>
                          </div>
                          <button onClick={() => deleteItem(el)}>
                            <svg
                              stroke="currentColor"
                              fill="currentColor"
                              stroke-width="0"
                              viewBox="0 0 16 16"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M5.5 5.5A.5.5 0 016 6v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm2.5 0a.5.5 0 01.5.5v6a.5.5 0 01-1 0V6a.5.5 0 01.5-.5zm3 .5a.5.5 0 00-1 0v6a.5.5 0 001 0V6z"></path>
                              <path
                                fill-rule="evenodd"
                                d="M14.5 3a1 1 0 01-1 1H13v9a2 2 0 01-2 2H5a2 2 0 01-2-2V4h-.5a1 1 0 01-1-1V2a1 1 0 011-1H6a1 1 0 011-1h2a1 1 0 011 1h3.5a1 1 0 011 1v1zM4.118 4L4 4.059V13a1 1 0 001 1h6a1 1 0 001-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-2 grid-rows-2 mb-5 border-2 px-6 py-4">
                <p>Total:</p>
                <p className="text-end">£ {getCartTotal()}</p>
                <button className="text-xl border-2 w-full border-red-white px-2 py-1 col-start-1 col-end-3">
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
