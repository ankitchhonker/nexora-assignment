import { CartItem } from "../models/CartItem.js";

// GET /api/cart
export const getCart = async (req, res) => {
  const items = await CartItem.find();
  const total = items.reduce((acc, i) => acc + i.price * i.qty, 0);
  res.json({ items, total });
};

// POST /api/cart
export const addToCart = async (req, res) => {
  const { productId, title, price, image, qty } = req.body;
  let item = await CartItem.findOne({ productId });
  if (item) {
    item.qty += qty;
  } else {
    item = new CartItem({ productId, title, price, image, qty });
  }
  await item.save();
  return getCart(req, res);
};

// DELETE /api/cart/:id
export const removeFromCart = async (req, res) => {
  await CartItem.findOneAndDelete({ productId: req.params.id });
  return getCart(req, res);
};

// POST /api/checkout
export const checkout = async (req, res) => {
  const { name, email } = req.body;
  const items = await CartItem.find();
  const total = items.reduce((acc, i) => acc + i.price * i.qty, 0);
  await CartItem.deleteMany({});
  res.json({
    receipt: {
      id: "rcpt_" + Date.now(),
      name,
      email,
      total,
      timestamp: new Date()
    }
  });
};