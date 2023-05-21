import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './details.css'
import useTitle from '../usetitle/Usetitle';
import LazyLoad from 'react-lazyload';

const Myviewdetails = () => {
    const myalltoy = useLoaderData()
    useTitle('MyViewdetails')
    const {Name,Sellername,Selleremail,subcategory,price,rating,quantity,area,photo}= myalltoy
    return (
        <div className="card   shadow-2xl mt-6 mb-4 bg-red-200">
        <div className="card-body">
        <figure className="px-10 pt-10">
    <LazyLoad><img src={photo} className="rounded-xl w-80 h-80" /></LazyLoad>
  </figure>
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