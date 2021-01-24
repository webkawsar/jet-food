import React from 'react';
import CartHeader from '../../Components/CartHeader/CartHeader';
import ContactInfo from '../../Components/ContactInfo/ContactInfo';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Support from '../../Components/Support/Support';



const MainCheckout = () => {
    return (
        <div>
            <Header />
            <CartHeader />
            <ContactInfo />
            <Support />
            <Footer />
        </div>
    );
};

export default MainCheckout;