import { Box, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


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

const useStyles = makeStyles({
    root: {
        overflow: "hidden",
    },
    intro: {
        backgroundImage: "url('https://jetfuelmeals.com/wp-content/uploads/2019/07/juice-bg.jpg')",
        minHeight: "520px",
        backgroundSize: "cover",
    },
    paper: {
        padding: "30px",
        border: "3px solid black"
    },
    content: {
        
    }



})


const SingleHealthProductDetails = () => {
    const { id } = useParams();
    const [ healthProdDetails, setHealthProdDetails ] = useState([]);

    useEffect(() => {

        // fetch("/products")
        // .then(response => response.json())
        // .then(result => setHealthProdDetails(result))
        // .catch(error => console.log(error))


    }, [])




    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <Box className={classes.intro}></Box>
            <Box className={classes.content}>
                <Grid container alignItems="flex-end">
                    <Grid item md={6}>
                        <img src="https://jetfuelmeals.com/wp-content/uploads/2019/07/3-juices.png" alt=""/>
                    </Grid>
                    <Grid item md={6}>
                        <Paper className={classes.paper}>
                            <Box>
                                <h2>Cold Press Juices Miami</h2>
                                <p>Our juice is organic, natural, cold-pressed and raw (unpasteurized).Our blends taste incredible and contain 3-5 times the nourishing vitamins, minerals, and amino acids when compared to other extraction methods.</p>
                                <h2>Metabolic Lemonade:</h2>
                                <p>Helps Boost Metabolism and Reduces Inflammation Ingredients: Lemon, Cayenne Pepper, Coconut Palm Nectar and Filtrated Water</p>
                                <h2>Metabolic Lemonade:</h2>
                                <p>Helps Boost Metabolism and Reduces Inflammation Ingredients: Lemon, Cayenne Pepper, Coconut Palm Nectar and Filtrated Water</p>
                                <h2>Metabolic Lemonade:</h2>
                                <p>Helps Boost Metabolism and Reduces Inflammation Ingredients: Lemon, Cayenne Pepper, Coconut Palm Nectar and Filtrated Water</p>
                                <h2>Metabolic Lemonade:</h2>
                                <p>Helps Boost Metabolism and Reduces Inflammation Ingredients: Lemon, Cayenne Pepper, Coconut Palm Nectar and Filtrated Water</p>

                                <h1>We Serve Top Cold Pressed Juices in Miami</h1>
                            </Box>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
};

export default SingleHealthProductDetails;