import React from 'react';
import { Link} from 'react-router-dom';
import toy from '../../../public/images/toy.jpg'
import Active from '../../../public/images/active.jpg'
import './nav.css'
import ActiveLink from '../active/ActiveLink';


const Nav = () => {
 
     
    return (
        <div>
            <div className="navbar bg-base-100">
  <div className="flex-1">
    <img className='w-11' src={toy} alt="" />
    <Link to="/" className="font-extrabold text-xl">ToyBangla</Link>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1 ">
      <li className='m-3'><ActiveLink>Home     </ActiveLink></li>
      <li className='m-3'><ActiveLink>All Toys </ActiveLink></li>
      <li className='m-3'><ActiveLink>My Toys  </ActiveLink></li>
      <li className='m-3'><ActiveLink>Add a Toy</ActiveLink></li>
      <li className='m-3'><ActiveLink to='/blog'>Blogs    </ActiveLink></li>

      <div className="avatar online">
  <div className="w-16 mask mask-hexagon">
    <img  src={Active} />
  </div>
  </div>

  <li className='m-3'> <ActiveLink> Login   </ActiveLink></li>
  <li className='m-3'> <ActiveLink> Signin  </ActiveLink></li>
      
    </ul>
   
  </div>
</div>
        </div>
    );
};

export default Nav;