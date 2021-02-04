import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';




const useStyles = makeStyles({
  root: {
    padding: "50px 0"
  },
  media: {
    height: 180,
  },



  });

const Products = ({heading, allProducts}) => {
    const [products, setProducts] = useState(allProducts);


    const classes = useStyles();
    return (

        <Container className={classes.root}>
            <h1 style={{textAlign: "center"}}> { heading } </h1>
            <Grid container spacing={4}>

                {
                    products.map(product => <SingleProduct key={product.id} product={product} />)
                }

            </Grid>
        </Container>
        
    );
};

export default Products;