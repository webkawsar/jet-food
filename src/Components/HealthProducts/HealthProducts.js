import { Box } from '@material-ui/core';
import { useEffect, useState } from 'react';
import Products from '../Products/Products';






const HealthProducts = () => {
    const [products, setProducts] = useState([]);

    
    useEffect(() => {

        fetch("http://localhost:5000/api/v1/products")
        .then(response => response.json())
        .then(result => setProducts(result))
        .catch(error => console.log(error))

    }, [])

    return (
        <Box>
            <Products heading="Other Products" allProducts={products} />
        </Box>
    );
};

export default HealthProducts;