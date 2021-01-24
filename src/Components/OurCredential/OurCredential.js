import { Box, Container, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';


const useStyles = makeStyles({
    root: {
        padding: "100px 0", 
        backgroundColor: "#FFF6F4"
    },
    image: {
        width: "120px",
        height: "100px",
        display: "block",
        margin: "0 auto"
    }




})


const OurCredential = () => {


    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Container>
                <Box>
                    <h1 style={{textAlign: "center"}}>Why <span className="highlighter">everyone loves</span> <br/> our?</h1>
                    <Box>
                        
                        <Grid container spacing={5}>
                            <Grid item md={4}>
                                <Box>
                                    <Box style={{marginBottom: "30px"}}>
                                        <img className={classes.image} src="https://i2.wp.com/jetfuelmeals.com/wp-content/uploads/2020/08/microwaveable-icon.png?fit=144%2C88&ssl=1" alt=""/>
                                    </Box>
                                    <Box>
                                        <h3 style={{textAlign: "center"}}>Microwaveable containers</h3>
                                        <p style={{textAlign: "center"}}>Enjoy fresh delivered meals specially crafted by our 5-star chefs with over 30 years of experience. Our meal plans change every week and every month, so say goodbye to your boring old meal plan!</p>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={4}>
                                <Box>
                                    <Box style={{marginBottom: "30px"}}>
                                        <img className={classes.image} src="https://i1.wp.com/jetfuelmeals.com/wp-content/uploads/2020/08/antibiotic-icon.png?w=104&ssl=1" alt=""/>
                                    </Box>
                                    <Box>
                                        <h3 style={{textAlign: "center"}}>Antibiotic-free poultry</h3>
                                        <p style={{textAlign: "center"}}>Enjoy fresh delivered meals specially crafted by our 5-star chefs with over 30 years of experience. Our meal plans change every week and every month, so say goodbye to your boring old meal plan!</p>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={4}>
                                <Box>
                                    <Box style={{marginBottom: "30px"}}>
                                        <img className={classes.image} src="https://i2.wp.com/jetfuelmeals.com/wp-content/uploads/2020/08/microwaveable-icon.png?fit=144%2C88&ssl=1" alt=""/>
                                    </Box>
                                    <Box>
                                        <h3 style={{textAlign: "center"}}>Microwaveable containers</h3>
                                        <p style={{textAlign: "center"}}>Enjoy fresh delivered meals specially crafted by our 5-star chefs with over 30 years of experience. Our meal plans change every week and every month, so say goodbye to your boring old meal plan!</p>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={4}>
                                <Box>
                                    <Box style={{marginBottom: "30px"}}>
                                        <img className={classes.image} src="https://i2.wp.com/jetfuelmeals.com/wp-content/uploads/2020/08/fresh-meal-icon.png?fit=130%2C102&ssl=1" alt=""/>
                                    </Box>
                                    <Box>
                                        <h3 style={{textAlign: "center"}}>Fresh meal plan delivery</h3>
                                        <p style={{textAlign: "center"}}>Enjoy fresh delivered meals specially crafted by our 5-star chefs with over 30 years of experience. Our meal plans change every week and every month, so say goodbye to your boring old meal plan!</p>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={4}>
                                <Box>
                                    <Box style={{marginBottom: "30px"}}>
                                        <img className={classes.image} src="https://i2.wp.com/jetfuelmeals.com/wp-content/uploads/2020/08/fresh-meal-icon.png?fit=130%2C102&ssl=1" alt=""/>
                                    </Box>
                                    <Box>
                                        <h3 style={{textAlign: "center"}}>Fresh meal plan delivery</h3>
                                        <p style={{textAlign: "center"}}>Enjoy fresh delivered meals specially crafted by our 5-star chefs with over 30 years of experience. Our meal plans change every week and every month, so say goodbye to your boring old meal plan!</p>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={4}>
                                <Box>
                                    <Box style={{marginBottom: "30px"}}>
                                        <img className={classes.image} src="https://i2.wp.com/jetfuelmeals.com/wp-content/uploads/2020/08/fresh-meal-icon.png?fit=130%2C102&ssl=1" alt=""/>
                                    </Box>
                                    <Box>
                                        <h3 style={{textAlign: "center"}}>Fresh meal plan delivery</h3>
                                        <p style={{textAlign: "center"}}>Enjoy fresh delivered meals specially crafted by our 5-star chefs with over 30 years of experience. Our meal plans change every week and every month, so say goodbye to your boring old meal plan!</p>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box style={{textAlign: "center", marginTop: "30px"}}>
                        <Link to="/subscribe" className="mainButton">Get Started Now</Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default OurCredential;