import React, { useState } from "react";

export default function Checkout({ onCheckout }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="checkout">
      <h3>Checkout</h3>
      <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <button onClick={() => onCheckout({ name, email })}>Submit</button>
    </div>
  );
}