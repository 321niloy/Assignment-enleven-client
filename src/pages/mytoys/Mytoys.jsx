import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Mytoys = () => {
    const mytoys = useLoaderData()
    console.log('kk',mytoys)
    const {Name,Sellername,Selleremail,subcategory,price,rating,quantity,area}= mytoys
    return (
        <div className='mt-4 mb-4'>
            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        
        <th>Name</th>
        <th>Seller Name</th>
        <th>Seller Email</th>
        <th>Sub-Category</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Quantity</th>
        <th></th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody >
    

{
    mytoys.map(mytoy =>    <tr >
        
        <td className='bg-pink-200 text-slate-700'>{mytoy.Name}</td>
        <td className='bg-pink-200 text-slate-700'>{mytoy.Sellername}</td>
        <td className='bg-pink-200 text-slate-700'>{mytoy.Selleremail}</td>
        <td className='bg-pink-200 text-slate-700'>{mytoy.subcategory}</td>
        <td className='bg-pink-200 text-slate-700'>{mytoy.price}</td>
        <td className='bg-pink-200 text-slate-700'>{mytoy.rating}</td>
        <td className='bg-pink-200 text-slate-700'>{mytoy.quantity}</td>
        <td className='bg-pink-200 '><Link className='bg-pink-600 p-3 rounded-xl text-white font-extrabold'>View Details</Link></td>
        <td className='bg-pink-200 '><Link className='bg-pink-600 p-3 rounded-xl text-white font-extrabold'>Update</Link></td>
        <td className='bg-pink-200 '><button className='bg-pink-600 p-3 rounded-xl text-white font-extrabold'>Delete</button></td>
      </tr>)
   }
    

    
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Mytoys;