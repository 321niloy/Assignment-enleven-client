import React, {  useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../usetitle/Usetitle';


const Alltoys = () => {
    
    useTitle('All TOys')
    const [alltoys, settoys] =useState([])

    useEffect(() =>{
   fetch("http://localhost:3000/alltoys")
   .then(res => res.json())
   .then(data =>{
    settoys(data)
   })




    },[])
    

 

    return (
        <div className='mt-4 mb-4'>
             <div className="search-box p-2 text-center">
          <input
           
            type="text"
            className="border rounded-lg border-gray-400 py-1 px-2 "
          />{" "}
          <button className=' border-rose-400 p-2  rounded-xl text-white bg-pink-700' >Search</button>
        </div>
        <div className='flex mb-9'>
          <button onClick={() => lowtohigh('lowto')}  className=' border-rose-400 p-2  rounded-xl text-white bg-pink-700 me-2'>low to High</button>
          <button className=' border-rose-400 p-2  rounded-xl text-white bg-pink-700'>     High to low </button>
        </div>

            <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>ToyName</th>
        <th>Subcategory</th>
        <th>Price</th>
        <th>Quantity</th>
        <th></th>
      </tr>
    </thead>
    <tbody >
    

{
   alltoys.map((alltoy , index)=>    <tr >
   <td className='bg-pink-200 text-slate-700'>{index+1}</td>
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