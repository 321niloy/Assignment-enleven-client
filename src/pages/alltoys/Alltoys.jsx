import React, {  useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../usetitle/Usetitle';


const Alltoys = () => {
    const alltoys = useLoaderData()
    const [searchText, setSearchText] = useState("");
    useTitle('All TOys')
    

    const handleSearch = () => {
      fetch(`http://localhost:3000/searchtoysText/${searchText}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setJobs(data);
        });
    };
    
    return (
        <div className='mt-4 mb-4'>
             <div className="search-box p-2 text-center">
          <input
            onChange={(e) => setSearchText(e.target.value)}
            type="text"
            className="border rounded-lg border-gray-400 py-1 px-2 "
          />{" "}
          <button className=' border-rose-400 p-2  rounded-xl text-white bg-pink-700' onClick={handleSearch}>Search</button>
        </div>

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