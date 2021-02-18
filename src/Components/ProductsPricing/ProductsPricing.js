import { Box, Grid } from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import PropTypes from "prop-types";
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
  
  
    
}));
  



const ProductsPricing = () => {
    
    const [products, setProducts] = useState([]);
    const [value, setValue] = useState(0);

    
    const handleChange = (event, newValue) => {

        setValue(newValue);
    };


    useEffect(() => {

        fetch("http://localhost:5000/api/v1/products")
        .then(response => response.json())
        .then(result => setProducts(result))

    }, [])


    console.log(products);
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons="on"
                    indicatorColor="primary"
                    textColor="primary"
                    aria-label="scrollable force tabs example"
                >

                    {
                        products.map(product => <Tab key={product._id} label={product.title}  {...a11yProps(product._id)} />)
                    }


                </Tabs>
            </AppBar>

            {
                products.map((product, index) =>    <TabPanel key={product._id} value={value} index={index}>
                                                        {/* { product.price } { product.prodDetails } */}
                                                        <Grid container>
                                                            <Grid item md={6}>
                                                                
                                                                <img style={{width: "100%"}} src={`http://localhost:5000/images/${product.image}`} alt=""/>
                                                            </Grid>
                                                            <Grid item md={6}>
                                                                <h2 style={{textAlign: "center"}}>{ product.title } Meal Plan Pricing</h2>

                                                                <Box style={{textAlign: "center", marginBottom: "25px"}}>
                                                                    <h3 style={{margin: "0"}}>1 Meal Per Day : $57.50/weekly</h3>
                                                                    <span>^Minimum 6 days a week^</span>
                                                                </Box>
                                                                
                                                                <Box style={{textAlign: "center", marginBottom: "25px"}}>
                                                                    <h3 style={{margin: "0"}}>2 Meals Per Day: $95.00/weekly</h3>
                                                                    <h3>$360.00/monthly</h3>
                                                                </Box>

                                                                <Box style={{textAlign: "center", marginBottom: "25px"}}>
                                                                    <h3 style={{margin: "0"}}>3 Meals Per Day: $95.00/weekly</h3>
                                                                    <h3>$360.00/monthly</h3>
                                                                </Box>

                                                                <Box style={{textAlign: "center", marginBottom: "25px"}}>
                                                                    <h3 style={{margin: "0"}}>4 Meals Per Day: $95.00/weekly</h3>
                                                                    <h3>$360.00/monthly</h3>
                                                                </Box>

                                                                <Box style={{textAlign: "center", marginBottom: "25px"}}>
                                                                    <h3 style={{margin: "0"}}>5 Meals Per Day: $95.00/weekly</h3>
                                                                    <h3>$360.00/monthly</h3>
                                                                </Box>
                                                                <Box style={{textAlign: "center", marginBottom: "25px"}}>
                                                                    <p>*Monthly meal plans covers for 4 weeks only</p>
                                                                    <p>*2-3 meals/day no breakfast upgrade: $10/weekly</p>
                                                                    <p>*4-5 meals/day no breakfast upgrade: $15/weekly</p>
                                                                    <p>*We deliver 3 times a week: Monday, Wednesday & Fridays.</p>
                                                                    <p>*Taxes and delivery fee will be calculated at checkout. Our delivery fee is $14.99/weekly. $59.99/monthly*</p>

                                                                    <Link to="/subscribe" style={{marginTop: "50px"}} className="mainButton">Customize Your Meal Plan Today</Link>
                                                                </Box>
                                                            </Grid>
                                                        </Grid>
                                                    </TabPanel>)
            }

        </div>
    );
};




function TabPanel(props) {

    const { children, value, index, ...other } = props;
    
  
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-force-tabpanel-${index}`}
            aria-labelledby={`scrollable-force-tab-${index}`}
            {...other}
        >
            {
                value === index &&  <Box p={3}>
                                        { children }
                                    </Box>
            }
        </div>

    );
}
  
TabPanel.propTypes = {
    
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};
  
function a11yProps(index) {
    return {
      id: `scrollable-force-tab-${index}`,
      'aria-controls': `scrollable-force-tabpanel-${index}`,
    };
}
  




export default ProductsPricing;


