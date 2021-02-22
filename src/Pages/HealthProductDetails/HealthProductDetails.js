import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Products from '../../Components/Products/Products';
import SingleHealthProductDetails from '../../Components/SingleHealthProductDetails/SingleHealthProductDetails';
import Support from '../../Components/Support/Support';







const HealthProductDetails = () => {
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
            <SingleHealthProductDetails />
            <Products heading={"Other Products"} allProducts={products}  />
            <Support />
            <Footer />
        </div>
    );
};

export default HealthProductDetails;