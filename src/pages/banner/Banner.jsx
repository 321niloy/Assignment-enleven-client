import React from 'react';
import one from '../../../public/images/one.jpg'
import two from '../../../public/images/two.jpg'
import three from '../../../public/images/three.jpg'
import four from '../../../public/images/four.webp'

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full">
  <div id="item1" className="carousel-item w-full">
    <img  src={one} className="w-full h-96" />
  </div> 
  <div id="item2" className="carousel-item w-full h-96">
    <img src={three} className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full h-96">
    <img src={two} className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full h-96">
    <img src={four} className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>
    );
};

export default Banner;