import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './details.css'

const Myviewdetails = () => {
    const myalltoy = useLoaderData()
    const {Name,Sellername,Selleremail,subcategory,price,rating,quantity,area}= myalltoy
    return (
        <div className="card  bg-base-100 shadow-2xl mt-6 mb-4">
        <div className="card-body">
          <h2 className="text-4xl font-extrabold">Name: {Name}</h2>
          <p className=" text-3xl font-bold">SellerName: {Sellername}</p>
          <p className=" text-3xl font-bold">SellerEmail: {Selleremail}</p>
          <p className=" text-3xl font-bold">Subcategory: {subcategory}</p>
          <p className=" text-3xl font-bold">Price: {price}</p>
          <p className=" text-3xl font-bold">Rating: {rating}</p>
          <p className=" text-3xl font-bold">Quantity: {quantity}</p>
          <p className=" text-3xl font-bold">Describtion:</p>
          <div id='border'>
          <p className=" text-3xl font-bold">{area}</p>
          </div>

        </div>
      </div>
    );
};

export default Myviewdetails;