import { faAtom, faBiohazard, faBurn, faPlus, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../FakeData/FakeData';



const useStyles = makeStyles({
    root: {
        backgroundImage: "url('https://jetfuelmeals.com/wp-content/uploads/2019/08/HERO-plant.jpg')",
        
    },
    paper: {
        padding: "30px",
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: "5px"
    }





})

const SingleProductDetails = () => {

    const { id } = useParams();
    const data = fakeData.filter(prod => prod.id === parseInt(id))
    const [ productDetails, setProductsDetails ] = useState(data[0]);

    useEffect(() => {

        fetch("")
        .then(response => response.json())
        .then(result => setProductsDetails(result))
        .catch(error => console.log(error))


    }, [])


  
    const classes = useStyles();
    return (
        <div>
            <Box>
                <Container>
                    <Box>
                        <Paper className={classes.paper}>
                            <Grid container spacing={5}>
                                <Grid item md={5}>
                                    <img className={classes.image} src="https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg" alt=""/>  
                                </Grid>
                                <Grid item md={7}>
                                    <Box>
                                        <h2>{productDetails.name} Meal Plan</h2>
                                        <p style={{marginBottom: "10px"}}>{productDetails.prodDetails}</p>

                                        <ul style={{listStyle: "none"}}>
                                            <li>
                                                <FontAwesomeIcon style={{color: "#FF4C24", marginRight: "5px"}} icon={faPlus} /> Fresh vegetables and fruits.
                                            </li>
                                            <li>
                                                <FontAwesomeIcon style={{color: "#FF4C24", marginRight: "5px"}} icon={faPlus} /> Meals that have no added sugar.
                                            </li>
                                            <li>
                                                <FontAwesomeIcon style={{color: "#FF4C24", marginRight: "5px"}} icon={faPlus} /> Meals that are low in cholesterol and saturated fat.
                                            </li>
                                            <li>
                                                <FontAwesomeIcon style={{color: "#FF4C24", marginRight: "5px"}} icon={faPlus} /> Macronutrient and calorie count.
                                            </li>
                                        </ul>

                                    </Box>
                                    <Box display="flex">
                                        <Box style={{marginRight: "20px"}}>

                                            <FontAwesomeIcon style={{width: "30px", display: "block", margin: "5px auto", fontSize: "30px"}} icon={faAtom} />
                                            <p style={{margin: "0"}}>Calories</p>
                                            <p style={{margin: "0"}}>400kcal</p>
                                            
                                        </Box>
                                        <Box style={{marginRight: "20px"}}>

                                            <FontAwesomeIcon style={{width: "30px", display: "block", margin: "5px auto", fontSize: "30px"}} icon={faBurn} />
                                            <p style={{margin: "0"}}>Fat</p>
                                            <p style={{margin: "0"}}>10g</p>

                                        </Box>
                                        <Box style={{marginRight: "20px"}}>

                                            <FontAwesomeIcon style={{width: "30px", display: "block", margin: "5px auto", fontSize: "30px"}} icon={faSun} />
                                            <p style={{margin: "0"}}>Protein</p>
                                            <p style={{margin: "0"}}>33g</p>

                                        </Box>
                                        <Box style={{marginRight: "20px"}}>

                                            <FontAwesomeIcon style={{width: "30px", display: "block", margin: "5px auto", fontSize: "30px"}} icon={faBiohazard} />
                                            <p style={{margin: "0"}}>Carbs</p>
                                            <p style={{margin: "0"}}>30g</p>

                                        </Box>
                                    </Box>

                                    <button style={{marginTop: "100px"}} className="mainButton">Sign Up Today</button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Box>
                </Container>
            </Box>
        </div>
    );
};

export default SingleProductDetails;