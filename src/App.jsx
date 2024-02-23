import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/global.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
