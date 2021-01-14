import { Box, Grid, Paper, Switch, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useContext, useEffect, useState } from 'react';
import fakeData from '../../FakeData/FakeData';
import Pagination from '@material-ui/lab/Pagination';
import SubscribeCategory from '../SubscribeCategory/SubscribeCategory';
import { five, four, one, three, two, zero } from './OptionsData';
import Cart from '../Cart/Cart';
import { UserContext } from '../../App';
import { useHistory, useParams } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        width: "90%",
        margin: "0 auto"
    },
    paper: {
        padding: "20px 30px"
    }
})



const Subscribe = () => {

    const [categories, setCategories] = useState(fakeData);
    const [selectedCategory, setSelectedCategory] = useState(categories[0].id);
    const [activeCatName, setActiveCatName] = useState(categories[0].name)
    const [checked, setChecked] = useState({checked: false});
    const [page, setPage] = useState(0);
    const [order, setOrder] = useState({});
    const [options, setOptions] = useState([]);
    const [mealsTime, setMealsTime] = useState("");
    const [days, setDays] = useState(0);
    const { id } = useParams();
    const [price, setPrice] = useState(categories[0].price);
    
   

    const handleChange = (event) => {
        setChecked({ ...checked, [event.target.name]: event.target.checked });
        setPage(0);
        setDays(0);
    };


    
    const handleMealsClick = (event, value) => {
      setPage(value);
    };


    useEffect(() => {

        
        // fetch("/")
        // .then(res => res.json())
        // .then(result => result)


        if(id){
            setSelectedCategory(parseInt(id))
        } 

        if(page === 0){

            setOptions([...zero])

        }else if(page === 1){
    
            setOptions([...one])

        } else if(page === 2){
      
            setOptions([...two])

        } else if(page === 3){

            setOptions([...three])

        } else if(page === 4){

            setOptions([...four])

        } else if(page === 5){

            setOptions([...five])
        }

    }, [page, id])

    
    const handleOptions = (event) => {
        setMealsTime(event.target.value);
    };

    
    const handleDaysClick = (event, value) => {
        setDays(value);
    };

 
    const handleCategory = (cat) => {

        setSelectedCategory(cat.id)
        setActiveCatName(cat.name)
        setPage(0);
        setOptions([]);
        setMealsTime("");
        setDays(0);
        setPrice(cat.price)
    }

    
    useEffect(() => {

        if(checked && page && mealsTime && days && selectedCategory){

            let period = "";
            if(checked.checked){
                
                period = "weekly";
            } else {

                period = "monthly"
            }

            const orderData = {

                    category: activeCatName,
                    period: period,
                    meals: page,
                    mealsTime: mealsTime,
                    days: days,
                    price: price,
                    optionals: {
                        juice: ""
                    }
    
                }
            
            setOrder({...orderData});
    
        }


    }, [checked, page, mealsTime, days, selectedCategory])


    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
   const history = useHistory();
    const handleAddToCart = () => {

        const orders = [...loggedInUser.orders, order]
        setLoggedInUser({...loggedInUser, orders})
        history.push("/cart")
    }

 

    const classes = useStyles();
    return (
        <div>
            
            <Box className={classes.root}>
                <Grid container spacing={3}>
                    <Grid item md={8}>
                        <Paper className={classes.paper}>
                            <Box>
                                <h3 style={{textAlign: "center", marginBottom: "20px"}}>Select Your Meal Plan</h3>
                                <Grid container spacing={2}>
                                    {
                                        categories.map(category => <SubscribeCategory 
                                            handleCategory={handleCategory} 
                                            key={category.id} 
                                            category={category}
                                            categories={categories}
                                            selectedCategory={selectedCategory}
                                            ></SubscribeCategory>)
                                    }

                                </Grid>
                            </Box>
                            <Box>
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={2} md={2}>
                                        <span >{" "}</span>
                                    </Grid>

                                    <Grid item xs={6} sm={4} md={6}>
                                        <label >Period</label>
                                    </Grid>

                                    <Grid item xs={6} sm={6} md={4}>
                                        <label htmlFor="period">Monthly</label>
                                        <Switch
                                            id="period"
                                            checked={checked.checked}
                                            onChange={handleChange}
                                            name="checked"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                        <label htmlFor="period">Weekly</label>
                                    </Grid>
                                </Grid>

                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={2} md={2}>
                                        <span >{" "}</span>
                                    </Grid>

                                    <Grid item xs={6} sm={4} md={6}>
                                        <label htmlFor="meals">Meals per day</label>
                                    </Grid>

                                    <Grid item xs={6} sm={6} md={4}>
                                        <Pagination
                                            onChange={handleMealsClick}
                                            name="meals"
                                            count={5}
                                            page={page}
                                            hidePrevButton 
                                            hideNextButton
                                            color="secondary"
                                        />
                                    </Grid>
                                </Grid>

                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={2} md={2}>
                                        <span >{" "}</span>
                                    </Grid>

                                    <Grid item xs={6} sm={4} md={6}>
                                        <label htmlFor="options">Meals options</label>
                                    </Grid>

                                    <Grid item xs={6} sm={6} md={4}>
                                        <TextField
                                            id="select"
                                            select
                                            name="options"
                                            value={mealsTime}
                                            onChange={handleOptions}
                                            SelectProps={{
                                                native: true,
                                            }}
                                            // helperText="Please select your meals"
                                        >
                                            {options.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}

                                                </option>
                                            ))}
                                        </TextField>
                                    </Grid>
                                </Grid>
                                
                                <Grid container spacing={3}>
                                    <Grid item xs={12} sm={2} md={2}>
                                        <span >{" "}</span>
                                    </Grid>

                                    <Grid item xs={6} sm={4} md={6}>
                                        <label htmlFor="days">Days per Week</label>
                                    </Grid>

                                    <Grid item xs={6} sm={6} md={4}>
                                        <Pagination
                                            onChange={handleDaysClick}
                                            name="meals"
                                            count={7}
                                            page={days}
                                            hidePrevButton 
                                            hideNextButton
                                            color="secondary"
                                        />
                                    </Grid>
                                </Grid>
                            </Box>
                            
                            <hr/>

                            <Box>
                                <h3 style={{textAlign: "center"}}>Add your snacks and juices</h3>
                                <label htmlFor="optional">Protein Balls</label>
                                <br/>

                                <input type="radio" name="juice" id="first"/> <label htmlFor="first">3 ($9.50)</label> <br/>
                                <input type="radio" name="juice" id="second"/> <label htmlFor="second">5 ($15.50)</label>
                                
                            </Box>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4}>
                        <Cart 
                            handleAddToCart={handleAddToCart} 
                            order={order}
                        >
                        </Cart>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
};

export default Subscribe;