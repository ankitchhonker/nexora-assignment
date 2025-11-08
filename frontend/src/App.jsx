import React, { useEffect, useState } from "react";
import * as api from "./api";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import "./styles.css";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ items: [], total: 0 });
  const [receipt, setReceipt] = useState(null);

  useEffect(() => {
    loadProducts();
    loadCart();
  }, []);

  async function loadProducts() {
    const data = await api.getProducts();
    console.log(data);
    setProducts(data);
  }

  async function loadCart() {
    const data = await api.getCart();
    setCart(data);
  }

  async function addItem(product) {
    await api.addToCart({
      productId: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      qty: 1
    });
    loadCart();
  }

  async function removeItem(id) {
    await api.removeFromCart(id);
    loadCart();
  }

  async function handleCheckout(info) {
    const res = await api.checkout(info);
    setReceipt(res.receipt);
    loadCart();
  }

  return (
    <div className="app">
      <h1> Mock E-com Cart with fake product API</h1>
      <div className="grid">
        <ProductList products={products} onAdd={addItem} />
        <Cart cart={cart} onRemove={removeItem} />
      </div>
      <Checkout onCheckout={handleCheckout} />
      {receipt && (
        <div className="receipt">
          <h3>Receipt</h3>
          <p>ID: {receipt.id}</p>
          <p>Name: {receipt.name}</p>
          <p>Total: ${receipt.total}</p>
          <p>{new Date(receipt.timestamp).toLocaleString()}</p>
        </div>
      )}
    </div>
  );
}