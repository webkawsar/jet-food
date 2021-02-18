import { faAtom, faBiohazard, faBurn, faPlus, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box, Container, Grid, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';



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
    const history = useHistory();
    const { id } = useParams();
    const [ productDetails, setProductsDetails ] = useState({});

    useEffect(() => {

        fetch(`http://localhost:5000/api/v1/products/${id}`)
        .then(response => response.json())
        .then(result => setProductsDetails(result))
        .catch(error => console.log(error))


    }, [id])

    const handleClick = () => {

        history.push(`/subscribe/${id}`)
    }

  
    const classes = useStyles();
    return (
        <div>
            <Box>
                <Container>
                    <Box>
                        <Paper className={classes.paper}>
                            <Grid container spacing={5}>
                                <Grid item md={5}>
                                    <img className={classes.image} src={`http://localhost:5000/images/${productDetails.image}`} alt=""/>  
                                </Grid>
                                <Grid item md={7}>
                                    <Box>
                                        <h2>{productDetails.title} Meal Plan</h2>
                                        <p style={{marginBottom: "10px"}}>{ productDetails.description }</p>

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

                                    <button onClick={handleClick} style={{marginTop: "100px"}} className="mainButton">Sign Up Today</button>
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