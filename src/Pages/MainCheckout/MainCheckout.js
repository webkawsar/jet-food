import React from 'react';
import CartHeader from '../../Components/CartHeader/CartHeader';
import ContactInfo from '../../Components/ContactInfo/ContactInfo';
import Header from '../../Components/Header/Header';



const MainCheckout = () => {
    return (
        <div>
            <Header />
            <CartHeader />
            <ContactInfo />
        </div>
    );
};

export default MainCheckout;