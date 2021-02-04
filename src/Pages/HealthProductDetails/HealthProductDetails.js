import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Products from '../../Components/Products/Products';
import SingleHealthProductDetails from '../../Components/SingleHealthProductDetails/SingleHealthProductDetails';
import Support from '../../Components/Support/Support';




const pd = [
    {
        id: 101,
        name: "Product-1",
        img: "https://i1.wp.com/jetfuelmeals.com/wp-content/uploads/2020/04/wellness-shot-trans-backgorund.png?w=339&ssl=1",
    },
    {
        id: 102,
        name: "Product-2",
        img: "https://i1.wp.com/jetfuelmeals.com/wp-content/uploads/2020/04/immunity-shot-trans-background.png?w=318&ssl=1"
    },
]




const HealthProductDetails = () => {
    const [products, setProducts] = useState(pd);


    return (
        <div>
            <Header />
            <SingleHealthProductDetails />
            <Products heading={"Other Products"} allProducts={products}  />
            <Support />
            <Footer />
        </div>
    );
};

export default HealthProductDetails;