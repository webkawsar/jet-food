import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import HealthProducts from '../../Components/HealthProducts/HealthProducts';
import Support from '../../Components/Support/Support';




const HealthShots = () => {
    return (
        <div>
            <Header />
            <HealthProducts />
            <Support />
            <Footer />
        </div>
    );
};

export default HealthShots;