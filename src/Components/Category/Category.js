import { Container, Grid, makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import fakeData from '../../FakeData/FakeData';
import SingleCategory from './SingleCategory';


const useStyles = makeStyles({
    root: {
      maxWidth: 345
    },
    media: {
      height: 180,
    },
  });

const Category = () => {

    const [categories, setCategories] = useState(fakeData);


    const classes = useStyles();
    return (
        <Container>
            <Grid container spacing={2}>


                {
                    categories.map(category => <SingleCategory key={category.id} category={category} />)
                }


                


            </Grid>
        </Container>
    );
};

export default Category;