import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import m1 from '../../../public/images/MATH1.webp'
import m2 from '../../../public/images/math2.jpg'
import l1 from '../../../public/images/la1.jpeg'
import l2 from '../../../public/images/la2.webp'
import e1 from '../../../public/images/En1.jpg'
import e2 from '../../../public/images/e2.jpg'
import s1 from '../../../public/images/sc1.webp'
import s2 from '../../../public/images/Sc2.jpg'

const Tabit = () => {
    const [selectedTab, setSelectedTab] = useState(0);

  const handleTabSelect = (index) => {
    setSelectedTab(index);
  };


    return (
       <>
       <div className='text-center  text-xl pt-3 pb-3 bg-red-300 font-extrabold rounded-lg'>
        <p>Category</p>
       </div>
        <div className='mt-5 mb-5 rounded-lg'>
      <Tabs className="bg-white-400 rounded-lg" selectedIndex={selectedTab} onSelect={handleTabSelect}>
        <TabList className="bg-red-400 font-extrabold rounded-lg text-sm lg:text-lg">
          <Tab>Math Toys</Tab>
          <Tab >Language Toys</Tab>
          <Tab >Engineering Toys</Tab>
          <Tab >Science Toys</Tab>
        </TabList>
        <div className='bg-red-300 pt-5 mt-3 pb-5 rounded-xl'>
        <TabPanel className="mt-5 ml-5">
        <div className='lg:flex gap-6'>
            
            <div>
            <div className="card lg:w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 h-80">
    <img src={m1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Math collector</h2>
    <p>price: 599tk</p>
      {/*  */}
      <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
    {/*  */}
    <div className="card-actions">
      <button className="btn btn-primary">View Detils</button>
    </div>
  </div>
</div>

            </div>
<div>
<div className="card lg:w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 h-80">
    <img src={m2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Calculators bank</h2>
    <p>price: 999tk</p>
      {/*  */}
      <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
    {/*  */}
    <div className="card-actions">
      <button className="btn btn-primary">View Detils</button>
    </div>
  </div>
</div>

</div>



        </div>
        </TabPanel>
        
        <TabPanel className="mt-5 ml-5 mb-5">
          {/* Render Language Toys sub-category content */}
          <div className='lg:flex gap-6'>
            {/*  */}
            <div>
            <div className="card lg:w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 h-80">
    <img src={l1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Table Book</h2>
    <p>price: 1000tk</p>
      {/*  */}
      <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
    {/*  */}
    <div className="card-actions">
      <button className="btn btn-primary">View details</button>
    </div>
  </div>
</div>

            </div>
            {/*  */}
            <div>
            <div className="card lg:w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 h-80">
    <img src={l2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Letter listenr</h2>
    <p>price: 500tk</p>
      {/*  */}
      <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
    {/*  */}
    <div className="card-actions">
      <button className="btn btn-primary">View details</button>
    </div>
  </div>
</div>

            </div>
         </div>
        </TabPanel>
        
        <TabPanel className="mt-5 ml-5 mb-5">
          {/* Render Engineering Toys sub-category content */}
          <div className='lg:flex gap-6'>
            {/*  */}
            <div>
            <div className="card lg:w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 h-80">
    <img src={e1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Small train</h2>
    <p>price: 399tk</p>
      {/*  */}
      <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
    {/*  */}
    <div className="card-actions">
      <button className="btn btn-primary">View Detils</button>
    </div>
  </div>
</div>

            </div>
            {/*  */}
            <div>
            <div className="card lg:w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 h-80">
    <img src={e2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Big train</h2>
    <p>price: 750tk</p>
      {/*  */}
      <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
    {/*  */}
    <div className="card-actions">
      <button className="btn btn-primary">View details</button>
    </div>
  </div>
</div>

            </div>
         </div>
        </TabPanel>
        
        <TabPanel className="mt-5 ml-5 mb-5">
          {/* Render Science Toys sub-category content */}
          <div className='lg:flex gap-6'>
            {/*  */}
            <div>
            <div className="card lg:w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 h-80">
    <img src={s1} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Tethiscope</h2>
    <p>price: 1600tk</p>
      {/*  */}
      <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
    {/*  */}
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>

            </div>
            {/*  */}
            <div>
            <div className="card lg:w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10 h-80">
    <img src={s2} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Megnefying glass</h2>
    <p>price: 360tk</p>
     {/*  */}
      <div className="rating rating-sm">
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-6" className="mask mask-star-2 bg-orange-400" />
</div>
    {/*  */}
    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>

            </div>
         </div>
        </TabPanel>

        </div>
        
      </Tabs>
    </div>
       </>
    );
};

export default Tabit;