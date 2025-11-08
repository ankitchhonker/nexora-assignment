import axios from "axios";
export const getProducts = async (req, res) => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products?limit=8");  
    console.log(response.data);    
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error: error.message });
  }
};