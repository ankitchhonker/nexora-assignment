import React from "react";

export default function ProductList({ products, onAdd }) {
  return (
    <div className="products">
      {products.map((p) => (
        <div key={p.id} className="card">
          <img src={p.image} alt={p.title} />
          <h4>{p.title}</h4>
          <p>${p.price}</p>
          <button onClick={() => onAdd(p)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}