import React from 'react';





const Footer = () => {

    const footerStyle = {

        background: "url('images/footer-bg.jpg')",
        backgroundSize: "cover",
    }

    
    const imageStyle = {
        marginTop: "8px",
        paddingRight: "18px",
        borderRight: "1px solid #4A4A4A"
    }

    return (
        <div id="wrapper" className="clearfix">
            <footer id="footer" className="dark" style={footerStyle}>
                <div className="container">
                    <div className="footer-widgets-wrap">
                        <div className="row col-mb-50">
                            <div className="col-md-8">
                                <div className="widget clearfix">

                                    <img style={imageStyle} src="https://www.gipfelclimbing.com/wp-content/uploads/2018/04/footer-logo.png" alt="" classNameName="alignleft"  />

                                    <p>We believe in <strong>Simple</strong>, <strong>Creative</strong> &amp; <strong>Flexible</strong> Design Standards with a Retina &amp; Responsive Approach. Browse the amazing Features this template offers.</p>

                                    <div className="line" style={{margin: "30px 0"}}></div>

                                    <div className="row col-mb-30">
                                        <div className="col-6 col-lg-3 widget_links">
                                            <ul>
                                                <li><a href="/">Home</a></li>
                                                <li><a href="/">About</a></li>
                                                <li><a href="/">FAQs</a></li>
                                                <li><a href="/">Support</a></li>
                                                <li><a href="/">Contact</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-6 col-lg-3 widget_links">
                                            <ul>
                                                <li><a href="/">Shop</a></li>
                                                <li><a href="/">Portfolio</a></li>
                                                <li><a href="/">Blog</a></li>
                                                <li><a href="/">Events</a></li>
                                                <li><a href="/">Forums</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-6 col-lg-3 widget_links">
                                            <ul>
                                                <li><a href="/">Corporate</a></li>
                                                <li><a href="/">Agency</a></li>
                                                <li><a href="/">eCommerce</a></li>
                                                <li><a href="/">Personal</a></li>
                                                <li><a href="/">One Page</a></li>
                                            </ul>
                                        </div>

                                        <div className="col-6 col-lg-3 widget_links">
                                            <ul>
                                                <li><a href="/">Restaurant</a></li>
                                                <li><a href="/">Wedding</a></li>
                                                <li><a href="/">App Showcase</a></li>
                                                <li><a href="/">Magazine</a></li>
                                                <li><a href="/">Landing Page</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            
                            <div className="col-md-4">
                                <div className="widget clearfix" style={{marginBottom: "-20px"}}>

                                    <div className="row col-mb-30">
                                        <div className="col-sm-6 col-md-12 col-lg-6">
                                            <div className="counter counter-small" style={{color: "/35BBAA"}}><span data-from="50" data-to="15065421" data-refresh-interval="80" data-speed="3000" data-comma="true"></span></div>
                                            <h5 className="mb-0">Total Downloads</h5>
                                        </div>

                                        <div className="col-sm-6 col-md-12 col-lg-6">
                                            <div className="counter counter-small" style={{color: "/2CAACA"}}><span data-from="100" data-to="18465" data-refresh-interval="50" data-speed="2000" data-comma="true"></span></div>
                                            <h5 className="mb-0">Clients</h5>
                                        </div>
                                    </div>

                                </div>

                                <div className="widget subscribe-widget clearfix">
                                    <h5><strong>Subscribe</strong> to Our Newsletter to get Important News, Amazing Offers &amp; Inside Scoops:</h5>
                                    <div className="widget-subscribe-form-result"></div>
                                    <form id="widget-subscribe-form" action="include/subscribe.php" method="post" className="mb-0">
                                        <div className="input-group mx-auto">
                                            <div className="input-group-prepend">
                                                <div className="input-group-text"><i className="icon-email2"></i></div>
                                            </div>
                                            <input type="email" id="widget-subscribe-form-email" name="widget-subscribe-form-email" className="form-control required email" placeholder="Enter your Email" />
                                            <div className="input-group-append">
                                                <button className="btn btn-success" type="submit">Subscribe</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>

                                <div className="widget">
                                    <div className="row col-mb-30">
                                        <div className="col-sm-6 col-md-12 col-lg-6 clearfix">
                                            <a href="/home" className="social-icon si-dark si-colored si-facebook mb-0" style={{marginRight: "10px"}}>
                                                <i className="icon-facebook"></i>
                                                <i className="icon-facebook"></i>
                                            </a>
                                            <a href="/home"><small style={{display: "block", marginTop: "3px"}}><strong>Like us</strong><br />on Facebook</small></a>
                                        </div>

                                        <div className="col-sm-6 col-md-12 col-lg-6 clearfix">
                                            <a href="/" className="social-icon si-dark si-colored si-rss mb-0" style={{marginRight: "10px"}}>
                                                <i className="icon-rss"></i>
                                                <i className="icon-rss"></i>
                                            </a>
                                            <a href="/"><small style={{display: "block", marginTop: "3px"}}><strong>Subscribe</strong><br />to RSS Feeds</small></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                
                <div id="copyrights">
                    <div className="container">

                        <div className="row justify-content-between col-mb-30">
                            <div className="col-12 col-lg-auto text-center text-lg-left">
                                <div className="copyrights-menu copyright-links clearfix">
                                    <a href="/">Home</a>/<a href="/">About</a>/<a href="/">Features</a>/<a href="/">Portfolio</a>/<a href="/">FAQs</a>/<a href="/">Contact</a>
                                </div>
                                Copyrights &copy; 2020 All Rights Reserved by Canvas Inc.
                            </div>

                            <div className="col-12 col-lg-auto text-center text-lg-right">
                                <a href="/" className="social-icon inline-block si-small si-borderless mb-0 si-facebook">
                                    <i className="icon-facebook"></i>
                                    <i className="icon-facebook"></i>
                                </a>

                                <a href="/" className="social-icon inline-block si-small si-borderless mb-0 si-twitter">
                                    <i className="icon-twitter"></i>
                                    <i className="icon-twitter"></i>
                                </a>

                                <a href="/" className="social-icon inline-block si-small si-borderless mb-0 si-gplus">
                                    <i className="icon-gplus"></i>
                                    <i className="icon-gplus"></i>
                                </a>

                                <a href="/" className="social-icon inline-block si-small si-borderless mb-0 si-pinterest">
                                    <i className="icon-pinterest"></i>
                                    <i className="icon-pinterest"></i>
                                </a>

                                <a href="/" className="social-icon inline-block si-small si-borderless mb-0 si-vimeo">
                                    <i className="icon-vimeo"></i>
                                    <i className="icon-vimeo"></i>
                                </a>

                                <a href="/" className="social-icon inline-block si-small si-borderless mb-0 si-github">
                                    <i className="icon-github"></i>
                                    <i className="icon-github"></i>
                                </a>

                                <a href="/" className="social-icon inline-block si-small si-borderless mb-0 si-yahoo">
                                    <i className="icon-yahoo"></i>
                                    <i className="icon-yahoo"></i>
                                </a>

                                <a href="/" className="social-icon inline-block si-small si-borderless mb-0 si-linkedin">
                                    <i className="icon-linkedin"></i>
                                    <i className="icon-linkedin"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;