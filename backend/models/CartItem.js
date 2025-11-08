import mongoose from "mongoose";
const cartItemSchema = new mongoose.Schema({
    productId:String,
    title:String,
    price:Number,
    image:String,
    qty:{type:Number, default:1}
},{timestamps:true});
export const CartItem = mongoose.model("CartItem", cartItemSchema);