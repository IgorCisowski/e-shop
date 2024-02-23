import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("cartItems") || "[]"
);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  //   ADD
  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  // DELETE
  const removeFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };
  //RESET
  const clearCart = () => {
    setCartItems([]);
  };
  // TOTAL BASKET VALUE
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.basePrice * item.quantity,
      0
    );
  };
  // ITEMS in cart
  const getTotalQuantity = () => {
    return cartItems
      .map((i) => i.quantity)
      .reduce((total, value) => total + value, 0);
  };

  const deleteItem = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        getTotalQuantity,
        deleteItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
