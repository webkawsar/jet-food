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
                            <img className={classes.image} src="http://themes.semicolonweb.com/html/canvas/demos/burger/images/svg/delivery.svg" alt=""/>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default DeliverySystem;