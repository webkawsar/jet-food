import { Box, IconButton, List } from '@material-ui/core';
import { AddShoppingCart, ChevronRight, ListAlt, Payment } from '@material-ui/icons';
import React from 'react';
import { Link } from 'react-router-dom';




const CartHeader = () => {
    return (
        <div>
            <Box py={3} display="flex" justifyContent="center" alignItems="center">
                <Link to="/subscribe">
                    <IconButton>
                        <ListAlt style={{fontSize: "50px"}}></ListAlt>
                    </IconButton>
                </Link>

                <ChevronRight></ChevronRight>

                <Link to="/subscribe">
                    <IconButton>
                        <AddShoppingCart style={{fontSize: "50px"}}></AddShoppingCart>
                    </IconButton>
                </Link>

                <ChevronRight></ChevronRight>

                <Link to="/subscribe">
                    <IconButton>
                        <Payment style={{fontSize: "50px"}}></Payment>
                    </IconButton>
                </Link>
            </Box>
        </div>
    );
};

export default CartHeader;