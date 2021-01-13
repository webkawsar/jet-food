import React from 'react';



//Added Styles
import "../../Assets/css/bootstrap.css";
import "../../Assets/css/swiper.css";
import "../../Assets/css/dark.css";
import "../../Assets/css/font-icons.css";
import "../../Assets/css/animate.css";
import "../../Assets/css/magnific-popup.css";
import "../../Assets/style.css";

import logo1 from "../../Assets/images/logo.png";





const Header = () => {
    return (
        <div>
        
		<header id="header" className="transparent-header">
			<div id="header-wrap">
				<div className="container">
					<div className="header-row">

						<div id="logo">
							<a href="/" className="standard-logo" data-dark-logo="https://i.ibb.co/5YS9zft/Group-86.png">
                                <img src={logo1} alt="Canvas Logo" />
                            </a>
							<a href="/" className="retina-logo" data-dark-logo="https://i.ibb.co/5YS9zft/Group-86.png">
								<img src="https://i.ibb.co/5YS9zft/Group-86.png" alt="Canvas Logo" />
							</a>
						</div>

						<div className="header-misc">
							<div id="top-search" className="header-misc-icon">
								<a href="/" id="top-search-trigger"><i className="icon-line-search"></i><i className="icon-line-cross"></i></a>
							</div>
						
							<div id="top-cart" className="header-misc-icon d-none d-sm-block">
								<a href="/" id="top-cart-trigger"><i className="icon-line-bag"></i><span className="top-cart-number">5</span></a>
								<div className="top-cart-content">
									<div className="top-cart-title">
										<h4>Shopping Cart</h4>
									</div>
									<div className="top-cart-items">
										<div className="top-cart-item">
											<div className="top-cart-item-image">
												<a href="/"><img src="images/shop/small/1.jpg" alt="Blue Round-Neck Tshirt" /></a>
											</div>
											<div className="top-cart-item-desc">
												<div className="top-cart-item-desc-title">
													<a href="/">Blue Round-Neck Tshirt with a Button</a>
													<span className="top-cart-item-price d-block">$19.99</span>
												</div>
												<div className="top-cart-item-quantity">x 2</div>
											</div>
										</div>
										<div className="top-cart-item">
											<div className="top-cart-item-image">
												<a href="/"><img src="images/shop/small/6.jpg" alt="Light Blue Denim Dress" /></a>
											</div>
											<div className="top-cart-item-desc">
												<div className="top-cart-item-desc-title">
													<a href="/">Light Blue Denim Dress</a>
													<span className="top-cart-item-price d-block">$24.99</span>
												</div>
												<div className="top-cart-item-quantity">x 3</div>
											</div>
										</div>
									</div>
									<div className="top-cart-action">
										<span className="top-checkout-price">$114.95</span>
										<a href="/" className="button button-3d button-small m-0">View Cart</a>
									</div>
								</div>
							</div>

						</div>

						<div id="primary-menu-trigger">
							<svg className="svg-trigger" viewBox="0 0 100 100"><path d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"></path><path d="m 30,50 h 40"></path><path d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"></path></svg>
						</div>

						
						<nav className="primary-menu">

							<ul className="menu-container">
								<li className="menu-item">
									<a className="menu-link" href="/"><div>Home</div></a>
									<ul className="sub-menu-container">
										<li className="menu-item">
											<a className="menu-link" href="intro.html/section-niche"><div>Niche Demos</div></a>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="intro.html/section-onepage"><div>One-Page Demos</div></a>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="index-corporate.html"><div>Home - Corporate</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="index-corporate.html"><div>Corporate - Layout 1</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="index-corporate-2.html"><div>Corporate - Layout 2</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="index-corporate-3.html"><div>Corporate - Layout 3</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="index-corporate-4.html"><div>Corporate - Layout 4</div></a>
												</li>
											</ul>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="index-portfolio.html"><div>Home - Portfolio</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="index-portfolio.html"><div>Portfolio - Layout 1</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="index-portfolio-2.html"><div>Portfolio - Layout 2</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="index-portfolio-3.html"><div>Portfolio - Masonry</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="index-portfolio-4.html"><div>Portfolio - AJAX</div></a>
												</li>
											</ul>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="index-blog.html"><div>Home - Blog</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="index-blog.html"><div>Blog - Layout 1</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="index-blog-2.html"><div>Blog - Layout 2</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="index-blog-3.html"><div>Blog - Layout 3</div></a>
												</li>
											</ul>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="index-shop.html"><div>Home - Shop</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="index-shop.html"><div>Shop - Layout 1</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="index-shop-2.html"><div>Shop - Layout 2</div></a>
												</li>
											</ul>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="index-magazine.html"><div>Home - Magazine</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="index-magazine.html"><div>Magazine - Layout 1</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="index-magazine-2.html"><div>Magazine - Layout 2</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="index-magazine-3.html"><div>Magazine - Layout 3</div></a>
												</li>
											</ul>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="landing.html"><div>Home - Landing Page</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="landing.html"><div>Landing Page - Layout 1</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="landing-2.html"><div>Landing Page - Layout 2</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="landing-3.html"><div>Landing Page - Layout 3</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="landing-4.html"><div>Landing Page - Layout 4</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="landing-5.html"><div>Landing Page - Layout 5</div></a>
												</li>
											</ul>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="index-fullscreen-image.html"><div>Home - Full Screen</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="index-fullscreen-image.html"><div>Full Screen - Image</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="index-fullscreen-slider.html"><div>Full Screen - Slider</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="index-fullscreen-video.html"><div>Full Screen - Video</div></a>
												</li>
											</ul>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="index-onepage.html"><div>Home - One Page</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="index-onepage.html"><div>One Page - Default</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="index-onepage-2.html"><div>One Page - Submenu</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="index-onepage-3.html"><div>One Page - Dots Style</div></a>
												</li>
											</ul>
										</li>
										<li className="menu-item mega-menu mega-menu-small">
											<a className="menu-link" href="/"><div>Extras</div></a>
											<div className="mega-menu-content">
												<div className="row mx-0">
													<ul className="sub-menu-container mega-menu-column col">
														<li className="menu-item">
															<a className="menu-link" href="index-wedding.html"><div>Wedding</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="index-restaurant.html"><div>Restaurant</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="index-events.html"><div>Events</div></a>
														</li>
													</ul>
													<ul className="sub-menu-container mega-menu-column col">
														<li className="menu-item">
															<a className="menu-link" href="index-parallax.html"><div>Parallax</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="index-app-showcase.html"><div>App Showcase</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="index-boxed.html"><div>Boxed Layout</div></a>
														</li>
													</ul>
												</div>
											</div>
										</li>
									</ul>
								</li>
								<li className="menu-item">
									<a className="menu-link" href="/"><div>Features</div></a>
									<ul className="sub-menu-container">
										<li className="menu-item">
											<a className="menu-link" href="/"><div><i className="icon-stack"></i>Sliders</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="slider-revolution.html"><div>Revolution Slider</div></a>
													<ul className="sub-menu-container">
														<li className="menu-item">
															<a className="menu-link" href="rs-demos.html"><div>Premium Templates</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="slider-revolution.html"><div>Full Screen</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="slider-revolution-fullwidth.html"><div>Full Width</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="slider-revolution-kenburns.html"><div>Kenburns Effect</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="slider-revolution-html5-videos.html"><div>HTML5 Video</div></a>
														</li>
													</ul>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="slider-canvas.html"><div>Canvas Slider</div></a>
													<ul className="sub-menu-container">
														<li className="menu-item">
															<a className="menu-link" href="slider-canvas.html"><div>Full Width</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="slider-canvas-fade.html"><div>Fade Transition</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="slider-canvas-autoplay.html"><div>Autoplay Feature</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="slider-canvas-video-event.html"><div>Custom Video Event</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="slider-canvas-pagination.html"><div>Pagination Navigation</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="slider-canvas-3.html"><div>3 Columns</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="slider-canvas-4.html"><div>4 Columns</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="slider-canvas-5.html"><div>5 Columns</div></a>
														</li>
													</ul>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="slider-flex.html"><div>Flex Slider</div></a>
													<ul className="sub-menu-container">
														<li className="menu-item">
															<a className="menu-link" href="slider-flex.html"><div>Default Layout</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="slider-flex-thumbs.html"><div>with Thumbs</div></a>
														</li>
													</ul>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="slider-owl.html"><div>Owl Slider</div></a>
													<ul className="sub-menu-container">
														<li className="menu-item">
															<a className="menu-link" href="slider-owl-full.html"><div>Full Width</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="slider-owl.html"><div>Boxed Width</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="slider-owl-videos.html"><div>Video Slider</div></a>
														</li>
													</ul>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="static-parallax.html"><div>Static Media</div></a>
													<ul className="sub-menu-container">
														<li className="menu-item">
															<a className="menu-link" href="static-parallax.html"><div>Static - Parallax</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="static-image.html"><div>Static - Image</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="static-thumbs-grid.html"><div>Static - Thumb Gallery</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="static-html5-video.html"><div>Static - HTML5 Video</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="static-embed-video.html"><div>Static - Embedded Video</div></a>
														</li>
													</ul>
												</li>
											</ul>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="/"><div><i className="icon-umbrella"></i>Headers</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="header-light.html"><div>Light Version</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="header-dark.html"><div>Dark Version</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="header-transparent.html"><div>Transparent</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="header-semi-transparent.html"><div>Semi Transparent</div></a>
													<ul className="sub-menu-container">
														<li className="menu-item">
															<a className="menu-link" href="header-semi-transparent.html"><div>Light Version</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="header-semi-transparent-dark.html"><div>Dark Version</div></a>
														</li>
													</ul>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="header-side-left.html"><div>Left Side Header</div></a>
													<ul className="sub-menu-container">
														<li className="menu-item">
															<a className="menu-link" href="header-side-left.html"><div>Fixed Position</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="header-side-left-open.html"><div>OnClick Open</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="header-side-left-open-push.html"><div>Push Content</div></a>
														</li>
													</ul>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="header-side-right.html"><div>Right Side Header</div></a>
													<ul className="sub-menu-container">
														<li className="menu-item">
															<a className="menu-link" href="header-side-right.html"><div>Fixed Position</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="header-side-right-open.html"><div>OnClick Open</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="header-side-right-open-push.html"><div>Push Content</div></a>
														</li>
													</ul>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="header-floating.html"><div>Floating Version</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="static-sticky.html"><div>Static Sticky</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="responsive-sticky.html"><div>Responsive Sticky</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="logo-changer.html"><div>Alternate Logos</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="alternate-mobile-menu.html"><div>Alternate Mobile Menu</div></a>
												</li>
											</ul>
										</li>
										<li className="menu-item mega-menu mega-menu-small">
											<a className="menu-link" href="/"><div><i className="icon-align-justify2"></i>Menu Styles</div></a>
											<div className="mega-menu-content">
												<div className="row mx-0">
													<ul className="sub-menu-container mega-menu-column col">
														<li className="menu-item">
															<a className="menu-link" href="header-light.html"><div>Default Layout</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="menu-2.html"><div>Alternate Layout</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="menu-3.html"><div>Pill Style</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="menu-4.html"><div>Border Style</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="menu-5.html"><div>Large Icon Menu</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="split-menu.html"><div>Split Layout</div></a>
														</li>
													</ul>
													<ul className="sub-menu-container mega-menu-column col">
														<li className="menu-item">
															<a className="menu-link" href="menu-6.html"><div>Scaling Border</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="menu-subtitle.html"><div>Sub-Title Menu</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="menu-7.html"><div>Extended Menu 1</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="menu-8.html"><div>Extended Menu 2</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="menu-9.html"><div>Extended Menu 3</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="menu-10.html"><div>Overlay Menu</div></a>
														</li>
													</ul>
												</div>
											</div>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="mega-menu.html"><div><i className="icon-line-columns"></i>Mega Menu</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="mega-menu.html"><div>Widgetized</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="mega-menu-full.html"><div>Full-Width</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="mega-menu-tab.html"><div>Tabbed</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="mega-menu-side-tab.html"><div>Side-Tabs (onClick)</div></a>
												</li>
											</ul>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="forms.html"><div><i className="icon-wpforms"></i>Forms</div></a>
										</li>
										<li className="menu-item mega-menu mega-menu-small">
											<a className="menu-link" href="widgets.html"><div><i className="icon-gift"></i>Widgets</div></a>
											<div className="mega-menu-content">
												<div className="row mx-0">
													<ul className="sub-menu-container mega-menu-column col">
														<li className="menu-item">
															<a className="menu-link" href="widgets.html"><div>Links</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="widgets.html"><div>Flickr Photostream</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="widgets.html"><div>Dribbble Shots</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="widgets.html"><div>Subscribers</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="widgets.html"><div>Posts List</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="widgets.html"><div>Twitter Feed</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="widgets.html"><div>Tabbed Widgets</div></a>
														</li>
													</ul>
													<ul className="sub-menu-container mega-menu-column col">
														<li className="menu-item">
															<a className="menu-link" href="widgets.html"><div>Carousel</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="widgets.html"><div>Social Icons</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="widgets.html"><div>Testimonials</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="widgets.html"><div>Quick Contact</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="widgets.html"><div>Tags Cloud</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="widgets.html"><div>Video Embeds</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="widgets.html"><div>Raw HTML</div></a>
														</li>
													</ul>
												</div>
											</div>
										</li>
										<li className="menu-item mega-menu mega-menu-small">
											<a className="menu-link" href="/"><div><i className="icon-ok-sign"></i>Page Titles</div></a>
											<div className="mega-menu-content">
												<div className="row mx-0">
													<ul className="sub-menu-container mega-menu-column col-5">
														<li className="menu-item">
															<a className="menu-link" href="page.html"><div>Left Align</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="page-title-right.html"><div>Right Align</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="page-title-center.html"><div>Center Align</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="page-title-dark.html"><div>Dark Style</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="page-title-pattern.html"><div>BG Pattern</div></a>
														</li>
													</ul>
													<ul className="sub-menu-container mega-menu-column col-7">
														<li className="menu-item">
															<a className="menu-link" href="page-title-parallax.html"><div>Parallax - Default</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="page-title-parallax-header.html"><div>Parallax - Transparent</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="page-title-video.html"><div>HTML5 Video</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="page-title-nobg.html"><div>No Background</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="page-title-mini.html"><div>Mini Version</div></a>
														</li>
													</ul>
												</div>
											</div>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="side-panel.html"><div><i className="icon-line-layout"></i>Side Panel</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="side-panel-left-overlay.html"><div>Left Overlay</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="side-panel-left-push.html"><div>Left Push</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="side-panel-right-overlay.html"><div>Right Overlay</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="side-panel.html"><div>Right Push</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="side-panel-light.html"><div>Light Background</div></a>
												</li>
											</ul>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="modal-onload.html"><div><i className="icon-line-expand"></i>Modal OnLoad</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="modal-onload.html"><div>Default Layout</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="modal-onload-iframe.html"><div>Video iFrame</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="modal-onload-subscribe.html"><div>Subscription Form</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="modal-onload-common-height.html"><div>Common Height</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="modal-onload-cookie.html"><div>Cookies Enabled</div></a>
												</li>
											</ul>
										</li>
										<li className="menu-item mega-menu mega-menu-small">
											<a className="menu-link" href="/footer" data-scrollto="/footer"><div><i className="icon-th"></i>Footers</div></a>
											<div className="mega-menu-content">
												<div className="row mx-0">
													<ul className="sub-menu-container mega-menu-column col">
														<li className="menu-item">
															<a className="menu-link" href="sticky-footer.html"><div>Sticky</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="/footer" data-scrollto="/footer"><div>Layout 1</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="footer-2.html/footer"><div>Layout 2</div></a>
														</li>
													</ul>
													<ul className="sub-menu-container mega-menu-column col">
														<li className="menu-item">
															<a className="menu-link" href="footer-3.html/footer"><div>Layout 3</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="footer-4.html/footer"><div>Layout 4</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="footer-5.html/footer"><div>Layout 5</div></a>
														</li>
													</ul>
													<ul className="sub-menu-container mega-menu-column col">
														<li className="menu-item">
															<a className="menu-link" href="footer-6.html/footer"><div>Layout 6</div></a>
														</li>
														<li className="menu-item">
															<a className="menu-link" href="footer-7.html/footer"><div>Layout 7</div></a>
														</li>
													</ul>
												</div>
											</div>
										</li>
									</ul>
								</li>
								<li className="menu-item mega-menu">
									<a className="menu-link" href="/"><div>Pages</div></a>
									<div className="mega-menu-content mega-menu-style-2">
										<div className="container">
											<div className="row">
												<ul className="sub-menu-container mega-menu-column col-lg-3">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="/"><div>Introductory</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href="about.html"><div>About Us</div></a>
																<ul className="sub-menu-container mega-menu-dropdown">
																	<li className="menu-item">
																		<a className="menu-link" href="about.html"><div>Main Layout</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="about-2.html"><div>Alternate Layout</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="about-me.html"><div>About Me</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="team.html"><div>Team Members</div></a>
																	</li>
																</ul>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="gdpr.html"><div>GDPR Compliance</div></a>
																<ul className="sub-menu-container mega-menu-dropdown">
																	<li className="menu-item">
																		<a className="menu-link" href="gdpr.html"><div>Default</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="gdpr-small.html"><div>Small</div></a>
																	</li>
																</ul>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="jobs.html"><div>Careers</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="profile.html"><div>User Profile</div></a>
															</li>
														</ul>
													</li>
												</ul>
												<ul className="sub-menu-container mega-menu-column col-lg-3">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="/"><div>Utility &amp; Specials</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href="services.html"><div><i className="icon-star-of-life"></i>Services Pages</div></a>
																<ul className="sub-menu-container mega-menu-dropdown">
																	<li className="menu-item">
																		<a className="menu-link" href="services.html"><div>Layout 1</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="services-2.html"><div>Layout 2</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="services-3.html"><div>Layout 3</div></a>
																	</li>
																</ul>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="/"><div><i className="icon-calendar3"></i>Events</div></a>
																<ul className="sub-menu-container mega-menu-dropdown">
																	<li className="menu-item">
																		<a className="menu-link" href="events-list.html"><div>Events List</div></a>
																		<ul className="sub-menu-container mega-menu-dropdown">
																			<li className="menu-item">
																				<a className="menu-link" href="events-list.html"><div>Right Sidebar</div></a>
																			</li>
																			<li className="menu-item">
																				<a className="menu-link" href="events-list-left-sidebar.html"><div>Left Sidebar</div></a>
																			</li>
																			<li className="menu-item">
																				<a className="menu-link" href="events-list-both-sidebar.html"><div>Both Sidebar</div></a>
																			</li>
																			<li className="menu-item">
																				<a className="menu-link" href="events-list-fullwidth.html"><div>Full Width</div></a>
																			</li>
																			<li className="menu-item">
																				<a className="menu-link" href="events-list-parallax.html"><div>Parallax List</div></a>
																			</li>
																		</ul>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="event-single.html"><div>Single Event</div></a>
																		<ul className="sub-menu-container mega-menu-dropdown">
																			<li className="menu-item">
																				<a className="menu-link" href="event-single-right-sidebar.html"><div>Right Sidebar</div></a>
																			</li>
																			<li className="menu-item">
																				<a className="menu-link" href="event-single-left-sidebar.html"><div>Left Sidebar</div></a>
																			</li>
																			<li className="menu-item">
																				<a className="menu-link" href="event-single-both-sidebar.html"><div>Both Sidebar</div></a>
																			</li>
																			<li className="menu-item">
																				<a className="menu-link" href="event-single.html"><div>Full Width</div></a>
																			</li>
																		</ul>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="event-single-full-width-image.html"><div>Single Event - Full</div></a>
																		<ul className="sub-menu-container mega-menu-dropdown">
																			<li className="menu-item">
																				<a className="menu-link" href="event-single-full-width-image.html"><div>Parallax Image</div></a>
																			</li>
																			<li className="menu-item">
																				<a className="menu-link" href="event-single-full-width-map.html"><div>Google Map</div></a>
																			</li>
																			<li className="menu-item">
																				<a className="menu-link" href="event-single-full-width-slider.html"><div>Slider Gallery</div></a>
																			</li>
																			<li className="menu-item">
																				<a className="menu-link" href="event-single-full-width-video.html"><div>HTML5 Video</div></a>
																			</li>
																		</ul>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="events-calendar.html"><div>Full Width Calendar</div></a>
																	</li>
																</ul>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="contact.html"><div><i className="icon-envelope"></i>Contact Pages</div></a>
																<ul className="sub-menu-container mega-menu-dropdown">
																	<li className="menu-item">
																		<a className="menu-link" href="contact.html">Main Layout</a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="contact-2.html">Grid Layout</a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="contact-3.html">Right Sidebar</a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="contact-4.html">Both Sidebars</a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="contact-5.html">Modal Form</a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="contact-6.html">Form Overlay</a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="contact-7.html">Form Overlay Mini</a>
																	</li>
																</ul>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="faqs.html"><div><i className="icon-question-circle"></i>FAQs Pages</div></a>
																<ul className="sub-menu-container mega-menu-dropdown">
																	<li className="menu-item">
																		<a className="menu-link" href="faqs.html"><div>Layout 1</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="faqs-2.html"><div>Layout 2</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="faqs-3.html"><div>Layout 3</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="faqs-4.html"><div>Layout 4</div></a>
																	</li>
																</ul>
															</li>
														</ul>
													</li>
												</ul>
												<ul className="sub-menu-container mega-menu-column col-lg-3">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="/"><div>Layouts &amp; PageNavs</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href="full-width.html"><div>Full Width</div></a>
																<ul className="sub-menu-container mega-menu-dropdown">
																	<li className="menu-item">
																		<a className="menu-link" href="full-width.html"><div>Default Width</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="full-width-wide.html"><div>Wide Width</div></a>
																	</li>
																</ul>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="/"><div>Sidebars</div></a>
																<ul className="sub-menu-container mega-menu-dropdown">
																	<li className="menu-item">
																		<a className="menu-link" href="right-sidebar.html"><div>Right Sidebar</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="left-sidebar.html"><div>Left Sidebar</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="both-sidebar.html"><div>Both Sidebar</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="both-right-sidebar.html"><div>Both Right Sidebar</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="both-left-sidebar.html"><div>Both Left Sidebar</div></a>
																	</li>
																</ul>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="page-submenu.html"><div>Page Submenu</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="side-navigation.html"><div>Side Navigation</div></a>
															</li>
														</ul>
													</li>
												</ul>
												<ul className="sub-menu-container mega-menu-column col-lg-3">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="/"><div>Miscellaneous</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href="login-register.html"><div>Login/Register</div></a>
																<ul className="sub-menu-container mega-menu-dropdown">
																	<li className="menu-item">
																		<a className="menu-link" href="login-register.html"><div>Default Layout</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="login-register-2.html"><div>Tabbed Login</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="login-register-3.html"><div>Login Accordion</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="login-1.html"><div>Dark BG Login</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="login-2.html"><div>Image BG Login</div></a>
																	</li>
																</ul>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="coming-soon.html"><div>Coming Soon</div></a>
																<ul className="sub-menu-container mega-menu-dropdown">
																	<li className="menu-item">
																		<a className="menu-link" href="coming-soon.html"><div>Default Layout</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="coming-soon-2.html"><div>Parallax Image</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="coming-soon-3.html"><div>HTML5 Video</div></a>
																	</li>
																</ul>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="404.html"><div>404 Pages</div></a>
																<ul className="sub-menu-container mega-menu-dropdown">
																	<li className="menu-item">
																		<a className="menu-link" href="404.html"><div>Default Layout</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="404-2.html"><div>Parallax Image</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="404-3.html"><div>HTML5 Video</div></a>
																	</li>
																</ul>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="/"><div>Extras</div></a>
																<ul className="sub-menu-container mega-menu-dropdown">
																	<li className="menu-item">
																		<a className="menu-link" href="blank-page.html"><div>Blank Page</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="maintenance.html"><div>Maintenance Page</div></a>
																	</li>
																	<li className="menu-item">
																		<a className="menu-link" href="sitemap.html"><div>Sitemap</div></a>
																	</li>
																</ul>
															</li>
														</ul>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</li>
								<li className="menu-item mega-menu">
									<a className="menu-link" href="/"><div>Portfolio</div></a>
									<div className="mega-menu-content mega-menu-style-2">
										<div className="container">
											<div className="row">
												<ul className="sub-menu-container mega-menu-column col">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="/"><div>Grids</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href="portfolio-1.html"><div>1 Column</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-2.html"><div>2 Columns</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-3.html"><div>3 Columns</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio.html"><div>4 Columns</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-5.html"><div>5 Columns</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-6.html"><div>6 Columns</div></a>
															</li>
														</ul>
													</li>
												</ul>
												<ul className="sub-menu-container mega-menu-column col">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="/"><div>Masonry</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href="portfolio-mixed-masonry.html"><div>Mixed Columns</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-2-masonry.html"><div>2 Columns</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-3-masonry.html"><div>3 Columns</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-masonry.html"><div>4 Columns</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-5-masonry.html"><div>5 Columns</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-6-masonry.html"><div>6 Columns</div></a>
															</li>
														</ul>
													</li>
												</ul>
												<ul className="sub-menu-container mega-menu-column col">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="/"><div>Loading Styles</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href="portfolio.html"><div>jQuery Filter</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-jpagination.html"><div>jQuery Pagination</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-infinity-scroll.html"><div>Infinity Scroll</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-ajax.html"><div>AJAX In Page</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-ajax-in-modal.html"><div>AJAX In Modal</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-filter-styles.html"><div>Filter Styles</div></a>
															</li>
														</ul>
													</li>
												</ul>
												<ul className="sub-menu-container mega-menu-column col">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="/"><div>Single Project</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href="portfolio-single-extended.html"><div>Extended Item</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-single-fullwidth.html"><div>Parallax Image</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-single-gallery-full.html"><div>Slider Gallery</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-single-video-fullwidth-left-sidebar.html"><div>HTML5 Video</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-single-thumbs-right-sidebar.html"><div>Masonry Thumbs</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-single-video-both-sidebar.html"><div>Embed Video</div></a>
															</li>
														</ul>
													</li>
												</ul>
												<ul className="sub-menu-container mega-menu-column col">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="/"><div>Layouts</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href="portfolio-nomargin.html"><div>Default</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-1-alt-right-sidebar.html"><div>Right Sidebar</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-3-left-sidebar.html"><div>Left Sidebar</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-2-both-sidebar.html"><div>Both Sidebar</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-fullwidth-notitle.html"><div>100% Width</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="portfolio-parallax.html"><div>Parallax</div></a>
															</li>
														</ul>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</li>
								<li className="menu-item mega-menu">
									<a className="menu-link" href="/"><div>Blog</div></a>
									<div className="mega-menu-content mega-menu-style-2">
										<div className="container">
											<div className="row">
												<ul className="sub-menu-container mega-menu-column col-lg-3">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="/"><div>Default</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href="blog.html"><div>Right Sidebar</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-left-sidebar.html"><div>Left Sidebar</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-both-sidebar.html"><div>Both Sidebar</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-full-width.html"><div>Full Width</div></a>
															</li>
														</ul>
													</li>
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="/"><div>Timeline</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href="blog-timeline-right-sidebar.html"><div>Right Sidebar</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-timeline-left-sidebar.html"><div>Left Sidebar</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-timeline.html"><div>Full Width</div></a>
															</li>
														</ul>
													</li>
												</ul>
												<ul className="sub-menu-container mega-menu-column col-lg-3">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="/"><div>Masonry</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href="blog-masonry.html"><div>4 Columns</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-masonry-3.html"><div>3 Columns</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-masonry-2.html"><div>2 Columns</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-masonry-full.html"><div>100% Width</div></a>
															</li>
														</ul>
													</li>
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="/"><div>Grid</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href="blog-grid.html"><div>4 Columns</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-grid-3.html"><div>3 Columns</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-grid-2.html"><div>2 Columns</div></a>
															</li>
														</ul>
													</li>
												</ul>
												<ul className="sub-menu-container mega-menu-column col-lg-3">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="/"><div>Small Thumbs</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href="blog-small-left-sidebar.html"><div>Left Sidebar</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-small.html"><div>Right Sidebar</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-small-both-sidebar.html"><div>Both Sidebar</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-small-full-width.html"><div>Full Width</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-small-alt.html"><div>Alternate Layout</div></a>
															</li>
														</ul>
													</li>
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="/"><div>Item Splitting</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href="blog-grid.html"><div>Pagination</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-masonry.html"><div>Infinite Scroll</div></a>
															</li>
														</ul>
													</li>
												</ul>
												<ul className="sub-menu-container mega-menu-column col-lg-3">
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="/"><div>Single</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href="blog-single.html"><div>Default Layout</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-single-left-sidebar.html"><div>Left Sidebar</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-single-full.html"><div>Full Width</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-single-small.html"><div>Small Image</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-single-split-right-sidebar.html"><div>Split Layout</div></a>
															</li>
														</ul>
													</li>
													<li className="menu-item mega-menu-title">
														<a className="menu-link" href="/"><div>Comments Module</div></a>
														<ul className="sub-menu-container">
															<li className="menu-item">
																<a className="menu-link" href="blog-single-left-sidebar.html/comments"><div>Facebook Comments</div></a>
															</li>
															<li className="menu-item">
																<a className="menu-link" href="blog-single-small.html/comments"><div>Disqus Comments</div></a>
															</li>
														</ul>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</li>
								<li className="menu-item">
									<a className="menu-link" href="shop.html"><div>Shop</div></a>
									<ul className="sub-menu-container">
										<li className="menu-item">
											<a className="menu-link" href="shop.html"><div>4 Columns</div></a>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="shop-3.html"><div>3 Columns</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="shop-3.html"><div>Full Width</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="shop-3-right-sidebar.html"><div>Right Sidebar</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="shop-3-left-sidebar.html"><div>Left Sidebar</div></a>
												</li>
											</ul>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="shop-2.html"><div>2 Columns</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="shop-2-right-sidebar.html"><div>Right Sidebar</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="shop-2-left-sidebar.html"><div>Left Sidebar</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="shop-2-both-sidebar.html"><div>Both Sidebar</div></a>
												</li>
											</ul>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="shop-1.html"><div>1 Columns</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="shop-1.html"><div>Full Width</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="shop-1-right-sidebar.html"><div>Right Sidebar</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="shop-1-left-sidebar.html"><div>Left Sidebar</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="shop-1-both-sidebar.html"><div>Both Sidebar</div></a>
												</li>
											</ul>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="shop-category-parallax.html"><div>Categories - Parallax</div></a>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="shop-combination-filter.html"><div>Combination Filter</div></a>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="shop-single.html"><div>Single Product</div></a>
											<ul className="sub-menu-container">
												<li className="menu-item">
													<a className="menu-link" href="shop-single.html"><div>Full Width</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="shop-single-right-sidebar.html"><div>Right Sidebar</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="shop-single-left-sidebar.html"><div>Left Sidebar</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="shop-single-both-sidebar.html"><div>Both Sidebar</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="shop-single-color.html"><div>Color Options</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="shop-single-sticky.html"><div>Sticky Aside</div></a>
												</li>
												<li className="menu-item">
													<a className="menu-link" href="shop-single-list.html"><div>Feature List</div></a>
												</li>
											</ul>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="cart.html"><div>Cart</div></a>
										</li>
										<li className="menu-item">
											<a className="menu-link" href="checkout.html"><div>Checkout</div></a>
										</li>
									</ul>
								</li>
								<li className="menu-item mega-menu">
									<a className="menu-link" href="/"><div>Shortcodes</div></a>
									<div className="mega-menu-content">
										<div className="container">
											<div className="row">
												<ul className="sub-menu-container mega-menu-column col">
													<li className="menu-item">
														<a className="menu-link" href="animations.html"><div><i className="icon-magic"></i>Animations</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="buttons.html"><div><i className="icon-link"></i>Buttons</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="carousel.html"><div><i className="icon-heart3"></i>Carousel</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="charts.html"><div><i className="icon-bar-chart"></i>Charts</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="clients.html"><div><i className="icon-apple"></i>Clients</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="columns-grids.html"><div><i className="icon-th-large"></i>Columns</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="counters.html"><div><i className="icon-time"></i>Counters</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="read-more.html"><div><i className="icon-ellipsis-h"></i>Read More</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="component-datatable.html"><div><i className="icon-table"></i>Data Tables</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="component-datepicker.html"><div><i className="icon-calendar3"></i>Date &amp; Time Pickers</div></a>
													</li>
												</ul>
												<ul className="sub-menu-container mega-menu-column col">
													<li className="menu-item">
														<a className="menu-link" href="dividers.html"><div><i className="icon-indent-right"></i>Dividers</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="featured-boxes.html"><div><i className="icon-lightbulb"></i>Icon Boxes</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="gallery.html"><div><i className="icon-picture"></i>Galleries</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="headings-dropcaps.html"><div><i className="icon-pencil2"></i>Heading Styles</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="icon-lists.html"><div><i className="icon-list-alt"></i>Icon Lists</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="gradients.html"><div><i className="icon-tint"></i>Gradients</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="lightbox.html"><div><i className="icon-resize-full"></i>Lightbox</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="item-overlays.html"><div><i className="icon-line-marquee-plus"></i>Item Overlays</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="form-elements.html"><div><i className="icon-edit"></i>Form Elements</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="component-uploads.html"><div><i className="icon-line-upload"></i>File Uploads</div></a>
													</li>
												</ul>
												<ul className="sub-menu-container mega-menu-column col">
													<li className="menu-item">
														<a className="menu-link" href="lists-cards.html"><div><i className="icon-th-list"></i>Lists &amp; Cards</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="maps.html"><div><i className="icon-map-marker2"></i>Maps</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="media-embeds.html"><div><i className="icon-play"></i>Media Embeds</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="modal-popovers.html"><div><i className="icon-move"></i>Modal Boxes</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="navigation.html"><div><i className="icon-align-justify2"></i>Navigations</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="pagination-progress.html"><div><i className="icon-cogs"></i>Pagination</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="pie-skills.html"><div><i className="icon-tasks"></i>Pies &amp; Skills</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="shape-dividers.html"><div><i className="icon-shapes"></i>Shape Dividers</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="component-range-slider.html"><div><i className="icon-line-move"></i>Range Slider</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="component-ratings.html"><div><i className="icon-star3"></i>Star Ratings</div></a>
													</li>
												</ul>
												<ul className="sub-menu-container mega-menu-column col">
													<li className="menu-item">
														<a className="menu-link" href="pricing.html"><div><i className="icon-dollar"></i>Pricing Boxes</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="process-steps.html"><div><i className="icon-thumbs-up"></i>Process Steps</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="promo-boxes.html"><div><i className="icon-rocket"></i>Promo Boxes</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="quotes-blockquotes.html"><div><i className="icon-quote-left"></i>Blockquotes</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="responsive.html"><div><i className="icon-laptop2"></i>Responsive</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="sections.html"><div><i className="icon-folder-open"></i>Sections</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="social-icons.html"><div><i className="icon-facebook2"></i>Social Icons</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="hover-animations.html"><div><i className="icon-hand-pointer"></i>Hover Animations</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="component-select-picker.html"><div><i className="icon-select"></i>Select Picker</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="component-select-box.html"><div><i className="icon-line-columns"></i>Select Boxes</div></a>
													</li>
												</ul>
												<ul className="sub-menu-container mega-menu-column col">
													<li className="menu-item">
														<a className="menu-link" href="style-boxes.html"><div><i className="icon-exclamation-sign"></i>Alert Boxes</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="styled-icons.html"><div><i className="icon-flag2"></i>Styled Icons</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="tables.html"><div><i className="icon-table"></i>Tables</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="tabs.html"><div><i className="icon-star3"></i>Tabs</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="testimonials-twitter.html"><div><i className="icon-user4"></i>Testimonials</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="thumbnails-slider.html"><div><i className="icon-camera3"></i>Thumbnails</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="toggles-accordions.html"><div><i className="icon-ok-circle"></i>Toggles</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="lazy-loading.html"><div><i className="icon-line-loader"></i>Lazy Loading</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="component-radios-switches.html"><div><i className="icon-line-square-check"></i>Radios &amp; Switches</div></a>
													</li>
													<li className="menu-item">
														<a className="menu-link" href="flip-cards.html"><div><i className="icon-refresh"></i>Flip Cards</div></a>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</li>
							</ul>

						</nav>

                        

						<form className="top-search-form" action="search.html" method="get">
							<input type="text" name="q" className="form-control"  placeholder="Type Hit Enter.."  />
						</form>

					</div>
				</div>
			</div>
			<div className="header-wrap-clone"></div>
		</header>
        
        




        </div>
    );
};

export default Header;