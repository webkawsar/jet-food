import { Box, makeStyles, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';




const useStyles = makeStyles({
    root: {
        
    },
    paper: {
        padding: "35px 30px"
    },
    disabled: {
        color: "white",
        borderRadius: "30px",
        padding: "10px 20px",
        backgroundColor: "grey",
        display: "inline-block",
        border: "none",
        marginRight: "15px"
    }




})



const Cart = (props) => {
    const order = props.order;
    const [disabledButton, setDisabledButton] = useState(true);

    useEffect(() => {

    
        if(order.category && order.days && order.meals && order.mealsTime && order.period){

            setDisabledButton(false)
        }


    }, [order])



    const history = useHistory();
    const handleViewButton = () => {
        history.push("/cart");
    }

 
    const classes = useStyles();
    return (
        <>
            <Box>
                <Paper className={classes.paper}>
                    <h3 style={{textAlign: "center"}}>Review Your Plan</h3>
                    <Box display="flex" justifyContent="center">

                        {
                            disabledButton ?

                                <button 
                                    type="button" 
                                    id="buttonOne" 
                                    disabled 
                                    className={`${classes.disabled}`}
                                >
                                    Add to Cart
                                </button>
                        
                                :

                                <button 
                                    type="button" 
                                    id="buttonOne" 
                                    onClick={props.handleAddToCart} 
                                    className="cartButton"
                                >
                                    Add to Cart
                                </button>

                        }
                        

                        <button type="button" id="buttonTwo" onClick={handleViewButton} className="cartButton">View Cart</button>
                    </Box>
                </Paper>
            </Box>
        </>
    );
};

export default Cart;