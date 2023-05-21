import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { Authcontext } from '../../Provider/Authprovider';
import useTitle from '../../usetitle/Usetitle';



const Signin = () => {
  useTitle('signin')
  const {createuser,googlesignin} = useContext(Authcontext)
  const [error,seterror] = useState('')
  const [suc,setsuc] = useState('')

  const handlesignIn =event =>{
    event.preventDefault()
    const form = event.target
    const name = form.name.value
    const email = form.email.value
    const password = form.password.value
    const Photo =form.photo.value
    console.log(name,email,password,Photo)

    createuser(email,password)
    .then(result => {
      const Createuser = result.user;
      console.log(Createuser)
      setsuc('Signup successfull')
      form.reset()
    })
    .catch(error =>{
      console.log(error)
      seterror(error.massage)
    })
  
  }
  const handlegoogleSignin = () =>{
  googlesignin()
  
  .then((result) => {
    const loguser = result.user;
    console.log(loguser)
    navigate(from,{replace:true})
  })
  .catch((error) => {
    console.log("ERROR",error)
  })

  }

    return (
        <div className="min-h-screen py-40" > 
        <div className="container mx-auto"  data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
          <div className="flex flex-col lg:flex-row w-10/12 lg:w-8/12 bg-white rounded-xl mx-auto shadow-lg overflow-hidden">
            <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-12 bg-no-repeat bg-cover bg-center" style={{ backgroundImage:"radial-gradient(circle at 10% 20%, rgb(246, 187, 187) 0%, rgb(249, 219, 217) 90%)" }}>
              <h1 className="text-slate-700 text-3xl mb-3">Welcome</h1>
              <div>
                <p className="text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="text-pink-600 font-semibold">Learn more</a></p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 py-16 px-12">
              <h2 className="text-3xl mb-4 font-extrabold ">SignUp Now</h2>
              <p className="mb-4">
                Create your account. It’s free and only takes a minute
              </p>
              <form onSubmit={handlesignIn}>
                <div >
                  <input type="text" placeholder="Name" name='name' className="border rounded-lg border-gray-400 py-1 px-2" required/>
                </div>
                <div className="mt-5">
                  <input type="text" placeholder="Email" name='email' className="border rounded-lg border-gray-400 py-1 px-2 w-full" required/>
                </div>
                <div className="mt-5">
                  <input type="password" name='password' placeholder="Password" className="border rounded-lg border-gray-400 py-1 px-2 w-full" required/>
                </div>

                <div className="mt-5">
                  <input type="text" name='photo' placeholder="Photo url" className="border rounded-lg border-gray-400 py-1 px-2 w-full" />
                </div>
                
                <p className='mt-3'>If you have  Account ? <Link className='text-pink-700' to='/login'>Login</Link></p>
                <p className='text-red-700'>{error}</p>
                <p className='text-green-700'>{suc}</p>
                <div className="mt-5">
                  <input className="w-full border-pink-600 rounded-lg bg-pink-300 py-3 text-center text-white" type="submit" value="SignUp Now" />
                  
                </div>
                 {/*  */}

                 <button onClick={handlegoogleSignin} className='mt-3 border-rose-400 p-4 rounded'><FaGoogle className='border-rose-400 m-4 rounded'/></button>
              {/*  */}
            
              </form>
            </div>
          </div>
        </div>
      </div>
         
          
    );
};

export default Signin;