import React from 'react';
import Category from '../../Components/Category/Category';
import DeliverySystem from '../../Components/DeliverySystem/DeliverySystem';
import Header from '../../Components/Header/Header';
import HeaderMain from '../../Components/HeaderMain/HeaderMain';
import InfoSubscription from '../../Components/InfoSubscription/InfoSubscription';
import OurCredential from '../../Components/OurCredential/OurCredential';
import Review from '../../Components/Review/Review';



const Home = () => {

    return (
        <div>
            <Header />
            <HeaderMain />
            <Category heading={"Our Meal Plans"} />
            <OurCredential />
            <DeliverySystem />
            <Review />
            <InfoSubscription />
            
        </div>
    );
};

export default Home;