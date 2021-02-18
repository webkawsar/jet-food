import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    root: {


   
    },

    box: {
        padding: "20px",

        "&:hover": {
            backgroundColor: "#EAEAEA",
            cursor: "pointer",
            borderRadius: "10px"
        }
    },
    default: {
        backgroundColor: "#FF4C24",
        cursor: "pointer",
        borderRadius: "10px",
        "&:hover": {
            backgroundColor: "#FF4C24",
        }
        
    },


  });

const SubscribeCategory = (props) => {
    const classes = useStyles();
    const { _id, title, image } = props.category;
    const selected = props.selectedCategory;
    

    let active = "";
    if(_id === selected){

        active = `${classes.default}`

    }

  

    return (
        <>
            <Grid item xs={4} sm={3} md={2} >
                <Box className={`${classes.box} ${active}`} onClick={() => props.handleCategory(props.category)}>
                    <Link to={ `/subscribe/${_id}`}>
                        <Box style={{textAlign: "center"}}>
                            <img style={{borderRadius: "6px", height: "120px"}} src={`http://localhost:5000/images/${image}`} alt=""/>
                        </Box>
                        <Box>
                            <h5 style={{textAlign: "center", margin: "12px 0 0 0"}}>{title}</h5>
                        </Box>
                    </Link>
                </Box>
            </Grid>
        </>
    );
};

export default SubscribeCategory;