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
    const { id, name, img } = props.category;
    const selected = props.selectedCategory;
    

    let active = "";
    if(id === selected){

        active = `${classes.default}`

    }

    
    return (
        <>
            <Grid item xs={4} sm={3} md={2} >
                <Box className={`${classes.box} ${active}`} onClick={() => props.handleCategory(props.category)}>
                    <Link to={ `/subscribe/${id}`}>
                        <Box style={{textAlign: "center"}}>
                            <img style={{borderRadius: "6px", maxHeight: "120px"}} src={img} alt=""/>
                        </Box>
                        <Box>
                            <h5 style={{textAlign: "center", margin: "12px 0 0 0"}}>{name}</h5>
                        </Box>
                    </Link>
                </Box>
            </Grid>
        </>
    );
};

export default SubscribeCategory;