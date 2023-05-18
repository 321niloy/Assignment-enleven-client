import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Signin = () => {
    return (
        <div className="min-h-screen py-40" > 
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage:"radial-gradient(circle at 10% 20%, rgb(246, 187, 187) 0%, rgb(249, 219, 217) 90%)" }}>
              <h1 className="text-white text-3xl mb-3">Welcome</h1>
              <div>
                <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="text-pink-600 font-semibold">Learn more</a></p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4 font-extrabold ">Signin Now</h2>
              <p className="mb-4">
                Create your account. It’s free and only takes a minute
              </p>
              <form action="#">
                <div >
                  <input type="text" placeholder="Name" name='name' className="border rounded-lg border-gray-400 py-1 px-2" />
                </div>
                <div className="mt-5">
                  <input type="text" placeholder="Email" name='email' className="border rounded-lg border-gray-400 py-1 px-2 w-full" />
                </div>
                <div className="mt-5">
                  <input type="password" name='password' placeholder="Password" className="border rounded-lg border-gray-400 py-1 px-2 w-full" />
                </div>

                <div className="mt-5">
                  <input type="text" name='photo' placeholder="Photo url" className="border rounded-lg border-gray-400 py-1 px-2 w-full" />
                </div>
                
                <p className='mt-3'>If you have  Account ? <Link className='text-pink-700' to='/login'>Login</Link></p>
                
                <div className="mt-5">
                  <button className="w-full border-pink-600 rounded-lg bg-pink-300 py-3 text-center text-white">Signin Now</button>
                </div>
                 {/*  */}

               <button className="mt-3 btn btn-circle btn-warning btn-outline">
  <FaGoogle/>
</button>
              {/*  */}
            
              </form>
            </div>
          </div>
        </div>
      </div>
         
          
    );
};

export default Signin;