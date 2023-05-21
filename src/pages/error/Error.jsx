import React from 'react';
import error from '../../../public/images/error.png'
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <>
        <Link className="btn btn-block" to='/'>Back to Home</Link>
        <div className='w-fit  lg:w-full h-fit'>
            <img  src={error} alt="" />
        </div>
        </>
    );
};

export default Error;
