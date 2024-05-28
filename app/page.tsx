import axios from 'axios';
import React from 'react';
import ListProducts from "@/components/products/ListProducts"

const getProducts = async () =>{
  const {data} = await axios.get(`${process.env.API_URL}/api/products`)
  return data;
}

const HomePage = async () => {

  const productData = await getProducts()
  return (
    <ListProducts data={productData}/>
    // <h1>Hello</h1>
  );
};

export default HomePage;