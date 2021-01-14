import { Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import { Link } from 'react-router-dom';
import Category from '../Category/Category';



const useStyles = makeStyles({
    root: {
        padding: "100px 0 0",
        width: "100%"

    },
    intro: {
        fontSize: "60px",
        fontWeight: "500",
        textAlign: "center",
        lineHeight: "72px"
    },
    image: {
        width: "90%",

    },
    imageRight: {
        width: "80%",
        float: "right"
    }


})



const HeaderMain = () => {


    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item md={3}>
                    
                    <img className={`${classes.image} left-image`} src="https://i1.wp.com/jetfuelmeals.com/wp-content/uploads/2020/08/food-header-left-cut.png?fit=437%2C608&ssl=1" alt=""/>
                </Grid>
                <Grid xs={12} sm={8} item md={6}>
                    <Box style={{textAlign: "center"}}>
                        <h1 className={classes.intro}><span className={`highlighter`}>Eating Healthy</span> <br/> Has Never <br/> Been So Easy</h1>
                        <p style={{textAlign: "center", fontSize: "18px", marginBottom: "45px"}}>Jet Fuel Meals is a healthy food delivery service. We offer fresh, high-quality, and all-natural meals that are healthy, delicious and delivered to you!</p>
                        <Link className="mainButton" to="/subscribe">Sign up today</Link>
                    </Box>
                </Grid>
                <Grid sm={4} item md={3}>
                    <img className={`${classes.imageRight} right-image`} src="https://i2.wp.com/jetfuelmeals.com/wp-content/uploads/2020/08/food-header-right-cut.png?fit=430%2C710&ssl=1" alt=""/>
                </Grid>
                
            </Grid>
        </div>
    );
};

export default HeaderMain;