import { Box } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Products from '../../Components/Products/Products';
import SingleProductDetails from '../../Components/SingleProductDetails/SingleProductDetails';
import Support from '../../Components/Support/Support';




const ProductDetails = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {

		axios.get("/products")
		.then(response => {
			setProducts(response.data)
		})
		.catch(error => console.log(error))



    }, [])

    return (
        <Box>
            <Header />
            <SingleProductDetails />
            <Box style={{marginTop: "150px"}}>
                <Products heading={"Read About Our Other Plans"} allProducts={products} />
            </Box>
            <Support />
            <Footer />
        </Box>
    );
};

export default ProductDetails;