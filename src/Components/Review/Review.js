import { Box, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';


import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';


import "../../Assets/css/bootstrap.css";
import "../../Assets/css/swiper.css";
import "../../Assets/css/dark.css";
import "../../Assets/css/font-icons.css";
import "../../Assets/css/animate.css";
import "../../Assets/css/magnific-popup.css";
import "../../Assets/style.css";


// Fake data for Wsiper Slider
import slide1 from "../../Assets/images/demo-parallax.jpg";
import slide2 from "../../Assets/images/demo-parallax.jpg";
import slide3 from "../../Assets/images/demo-parallax.jpg";
import slide4 from "../../Assets/images/demo-parallax.jpg";


SwiperCore.use([Navigation, Pagination, A11y]);




const useStyles = makeStyles({
    root: {
        padding: "50px 0 100px",
        backgroundColor: "#FFF6F4"
    }
})

const Review = () => {



    const classes = useStyles();
    return (
        <Container className={classes.root}>
            <Box textAlign="center">
                <h1 style={{margin: "0"}}>Jet Fuel Meals is the #1 Rated</h1>
                <p>Join thousands of people who found their perfect plan to stay healthy! See all our verified reviews.</p>
            </Box>
			<Box>
				<Swiper
					navigation
					spaceBetween={50}
					slidesPerView={3}
					pagination={{ clickable: true }}
					onSwiper={(swiper) => console.log(swiper)}
					onSlideChange={() => console.log('slide change')}
				>

					<SwiperSlide><img className={classes.sliderImage} src={slide1} alt=""/></SwiperSlide>
					<SwiperSlide><img className={classes.sliderImage} src={slide2} alt=""/></SwiperSlide>
					<SwiperSlide><img className={classes.sliderImage} src={slide3} alt=""/></SwiperSlide>
					<SwiperSlide><img className={classes.sliderImage} src={slide4} alt=""/></SwiperSlide>
					
				</Swiper>
			</Box>
        </Container>
    );
};

export default Review;