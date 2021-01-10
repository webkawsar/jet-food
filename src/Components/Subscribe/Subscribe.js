import { Box, Container, Grid, MenuItem, Paper, Switch, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React, { useEffect, useState } from 'react';
import fakeData from '../../FakeData/FakeData';
import SingleCategory from '../Category/SingleCategory';
import Pagination from '@material-ui/lab/Pagination';
import SubscribeCategory from '../SubscribeCategory/SubscribeCategory';
import CustomizedSwitches from '../Test';

const useStyles = makeStyles({
    paper: {
        padding: "20px 30px"
    }
})



const Subscribe = () => {

    const [categories, setCategories] = useState(fakeData);

    const [checked, setChecked] = useState({checked: true});
    const handleChange = (event) => {
        setChecked({ ...checked, [event.target.name]: event.target.checked });
    };


    const [page, setPage] = useState(1);
    const handleMealsClick = (event, value) => {
      setPage(value);
    };


    const [options, setOptions] = useState([]);

    useEffect(() => {

        if(page === 1){

            const one = [
                {
                    value: '',
                    label: 'Choose an options',
                },
                {
                    value: 'breakfast',
                    label: 'Breakfast',
                },
                {
                    value: 'lunch',
                    label: 'Lunch',
                },
                {
                    value: 'dinner',
                    label: 'Dinner',
                },
            ]
    
            setOptions([...options, ...one])

        } else if(page === 2){

            const two = [
                {
                    value: '',
                    label: 'Choose an options',
                },
                {
                    value: 'breakfast, Lunch',
                    label: 'Breakfast, Lunch',
                },
                {
                    value: 'breakfast, dinner',
                    label: 'Breakfast, Dinner',
                },
                {
                    value: 'lunch, dinner',
                    label: 'Lunch, Dinner',
                },
            ]
      
            setOptions([...two])

        } else if(page === 3){

            const three = [
                {
                    value: '',
                    label: 'Choose an options',
                },
                {
                    value: 'breakfast, lunch, dinner',
                    label: 'Breakfast, Lunch, Dinner',
                },
                {
                    value: 'lunch, 2x dinner',
                    label: 'Lunch, 2x Dinner',
                },
                {
                    value: '2x lunch, dinner',
                    label: '2x Lunch, Dinner',
                },
            ]
      
            setOptions([...three])

        } else if(page === 4){

            const four = [
                {
                    value: '',
                    label: 'Choose an options',
                },
                {
                    value: 'breakfast, lunch, 2x dinner',
                    label: 'Breakfast, Lunch, 2x Dinner',
                },
                {
                    value: 'breakfast, 2x lunch, dinner',
                    label: 'Breakfast, 2x Lunch, Dinner',
                },
                {
                    value: '2x lunch, 2x dinner',
                    label: '2x Lunch, 2x Dinner',
                },
            ]
      
            setOptions([...four])

        } else if(page === 5){

            const five = [
                {
                    value: '',
                    label: 'Choose an options',
                },
                {
                    value: 'breakfast, 2x lunch, 2x dinner',
                    label: 'Breakfast, 2x Lunch, 2x Dinner',
                }
            ]
      
            setOptions([...five])
        }

    }, [page])



    const [mealsTime, setMealsTime] = useState("");
    const handleOptions = (event) => {
        setMealsTime(event.target.value);
    };



    const [days, setDays] = useState(6);
    const handleDaysClick = (event, value) => {
        setDays(value);
    };

    


    const classes = useStyles();
    return (
        <div>
            
            <Container>
                <Grid container>
                    <Grid item md={9}>
                        <Paper className={classes.paper}>
                            <Box>
                                <h3 style={{textAlign: "center", marginBottom: "20px"}}>Select Your Meal Plan</h3>
                                <Grid container spacing={2}>
                                    {
                                        categories.map(category => <SubscribeCategory key={category.id}></SubscribeCategory>)
                                    }

                                </Grid>
                            </Box>
                            <Box>
                                <Grid container>
                                    <Grid item xs={12} sm={3} md={2}>
                                        <span >{" "}</span>
                                    </Grid>

                                    <Grid item xs={6} sm={4} md={6}>
                                        <label >Period</label>
                                    </Grid>

                                    <Grid item xs={6} sm={5} md={4}>
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

                                <Grid container>
                                    <Grid item xs={12} sm={3} md={2}>
                                        <span >{" "}</span>
                                    </Grid>

                                    <Grid item xs={6} sm={4} md={6}>
                                        <label htmlFor="meals">Meals per day</label>
                                    </Grid>

                                    <Grid item xs={6} sm={5} md={4}>
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

                                <Grid container>
                                    <Grid item xs={12} sm={3} md={2}>
                                        <span >{" "}</span>
                                    </Grid>

                                    <Grid item xs={6} sm={4} md={6}>
                                        <label htmlFor="options">Meals options</label>
                                    </Grid>

                                    <Grid item xs={6} sm={5} md={4}>
                                        <TextField
                                            id="select"
                                            select
                                            name="options"
                                            value={mealsTime}
                                            onChange={handleOptions}
                                            SelectProps={{
                                                native: true,
                                            }}
                                            helperText="Please select your meals"
                                        >
                                            {options.map((option) => (
                                                <option key={option.value} value={option.value}>
                                                    {option.label}
                                                </option>
                                            ))}
                                        </TextField>
                                    </Grid>
                                </Grid>
                                
                                <Grid container>
                                    <Grid item xs={12} sm={3} md={2}>
                                        <span >{" "}</span>
                                    </Grid>

                                    <Grid item xs={6} sm={4} md={6}>
                                        <label htmlFor="days">Days per Week</label>
                                    </Grid>

                                    <Grid item xs={6} sm={5} md={4}>
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
                                <h3>Add your snacks and juices</h3>
                                <label htmlFor="optional">Protein Balls</label>
                                <br/>

                                <input type="radio" name="juice" id="juice"/> <span>3 ($9.50)</span> <br/>
                                <input type="radio" name="juice" id="juice"/> <span>5 ($15.50)</span>

                            </Box>

                        </Paper>
                    </Grid>
                    <Grid item md={3}>
                        <h1>Cart</h1>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Subscribe;