import React, { useContext } from "react";
import { CartContext } from "../context/cart";
import { Link } from "react-router-dom";
export default function Header() {
  const cartContext = useContext(CartContext);
  const { getTotalQuantity } = cartContext;
  return (
    <header className="fixed z-50 top-0 w-full bg-[#0a0a0a]">
      <nav className="flex justify-between items-center py-4 px-6">
        <div className="flex justify-between items-center gap-x-20">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M20,17.722c0.595-0.347,1-0.985,1-1.722V5c0-1.103-0.897-2-2-2H5C3.897,3,3,3.897,3,5v11c0,0.736,0.405,1.375,1,1.722V18H2 v2h20v-2h-2V17.722z M5,16V5h14l0.002,11H5z"></path>
          </svg>
          <ul className="space-x-6">
            <Link to="/">HOME</Link>
            <Link to="/products">SHOP</Link>
          </ul>
        </div>
        <Link to="/cart" className="flex items-center gap-x-2 ml-5">
          <svg
            stroke="currentColor"
            fill="currentColor"
            stroke-width="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path
                fill-rule="nonzero"
                d="M12 2a6 6 0 0 1 6 6v1h4v2h-1.167l-.757 9.083a1 1 0 0 1-.996.917H4.92a1 1 0 0 1-.996-.917L3.166 11H2V9h4V8a6 6 0 0 1 6-6zm6.826 9H5.173l.667 8h12.319l.667-8zM13 13v4h-2v-4h2zm-4 0v4H7v-4h2zm8 0v4h-2v-4h2zm-5-9a4 4 0 0 0-3.995 3.8L8 8v1h8V8a4 4 0 0 0-3.8-3.995L12 4z"
              ></path>
            </g>
          </svg>
          <p>{getTotalQuantity()}</p>
        </Link>
      </nav>
    </header>
  );
}
