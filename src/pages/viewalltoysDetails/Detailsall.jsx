import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Detailsall = () => {

    const toy = useLoaderData()
    return (
        <div className="card  bg-base-100 shadow-2xl mt-6 mb-4">
        <div className="card-body">
          <h2 className="text-4xl font-extrabold">{toy.toyname}</h2>
          <p className=" text-3xl font-bold">Category: {toy.subcategory}</p>
          <p className=" text-3xl font-bold">Price: {toy.price}tk</p>
          <p className=" text-3xl font-bold">Quantity: {toy.quantity}</p>
        </div>
      </div>
    );
};

export default Detailsall;