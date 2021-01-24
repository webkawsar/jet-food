import { Box } from '@material-ui/core';
import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import Products from '../../Components/Products/Products';
import SingleProductDetails from '../../Components/SingleProductDetails/SingleProductDetails';
import Support from '../../Components/Support/Support';




const ProductDetails = () => {


    return (
        <Box>
            <Header />
            <SingleProductDetails />
            <Box style={{marginTop: "150px"}}>
                <Products heading={"Read About Our Other Plans"} />
            </Box>
            <Support />
            <Footer />
        </Box>
    );
};

export default ProductDetails;