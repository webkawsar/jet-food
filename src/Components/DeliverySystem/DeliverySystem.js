import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';



const useStyles = makeStyles({
    root: {
        padding: "100px 0"
    },
    image: {
        width: "70%",
        display: "block",
        margin: "0 auto"
    }




})

const DeliverySystem = () => {


    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Container>
                <Grid container>
                    <Grid item md={4}>
                        <Box style={{textAlign: "center"}}>
                            <h1 className="highlighter">Florida’s Leading Meal Delivery Company!</h1>
                            <p>Say goodbye to frozen meals and say hello to fresh meals delivered to your doorstep,</p>
                            <Link to="/subscribe" className="mainButton">Let's Get Started</Link>
                        </Box>
                    </Grid>
                    <Grid item md={8}>
                        <Box>
                            <img className={classes.image} src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/nutraingredients-usa.com/article/2020/04/15/new-delivery-services-pop-up-amid-social-distancing-era/10914556-1-eng-GB/New-delivery-services-pop-up-amid-social-distancing-era_wrbm_large.jpg" alt=""/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default DeliverySystem;