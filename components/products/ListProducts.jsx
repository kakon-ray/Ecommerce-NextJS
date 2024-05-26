/* eslint-disable @next/next/no-img-element */
"use client"
import Link from 'next/link';
import React from 'react';
import StarRatings from "react-star-ratings";
import Filters from "@/components/layout/Filters";
import ProductItem from "@/components/products/ProductItem";

const ListProducts = ({data}) => {
    console.log(data)
    return (
        <div>
                 <section className="py-12">
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col md:flex-row -mx-4">
            <Filters />

            <main className="md:w-2/3 lg:w-3/4 px-3">
                {
                    data?.products?.map((item) => {
                        return  <ProductItem key={item._id} item={item}/>
                    })
                }
              
            </main>
          </div>
        </div>
      </section>
        </div>
    );
};

export default ListProducts;