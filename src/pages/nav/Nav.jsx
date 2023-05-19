import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import toy from '../../../public/images/toy.jpg';
import Active from '../../../public/images/active.jpg';
import './nav.css';
import ActiveLink from '../active/ActiveLink';
import Tippy from '@tippyjs/react';
import { Authcontext } from '../../Provider/Authprovider';

const Nav = () => {
  const {user,logout} = useContext(Authcontext)
  console.log(user)

  const handlelogout =() =>{
    logout()
    .then()
        .catch(error => console.log(error))

  }
  return (
    <div>
      <div className="  bg-base-100">
        <div className="lg:flex-1 flex  justify-center  items-center mb-4">
          <img className="w-11" src={toy} alt="" />
          <Link to="/" className="font-extrabold text-xl">ToyBangla</Link>
        </div>
        <div className="flex  ">
          <ul className="menu lg:menu-horizontal px-1   mx-auto">
            <li className="m-3"><ActiveLink>Home</ActiveLink></li>
            <li className="m-3 sm:block"><ActiveLink>All Toys</ActiveLink></li>
            <li className="m-3 sm:block"><ActiveLink>My Toys</ActiveLink></li>
            <li className="m-3 sm:block"><ActiveLink>Add a Toy</ActiveLink></li>
            <li className="m-3 sm:block"><ActiveLink to='/blog'>Blogs</ActiveLink></li>

            <Tippy content={<span className="bg-pink-500 p-3 text-white rounded-lg">{user?.email}</span>}>
              <div className="avatar online">
                <div className="w-16 mask mask-hexagon">
                  <img src={Active} alt="Active" />
                </div>
              </div>
            </Tippy>

            {
              user?<li className="m-3"><ActiveLink><button onClick={handlelogout}>LogOut</button></ActiveLink></li>:<li className="m-3"><ActiveLink to='/login'>Login</ActiveLink></li>
            }
            {
              user? '' : <li className="m-3"><ActiveLink to="/signin">Signin</ActiveLink></li>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
