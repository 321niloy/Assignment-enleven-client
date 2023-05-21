import { useSingleton } from '@tippyjs/react';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../usetitle/Usetitle';
import Swal from 'sweetalert2';
import { Authcontext } from '../../Provider/Authprovider';

const Mytoys = () => {
    const navigate = useNavigate()
    const {user} = useContext(Authcontext)
    useTitle('Mytoy')
    const [mytoys, setmytoys] = useState( )
    // ////////////////////////////
    useEffect(() =>{
      fetch(`http://localhost:3000/addtoys/${user?.email}`,{
        method:'GET',
        headers:{athorization:`Bearer ${localStorage.getItem('Car-access-token')}`}
      })
      .then(res => res.json())
      .then(data => {
        if(!data.error){
          setmytoys(data)
      }
      else{
        navigate('/')
      }

      } )
    },[])

    // ///-------------------------------------

    const handledelete = id =>{
   fetch(`http://localhost:3000/addtoys/${id}`,{
   method:'DELETE'
   })
   .then(res => res.json())
   .then(data =>{
    console.log(data)
    confirm('Are Yoy Sure???')
    Swal.fire(
      'Delete Succesfull!',
      'You clicked the button!',
      'success'
    )
    const remain = mytoys.filter(m => m._id !== id)
   setmytoys(remain)

   })
   
    }
   
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
    mytoys?.map(mytoy =>    <tr >
        
        <td className='bg-pink-200 text-slate-700'>{mytoy.Name}</td>
        <td className='bg-pink-200 text-slate-700'>{mytoy.Sellername}</td>
        <td className='bg-pink-200 text-slate-700'>{mytoy.Selleremail}</td>
        <td className='bg-pink-200 text-slate-700'>{mytoy.subcategory}</td>
        <td className='bg-pink-200 text-slate-700'>{mytoy.price}</td>
        <td className='bg-pink-200 text-slate-700'>{mytoy.rating}</td>
        <td className='bg-pink-200 text-slate-700'>{mytoy.quantity}</td>
        <td className='bg-pink-200 '><Link to={`/myview/${mytoy._id}`} className='bg-pink-600 p-3 rounded-xl text-white font-extrabold'>View Details</Link></td>
        <td className='bg-pink-200 '><Link to={`/update/${mytoy._id}`} className='bg-pink-600 p-3 rounded-xl text-white font-extrabold'>Update</Link></td>
        <td className='bg-pink-200 '><button onClick={() => handledelete(mytoy._id)} className='bg-pink-600 p-3 rounded-xl text-white font-extrabold'>Delete</button></td>
      </tr>)
   }
    

    
    </tbody>
  </table>
</div>
            
        </div>
    );
};

export default Mytoys;