import React from 'react';
import CartHeader from '../../Components/CartHeader/CartHeader';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Subscribe from '../../Components/Subscribe/Subscribe';
import Support from '../../Components/Support/Support';




const MainSubscribe = () => {
    return (
        <div>
            <Header />
            <CartHeader />
            <Subscribe />
            <Support />
            <Footer />
        </div>
    );
};

export default MainSubscribe;