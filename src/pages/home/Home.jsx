import React from 'react';
import Banner from '../banner/Banner';
import Gallery from '../gallery/Gallery';
import Tabit from '../tabin/Tabit';
import Marque from '../marque/Marque';
import OnlinePartner from '../online/OnlinePartner';
import Contact from '../contact/Contact';



const Home = () => {
    return (
        <div>
            <Marque></Marque>
            <Banner></Banner>
            <Gallery></Gallery>
            <Tabit></Tabit>
            <Contact></Contact>
            <OnlinePartner></OnlinePartner>
        </div>
    );
};

export default Home;