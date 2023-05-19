import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

const Alltoys = () => {
    const alltoys = useLoaderData()
    console.log(alltoys)

    const viewdetails = id =>{
console.log(id)
useEffect(()=>{
fetch(`http://localhost:3000/alltoys/${id}`,{
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(),


})
.then(res => res.json())
.then(data =>{
    console.log(data)
})

},[])
    }
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
        <td className='bg-pink-200 '><button onClick={()=> viewdetails(alltoy._id)} className='bg-pink-600 p-3 rounded-xl text-white font-extrabold'>View Details</button></td>
      </tr>)
   }
    

    
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Alltoys;