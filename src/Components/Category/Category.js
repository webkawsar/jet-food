import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import fakeData from '../../FakeData/FakeData';
import SingleCategory from './SingleCategory';


const useStyles = makeStyles({
    root: {
      padding: "50px 0"
    },
    media: {
      height: 180,
    },
  });

const Category = ({heading}) => {

    const [categories, setCategories] = useState(fakeData);


    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <h1 style={{textAlign: "center"}}>{heading}</h1>
            <Grid container spacing={4}>

                {
                    categories.map(category => <SingleCategory key={category.id} category={category} />)
                }

            </Grid>
        </Container>
    );
};

export default Category;