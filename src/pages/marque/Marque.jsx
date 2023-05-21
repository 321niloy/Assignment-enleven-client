import React from 'react';
import Marquee from "react-fast-marquee";

const Marque = () => {
    return (
       <div className='font-extrabold text-lg' data-aos="fade-down"
       data-aos-easing="linear"
       data-aos-duration="1500">
         <Marquee>
        80% Discount for this Month
      </Marquee>
       </div>
    );
};

export default Marque;