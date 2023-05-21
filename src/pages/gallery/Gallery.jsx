import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./gallery.css"

 
import g1 from '../../../public/images/g4.webp'
import g2 from '../../../public/images/g2.jpg'
import g3 from '../../../public/images/g3.jpg'
import g4 from '../../../public/images/g4.jpg'
import g5 from '../../../public/images/g5.jpg'
import g6 from '../../../public/images/g6.webp'
import g7 from '../../../public/images/g7.webp'
import g8 from '../../../public/images/g8.webp'
import g9 from '../../../public/images/toy.jpg'
import g10 from '../../../public/images/four.webp'
import LazyLoad from 'react-lazyload';




const Gallery = () => {
    return (
        <>
 <div class="container" >
    <div class="heading" data-aos="flip-left">
      <h3>Toy <span >Gallery</span></h3>
    </div>
    <div class="box">
      
      <div class="dream" data-aos="zoom-in"
       data-aos-easing="linear"
       data-aos-duration="3000"
      >
         <LazyLoad><img src={g1} /></LazyLoad>
         <LazyLoad> <img src={g2} /></LazyLoad>
         <LazyLoad> <img src={g3} /></LazyLoad>
         <LazyLoad>   <img src={g4} /></LazyLoad>
         <LazyLoad> <img src={g5} /></LazyLoad>
        
         
      
        
            
      </div>

        <div class="dream" data-aos="zoom-out-up"
         data-aos-easing="linear"
         data-aos-duration="3000"
        >
          <LazyLoad><img src={g6}/></LazyLoad>
          <LazyLoad><img src={g7}/></LazyLoad>
          <LazyLoad><img src={g8}/></LazyLoad>
          <LazyLoad><img src={g9}/></LazyLoad>
          <LazyLoad><img src={g10}/></LazyLoad> 
      </div>

        <div class="dream" data-aos="zoom-in-right"
         data-aos-easing="linear"
         data-aos-duration="3000"
        >
          <LazyLoad><img src={g2}/></LazyLoad>
          <LazyLoad><img src={g4}/></LazyLoad>
          <LazyLoad><img src={g1}/></LazyLoad>
          <LazyLoad><img src={g3}/></LazyLoad>
          <LazyLoad><img src={g6}/></LazyLoad>
      </div>




    </div>
    <div class="btn" data-aos="zoom-in">
      <a href="#">More</a>
    </div>





  </div>


        </>
        
    );
};

export default Gallery;