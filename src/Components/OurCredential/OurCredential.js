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
                    <Box>
                        <h1 style={{textAlign: "center"}}>Why <span className="highlighter">everyone loves</span> <br/> our?</h1>
                        <Grid container spacing={4}>
                            <Grid item md={4}>
                                <Box>
                                    <Box>
                                        <img className={classes.image} src="https://i2.wp.com/jetfuelmeals.com/wp-content/uploads/2020/08/microwaveable-icon.png?fit=144%2C88&ssl=1" alt=""/>
                                    </Box>
                                    <Box>
                                        <h3 style={{textAlign: "center"}}>5 Star Chefs</h3>
                                        <p style={{textAlign: "center"}}>Enjoy fresh delivered meals specially crafted by our 5-star chefs with over 30 years of experience. Our meal plans change every week and every month, so say goodbye to your boring old meal plan!</p>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={4}>
                                <Box>
                                    <Box>
                                        <img className={classes.image} src="https://i2.wp.com/jetfuelmeals.com/wp-content/uploads/2020/08/microwaveable-icon.png?fit=144%2C88&ssl=1" alt=""/>
                                    </Box>
                                    <Box>
                                        <h3 style={{textAlign: "center"}}>5 Star Chefs</h3>
                                        <p style={{textAlign: "center"}}>Enjoy fresh delivered meals specially crafted by our 5-star chefs with over 30 years of experience. Our meal plans change every week and every month, so say goodbye to your boring old meal plan!</p>
                                    </Box>
                                </Box>
                            </Grid>
                            <Grid item md={4}>
                                <Box>
                                    <Box>
                                        <img className={classes.image} src="https://i2.wp.com/jetfuelmeals.com/wp-content/uploads/2020/08/microwaveable-icon.png?fit=144%2C88&ssl=1" alt=""/>
                                    </Box>
                                    <Box>
                                        <h3 style={{textAlign: "center"}}>5 Star Chefs</h3>
                                        <p style={{textAlign: "center"}}>Enjoy fresh delivered meals specially crafted by our 5-star chefs with over 30 years of experience. Our meal plans change every week and every month, so say goodbye to your boring old meal plan!</p>
                                    </Box>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                    <Box style={{textAlign: "center"}}>
                        <Link to="/subscribe" className="mainButton">Get Started Now</Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default OurCredential;