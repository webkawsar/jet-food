import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import fakeData from '../../FakeData/FakeData';
import SingleCategory from '../Category/SingleCategory';




const CategoryDetails = () => {

    const { id } = useParams();
    const category = fakeData.filter(cat => cat.id === parseInt(id) )
    const [ catDetails, setCatDetails ] = useState(category[0]);

  

    return (
        <div>
            <h1>Category plan : {id}</h1>
            <SingleCategory category={catDetails}></SingleCategory>
            <Link to={`/subscribe/${id}`}>Go to subscribe</Link>
        </div>
    );
};

export default CategoryDetails;