const BASE =  "http://localhost:5000";

export const getProducts = async () => {
  const res = await fetch(`${BASE}/api/products`);
  return res.json();
};

export const getCart = async () => {
  const res = await fetch(`${BASE}/api/cart`);
  return res.json();
};

export const addToCart = async (item) => {
  const res = await fetch(`${BASE}/api/cart`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(item)
  });
  return res.json();
};

export const removeFromCart = async (id) => {
  const res = await fetch(`${BASE}/api/cart/${id}`, { method: "DELETE" });
  return res.json();
};

export const checkout = async (payload) => {
  const res = await fetch(`${BASE}/api/cart/checkout`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  });
  return res.json();
};