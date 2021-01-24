import React from 'react';

const Footer = () => {
    // style="background: url('images/world-map.png') no-repeat center center; background-size: 100%;"

    const footerStyle = {

        backgroundImage: "url('')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "100%"

    }



    return (
            <div id="wrapper" className="clearfix">
                <footer id="footer" className="dark">
                    <div className="container">
                        
                        <div className="footer-widgets-wrap">

                            <div className="row col-mb-50">
                                <div className="col-md-6 col-lg-4">

                                    <div className="widget clearfix">

                                        <img src="images/footer-widget-logo.png" alt="" className="footer-logo" />

                                        <p>We believe in <strong>Simple</strong>, <strong>Creative</strong> &amp; <strong>Flexible</strong> Design Standards with a Retina &amp; Responsive Approach. Browse the amazing Features this template offers.</p>

                                        <div style={footerStyle}>
                                            <address>
                                                <strong>Headquarters:</strong><br />
                                                795 Folsom Ave, Suite 600<br />
                                                San Francisco, CA 94107<br />
                                            </address>
                                            <abbr title="Phone Number"><strong>Phone:</strong></abbr> (1) 8547 632521<br />
                                            <abbr title="Fax"><strong>Fax:</strong></abbr> (1) 11 4752 1433<br />
                                            <abbr title="Email Address"><strong>Email:</strong></abbr> info@canvas.com
                                        </div>

                                    </div>

                                </div>

                                <div className="col-md-6 col-lg-4">

                                    <div className="widget clearfix">
                                        <h4>Client Testimonials</h4>

                                        <div className="fslider testimonial no-image bg-transparent border-0 shadow-none p-0" data-animation="slide" data-arrows="false">
                                            <div className="flexslider">
                                                <div className="slider-wrap">
                                                    <div className="slide">
                                                        <div className="testi-image">
                                                            <a href="/"><img src="images/testimonials/3.jpg" alt="Customer Testimonails" /></a>
                                                        </div>
                                                        <div className="testi-content">
                                                            <p>Similique fugit repellendus expedita excepturi iure perferendis provident quia eaque. Repellendus, vero numquam?</p>
                                                            <div className="testi-meta">
                                                                Steve Jobs
                                                                <span>Apple Inc.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slide">
                                                        <div className="testi-image">
                                                            <a href="/"><img src="images/testimonials/2.jpg" alt="Customer Testimonails" /></a>
                                                        </div>
                                                        <div className="testi-content">
                                                            <p>Natus voluptatum enim quod necessitatibus quis expedita harum provident eos obcaecati id culpa corporis molestias.</p>
                                                            <div className="testi-meta">
                                                                Collis Ta'eed
                                                                <span>Envato Inc.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="slide">
                                                        <div className="testi-image">
                                                            <a href="/"><img src="images/testimonials/1.jpg" alt="Customer Testimonails" /></a>
                                                        </div>
                                                        <div className="testi-content">
                                                            <p>Incidunt deleniti blanditiis quas aperiam recusandae consequatur ullam quibusdam cum libero illo rerum!</p>
                                                            <div className="testi-meta">
                                                                John Doe
                                                                <span>XYZ Inc.</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="widget clearfix">

                                        <a href="/" className="social-icon si-small si-rounded si-facebook">
                                            <i className="icon-facebook"></i>
                                            <i className="icon-facebook"></i>
                                        </a>

                                        <a href="/" className="social-icon si-small si-rounded si-twitter">
                                            <i className="icon-twitter"></i>
                                            <i className="icon-twitter"></i>
                                        </a>

                                        <a href="/" className="social-icon si-small si-rounded si-gplus">
                                            <i className="icon-gplus"></i>
                                            <i className="icon-gplus"></i>
                                        </a>

                                        <a href="/" className="social-icon si-small si-rounded si-pinterest">
                                            <i className="icon-pinterest"></i>
                                            <i className="icon-pinterest"></i>
                                        </a>

                                        <a href="/" className="social-icon si-small si-rounded si-vimeo">
                                            <i className="icon-vimeo"></i>
                                            <i className="icon-vimeo"></i>
                                        </a>

                                        <a href="/" className="social-icon si-small si-rounded si-github">
                                            <i className="icon-github"></i>
                                            <i className="icon-github"></i>
                                        </a>

                                        <a href="/" className="social-icon si-small si-rounded si-yahoo">
                                            <i className="icon-yahoo"></i>
                                            <i className="icon-yahoo"></i>
                                        </a>

                                        <a href="/" className="social-icon si-small si-rounded si-linkedin">
                                            <i className="icon-linkedin"></i>
                                            <i className="icon-linkedin"></i>
                                        </a>

                                    </div>

                                </div>

                                <div className="col-md-6 col-lg-4">

                                    <div className="widget quick-contact-widget form-widget clearfix">

                                        <h4>Send Message</h4>

                                        <div className="form-result"></div>

                                        <form id="quick-contact-form" name="quick-contact-form" action="include/form.php" method="post" className="quick-contact-form mb-0">

                                            <div className="form-process">
                                                <div className="css3-spinner">
                                                    <div className="css3-spinner-scaler"></div>
                                                </div>
                                            </div>

                                            <div className="input-group mx-auto">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><i className="icon-user"></i></div>
                                                </div>
                                                <input type="text" className="required form-control" id="quick-contact-form-name" name="quick-contact-form-name" value="" placeholder="Full Name" />
                                            </div>
                                            <div className="input-group mx-auto">
                                                <div className="input-group-prepend">
                                                    <div className="input-group-text"><i className="icon-email2"></i></div>
                                                </div>
                                                <input type="text" className="required form-control email" id="quick-contact-form-email" name="quick-contact-form-email" value="" placeholder="Email Address" />
                                            </div>
                                            <textarea className="required form-control input-block-level short-textarea" id="quick-contact-form-message" name="quick-contact-form-message" rows="4" cols="30" placeholder="Message"></textarea>
                                            <input type="text" className="d-none" id="quick-contact-form-botcheck" name="quick-contact-form-botcheck" value="" />
                                            <input type="hidden" name="prefix" value="quick-contact-form-" />
                                            <button type="submit" id="quick-contact-form-submit" name="quick-contact-form-submit" className="btn btn-danger m-0" value="submit">Send Email</button>

                                        </form>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                    
                    <div id="copyrights">
                        <div className="container">

                            <div className="row justify-content-between">
                                <div className="col-12 col-lg-auto text-center text-lg-left">
                                    <p className="mb-3">Copyrights &copy; 2020 All Rights Reserved by Canvas Inc.</p>
                                </div>

                                <div className="col-12 col-lg-auto text-center text-lg-right">
                                    <div className="copyrights-menu copyright-links mb-0">
                                        <a href="/">Home</a>/<a href="/">About</a>/<a href="/">Features</a>/<a href="/">Portfolio</a>/<a href="/">FAQs</a>/<a href="/">Contact</a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </footer>
            </div>
    );
};

export default Footer;