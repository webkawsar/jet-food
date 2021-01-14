import { Box, Container } from '@material-ui/core';
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Category from '../../Components/Category/Category';
import SingleCategory from '../../Components/Category/SingleCategory';
import Header from '../../Components/Header/Header';
import fakeData from '../../FakeData/FakeData';




const CategoryDetails = () => {

    const { id } = useParams();
    const category = fakeData.filter(cat => cat.id === parseInt(id) )
    const [ catDetails, setCatDetails ] = useState(category[0]);

  

    return (
        <div>
            <Header />
            <Container>
                <Box>
                    <h1>Category plan : {id}</h1>
                    <SingleCategory category={catDetails}></SingleCategory>
                    <Link to={`/subscribe/${id}`}>Go to subscribe</Link>
                </Box>
                <Category heading={"Read About Our Other Plans"} />
            </Container>
        </div>
    );
};

export default CategoryDetails;