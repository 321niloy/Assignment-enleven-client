import React from 'react';
import o1 from '../../../public/images/daraz.png'
import o2 from '../../../public/images/panda.jpg'
import o3 from '../../../public/images/rokomari.png'
import o4 from '../../../public/images/togumogu.png'

const OnlinePartner = () => {
    return (
        <div className='mt-3 mb-3'>
            <div className='font-extrabold text-center text-red-500 text-2xl lg:text-3xl'><h1>ONLINE PARTNERS</h1></div>
            <div className='grid grid-cols-2 mx-auto place-items-center gap-4'>
                <div className='lg:w-64 w-16'><img src={o1} alt="" /></div>
                <div className='lg:w-64 w-16'><img src={o2} alt="" /></div>
                <div className='lg:w-64 w-16'><img src={o3} alt="" /></div>
                <div className='lg:w-64 w-16'><img src={o4} alt="" /></div>
            </div>
            
        </div>
    );
};

export default OnlinePartner;