import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Banner2 from '../Banner2/Banner2';
import BannerCard from '../BannerCard/BannerCard';
import Products from '../Products/Products';
import ReviewMessage from '../ReviewMessage/ReviewMessage';


const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner/>
            <Banner2/>
            <BannerCard/>
            <Products/>
            <ReviewMessage/>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;