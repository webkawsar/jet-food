import { Box } from '@material-ui/core';
import { useState } from 'react';
import Products from '../Products/Products';




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


const HealthProducts = () => {
    const [products, setProducts] = useState(pd);
    

    return (
        <Box>
            <Products heading="Other Products" allProducts={products} />
        </Box>
    );
};

export default HealthProducts;