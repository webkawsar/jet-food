import React, { useEffect, useState } from 'react';
import DeliverySystem from '../../Components/DeliverySystem/DeliverySystem';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import HeaderMain from '../../Components/HeaderMain/HeaderMain';
import InfoSubscription from '../../Components/InfoSubscription/InfoSubscription';
import OurCredential from '../../Components/OurCredential/OurCredential';
import Products from '../../Components/Products/Products';
import Review from '../../Components/Review/Review';
import Support from '../../Components/Support/Support';





const Home = () => {
    const [products, setProducts] = useState([]);

    
    useEffect(() => {

        fetch("http://localhost:5000/api/v1/products")
        .then(response => response.json())
        .then(result => setProducts(result))
        .catch(error => console.log(error))
        
    }, [])
    

    return (
        <div>

            <Header />
            <HeaderMain />
            <Products heading={"Our Meal Plans"} allProducts={products}  />
            <OurCredential />
            <DeliverySystem />
            <Review />
            <InfoSubscription />
            <Support />
            <Footer />


            
        </div>
    );
};

export default Home;