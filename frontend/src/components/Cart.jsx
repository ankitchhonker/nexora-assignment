import React from "react";

export default function Cart({ cart, onRemove }) {
  return (
    <div className="cart">
      <h3>🛒 Cart</h3>
      {cart.items.length === 0 ? (
        <p>No items</p>
      ) : (
        <>
          {cart.items.map((i) => (
            <div key={i._id} className="cart-item">
              <img src={i.image} alt={i.title} />
              <div>
                <p>{i.title}</p>
                <p>${i.price} × {i.qty}</p>
              </div>
              <button onClick={() => onRemove(i.productId)}>Remove</button>
            </div>
          ))}
          <h4>Total: ${cart.total}</h4>
        </>
      )}
    </div>
  );
}