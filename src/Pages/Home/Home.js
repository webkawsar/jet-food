import React from 'react';
import DeliverySystem from '../../Components/DeliverySystem/DeliverySystem';
import Footer from '../../Components/Footer/Footer';
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
            <OurCredential />
            <DeliverySystem />
            <Review />
            <InfoSubscription />
            {/* <Footer /> */}
        </div>
    );
};

export default Home;