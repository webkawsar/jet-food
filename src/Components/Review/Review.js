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
        padding: "70px 0 120px",
        backgroundColor: "#FFF6F4"
	}
	

})

const Review = () => {



    const classes = useStyles();
    return (
		<Box className={classes.root}>
			<Container>
				<Box style={{marginBottom: "70px"}} textAlign="center">
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

						<SwiperSlide><img className={classes.sliderImage} src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt=""/></SwiperSlide>
						<SwiperSlide><img className={classes.sliderImage} src={slide2} alt=""/></SwiperSlide>
						<SwiperSlide><img className={classes.sliderImage} src="https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHw%3D&w=1000&q=80" alt=""/></SwiperSlide>
						<SwiperSlide><img className={classes.sliderImage} src="https://toledocenter.com/wp-content/uploads/2020/03/flat-lay-photography-of-vegetable-salad-on-plate-1640777-scaled-e1584542988849.jpg" alt=""/></SwiperSlide>
						
					</Swiper>
				</Box>
			</Container>
		</Box>
    );
};

export default Review;