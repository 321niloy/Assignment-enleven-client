import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Alltoys = () => {
    const alltoys = useLoaderData()
    


    
    return (
        <div className='mt-4 mb-4'>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        
        <th>ToyName</th>
        <th>Subcategory</th>
        <th>Price</th>
        <th>Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody >
    

{
    alltoys.map(alltoy =>    <tr >
        
        <td className='bg-pink-200 text-slate-700'>{alltoy.toyname}</td>
        <td className='bg-pink-200 text-slate-700'>{alltoy.subcategory}</td>
        <td className='bg-pink-200 text-slate-700'>{alltoy.price}tk</td>
        <td className='bg-pink-200 text-slate-700'>{alltoy.quantity}</td>
        <td className='bg-pink-200 '><Link to={`/alltoys/${alltoy._id}`} className='bg-pink-600 p-3 rounded-xl text-white font-extrabold'>View Details</Link></td>
      </tr>)
   }
    

    
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Alltoys;