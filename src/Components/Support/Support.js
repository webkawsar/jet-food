import { Box, Container, Grid } from '@material-ui/core';
import React from 'react';




const Support = () => {

    return (
        <Box style={{backgroundColor: "#FF4C24", color: "white", padding: "50px 0", marginTop: "50px"}}>
            <Container>
                <Grid container alignItems="center" spacing={2}>
                    <Grid item xs={12} sm={12} md={4}>
                        <h3 style={{margin: "0", color: "white", textAlign: "center"}}>Call Our Support Team Now!</h3>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <p style={{margin: "0", textAlign: "center"}}>Monday - Friday 5:00 AM - 7:00 PM</p>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <h1 style={{margin: "0", color: "white", fontWeight: "normal", textAlign: "center"}}>(954)945-9484</h1>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Support;