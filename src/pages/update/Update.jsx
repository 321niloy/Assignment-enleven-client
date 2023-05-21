import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../usetitle/Usetitle';
import Swal from 'sweetalert2';

const Update = () => {
  useTitle('Update')
  const navigate = useNavigate()
    const updatetoy = useLoaderData()
    console.log('kkkkkkkkk',updatetoy)
    const {_id,Name,Sellername,Selleremail,subcategory,price,rating,quantity,area} = updatetoy
    const handleupdatetoy = event =>{
        event.preventDefault()
        const form = event.target;
        const Name = form.name.value;
        const Sellername = form.sellername.value;
        const photo = form.photo.value;
        const Selleremail = form.selleremail.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const quantity = form.quantity.value;
        const area = form.area.value;
        // console.log(Name,Sellername,Selleremail,subcategory,price,rating,quantity,area)
        form.reset()
        const updateit = {Name,Sellername,Selleremail,subcategory,price,rating,quantity,area,photo}
        
        fetch(`http://localhost:3000/update/${_id}`,{
            method: "PUT", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateit)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged>0){
              Swal.fire(
                'Update Succesfull!',
                'You clicked the button!',
                'success'
              )
               navigate('/mytoy',{replace:true})
          }
        })
        

    }
    return (
        <div>
        <div className="min-h-screen py-40" > 
  <div className="container mx-auto">
    
      <div className="w-full lg:w-1/2 py-16 px-12">
        <h2 className="text-3xl mb-4 font-extrabold ">Update your TOY</h2>
        
        <form onSubmit={handleupdatetoy}>
          <div className="mt-5">
            <input type="text" name='name' placeholder="Name" className="border rounded-lg border-gray-400 py-1 px-2 w-full" defaultValue={Name} required/>
          </div>
          <div className="mt-5">
            <input type="text" name='sellername' placeholder="SellerName" className="border rounded-lg border-gray-400 py-1 px-2 w-full" defaultValue={Sellername} required/>
          </div>
          <div className="mt-5">
            <input type="text" name='selleremail' placeholder="SellerEmail" className="border rounded-lg border-gray-400 py-1 px-2 w-full" defaultValue={Selleremail}  required/>
          </div>
          <div className="mt-5">
            <input type="text" name='subcategory' placeholder="Sub-Category" className="border rounded-lg border-gray-400 py-1 px-2 w-full" defaultValue={subcategory} required/>
          </div>

          <div className="mt-5">
            <input type="text" name='price' placeholder="Price" className="border rounded-lg border-gray-400 py-1 px-2 w-full" defaultValue={price} required/>
          </div>
          <div className="mt-5">
                <input type="text" name='photo' placeholder="Photourl" className="border rounded-lg border-gray-400 py-1 px-2 w-full" defaultValue={photo} required/>
              </div>
          <div className='flex'>
          <div className="mt-5 me-2">
            <input type="text" name='rating' placeholder="Rating" className="border rounded-lg border-gray-400 py-1 px-2 w-full" defaultValue={rating} required/>
          </div>
          <div className="mt-5">
            <input type="text" name='quantity' placeholder="Quantity" className="border rounded-lg border-gray-400 py-1 px-2 w-full" defaultValue={quantity} required/>
          </div>
          </div>
          <textarea name='area' className='mt-5 border rounded-lg border-gray-400 py-1 px-2 w-full' defaultValue={area}></textarea>
         
         
          <div className="mt-5">
              <input className="w-full border-pink-600 rounded-lg bg-pink-300 py-3 text-center text-white" type="submit" value="Update It" />
              
            </div>
           
        </form>
    
      </div>
    </div>
  </div>
</div>
   
    
    );
};

export default Update;