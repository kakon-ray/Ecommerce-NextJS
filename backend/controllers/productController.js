import Product from "../models/product";
import APIFilters from "../utils/ApiFilters";

export const newProduct = async (req, res, next) => {
    const product = await Product.create(req.body);
    res.status(200).json({
      "msg":"Product Add Successed",
    });
  };


  export const getProducts = async (req, res, next) => {
    
    // http://localhost:3000/api/products?keyword=Headphones

    const apiFilters = new APIFilters(Product.find(), req.query).search()

    const products = await apiFilters.query;
    res.status(200).json({
      products,
    });
  };


  export const getProduct = async (req, res, next) => {
    const product = await Product.findById(req.query.id);
  
    if (!product) {
      res.status(404).json({
        error: "Product not found.",
      });
    }
  
    res.status(200).json({
      product,
    });
  };