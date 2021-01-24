import React from 'react';
import Cart from '../../Components/Cart/Cart';
import CartHeader from '../../Components/CartHeader/CartHeader';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Support from '../../Components/Support/Support';




const MainCart = () => {

    return (
        <>
            <Header />
            <CartHeader />
            <Cart />
            <Support />
            <Footer />
        </>
    );
};

export default MainCart;