import React from 'react';
import useTitle from '../../usetitle/Usetitle';

const AddProject = () => {
  useTitle('Add toys')
    const handleAddtoy = event =>{
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
        const addit = {Name,Sellername,photo,Selleremail,subcategory,price,rating,quantity,area}
        console.log(addit)
        fetch(`http://localhost:3000/addtoys`,{
            method: "POST", 
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addit)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
        })

    }
    return (
        <div>
            <div className="min-h-screen py-40" > 
      <div className="container mx-auto">
        
          <div className="w-full lg:w-1/2 py-16 px-12">
            <h2 className="text-3xl mb-4 font-extrabold ">Add TOY</h2>
            
            <form onSubmit={handleAddtoy}>
              <div className="mt-5">
                <input type="text" name='name' placeholder="Name" className="border rounded-lg border-gray-400 py-1 px-2 w-full" required/>
              </div>
              <div className="mt-5">
                <input type="text" name='sellername' placeholder="SellerName" className="border rounded-lg border-gray-400 py-1 px-2 w-full" required/>
              </div>
              <div className="mt-5">
                <input type="text" name='selleremail' placeholder="SellerEmail" className="border rounded-lg border-gray-400 py-1 px-2 w-full" required/>
              </div>
              <div className="mt-5">
                <input type="text" name='subcategory' placeholder="Sub-Category" className="border rounded-lg border-gray-400 py-1 px-2 w-full" required/>
              </div>

              <div className="mt-5">
                <input type="text" name='price' placeholder="Price" className="border rounded-lg border-gray-400 py-1 px-2 w-full" required/>
              </div>
              <div className="mt-5">
                <input type="text" name='photo' placeholder="Photourl" className="border rounded-lg border-gray-400 py-1 px-2 w-full" required/>
              </div>
              <div className='flex'>
              <div className="mt-5 me-2">
                <input type="text" name='rating' placeholder="Rating" className="border rounded-lg border-gray-400 py-1 px-2 w-full" required/>
              </div>
              <div className="mt-5">
                <input type="text" name='quantity' placeholder="Quantity" className="border rounded-lg border-gray-400 py-1 px-2 w-full" required/>
              </div>
              </div>
              <textarea name='area' placeholder='Describtion' className='mt-5 border rounded-lg border-gray-400 py-1 px-2 w-full'></textarea>
             
             
              <div className="mt-5">
                  <input className="w-full border-pink-600 rounded-lg bg-pink-300 py-3 text-center text-white" type="submit" value="Add" />
                  
                </div>
               
            </form>
        
          </div>
        </div>
      </div>
    </div>
       
        
        
    );
};

export default AddProject;