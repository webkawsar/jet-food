import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import "../../Assets/css/animate.css";
//Added Styles
import "../../Assets/css/bootstrap.css";
import "../../Assets/css/dark.css";
import "../../Assets/css/font-icons.css";
import "../../Assets/css/magnific-popup.css";
import "../../Assets/css/swiper.css";
import logo1 from "../../Assets/images/main-logo.svg";
import "../../Assets/style.css";





const healthProd = [
    {
        id: 101,
        name: "Product-1",
    },
    {
        id: 102,
        name: "Product-2",
    },

]



const Header = () => {

	const { location } = useHistory();
	const [products, setProducts] = useState([]);
	const [healthProducts, setHealthProducts] = useState(healthProd);

   

    
    useEffect(() => {


		axios.get("/products")
		.then(response => {
			setProducts(response.data)
		})
		.catch(error => console.log(error))

    }, [])

	
    return (
		<div className="stretched">
			<div id="wrapper" className="clearfix">
				<header id="header" className="header-transparent">
					<div id="header-wrap">
						<div className="container">
							<div className="header-row">

								<div id="logo">
									<Link className="retina-logo" to="/" data-dark-logo="https://i.ibb.co/5YS9zft/Group-86.png">
										<img src={logo1} alt="Canvas Logo" />
									</Link>
									<Link className="standard-logo" to="/" data-dark-logo="https://i.ibb.co/5YS9zft/Group-86.png">
										<img src={logo1} alt="Canvas Logo" />
									</Link>
								</div>

								<div id="primary-menu-trigger">
									
									<svg className="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>

								</div>

								
								<nav className="primary-menu">
									<ul className="menu-container">
										<li className="menu-item">
											<Link className="menu-link" to="/home"><div>Home</div></Link>
										</li>
										<li className="menu-item">
											<Link className="menu-link" to="/home"><div>MEAL PLANS</div></Link>
											
											<ul className="sub-menu-container">
												{
													products.length ?
													products.map(product => <li key={product._id} className="menu-item">
																				<Link className="menu-link" to={`/prod/${product._id}`}>
																					<div> { product.title }  Meal Plan</div>
																				</Link>
																			</li>)
													:
													<li className="menu-item">
														<Link className="menu-link" to="/home"><div>Product comming soon</div></Link>
													</li>
												}
											</ul>
										</li>

										<li className="menu-item">
											<Link className="menu-link" to="/pricing"><div>MENU & PRICING</div></Link>
										</li>

										<li className="menu-item">
											<Link className="menu-link" to="/"><div>HEALTH SHOTS</div></Link>
											
											<ul className="sub-menu-container">
												{
													healthProducts.length ?
													healthProducts.map(healthProd => 	<li key={healthProd.id} className="menu-item">
																							<Link className="menu-link" to={`/health/prod/${healthProd.id}`}>
																								<div> { healthProd.name } </div>
																							</Link>
																						</li>)
													:
													<li className="menu-item">
														<Link className="menu-link" to="/home"><div>Product comming soon</div></Link>
													</li>
												}
											</ul>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="/home"><div>F.A.Q</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="/home"><div>Delivery Zones</div></a>
												</li>
											</ul>
										</li>
										{
											location.pathname === "/login" ?
											<li className="menu-item">
												<Link className="menu-link" to="/register"><div>Register</div></Link>
											</li>
											:
											<li className="menu-item">
												<Link className="menu-link" to="/login"><div>Login</div></Link>
											</li>
										}
										
										{
											sessionStorage.getItem("token") &&
											<li className="menu-item">
												<Link className="menu-link" to="/profile"><div>Profile</div></Link>
											</li>
										}
									</ul>
								</nav>
							</div>
						</div>
					</div>
					<div className="header-wrap-clone"></div>
				</header>
			</div>
        </div>
    );
};

export default Header;