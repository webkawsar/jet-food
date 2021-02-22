import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeliverySystem from '../../Components/DeliverySystem/DeliverySystem';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import InfoSubscription from '../../Components/InfoSubscription/InfoSubscription';
import OurCredential from '../../Components/OurCredential/OurCredential';
import Profile from '../../Components/Profile/Profile';
import Review from '../../Components/Review/Review';
import Support from '../../Components/Support/Support';




const MyProfile = () => {
    const [products, setProducts] = useState([]);

    
    useEffect(() => {

		axios.get("/products")
		.then(response => {
			setProducts(response.data)
		})
		.catch(error => console.log(error))

        
    }, [])
    


    return (
        <div>
            <Header />
            <Profile />
            <OurCredential />
            <DeliverySystem />
            <Review />
            <InfoSubscription />
            <Support />
            <Footer />
        </div>
    );
};

export default MyProfile;