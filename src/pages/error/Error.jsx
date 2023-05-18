import React from 'react';
import error from '../../../public/images/error.png'

const Error = () => {
    return (
        <div >
            <img className='w-fit  lg:w-full h-fit' src={error} alt="" />
        </div>
    );
};

export default Error;