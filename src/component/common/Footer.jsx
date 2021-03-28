import React from 'react';

const Footer = () =>{
    return(
        <>
        <section className="footer-first">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="footer-logo" data-aos="zoom-in-left" data-aos-duration="1700">
                                    <img src="assets/images/footer-logo.png" alt="thewebflying" />
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="footer-links2">
                                    <ul>
                                        <li data-aos="zoom-in-up" data-aos-duration="1700">
                                            <a href="https://www.facebook.com/thewebflying" target="_blank"><i className="fa fa-facebook"></i> </a>
                                        </li>
                                        <li data-aos="zoom-in-down" data-aos-duration="1700">
                                            <a href=" https://twitter.com/WebFlying3" target="_blank"><i className="fa fa-twitter"></i> </a>
                                        </li>
                                        <li data-aos="zoom-in-up" data-aos-duration="1700">
                                            <a href="https://www.linkedin.com/company/thewebflying/" target="_blank"><i className="fa fa-linkedin"></i> </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
                        <div className="call-us" data-aos="zoom-in-up" data-aos-duration="1700">
                            <a href="https://api.whatsapp.com/send?phone=918383860018" target="_blank"><img src="assets/images/call-us-icon.png" alt="SEO Agency" /> </a>
                            <a href="skype:.cid.81501f8fd4b392"><img src="assets/images/skype-call-icon.png" alt="SEO Firm" /></a>
                            <div className="call-box" data-aos="zoom-in-left" data-aos-duration="1700">
                                <h4><span>Call Us on</span> +91-(838) 386-0018</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div className="footer-transparent">
            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="footer-heading" data-aos="zoom-in-up" data-aos-duration="1700">
                                <h6>Our Corporate Office</h6>
                            </div>
                        </div>

                        <div className="col-md-6 col-sm-6 col-xs-12">
                            <div className="footer_block" data-aos="zoom-in-up" data-aos-duration="1700">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3885989722226!2d77.32981471455861!3d28.588116792841646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5cf59dce495%3A0xc6321c394b1297c8!2sWebFlying%20Technologies!5e0!3m2!1sen!2sin!4v1581798567399!5m2!1sen!2sin"
                                    width="100%"
                                    height="150"
                                    frameborder="0"
                                    style={{border: '0'}}
                                    allowfullscreen=""
                                ></iframe>

                                <div className="text-left">
                                    <a className="pdf" href="TheWebFlying_Technologies_Profile.pdf" target="_blank"> <i className="fa fa-Download"></i> Download Company Profile</a>
                                    <a className="GSTIN" target="_blank"> <i className="fa fa-gstin"></i>GSTIN 09CDVPM6312D1ZB</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="footer_block" data-aos="zoom-in-up" data-aos-duration="1700">
                                <img src="assets/images/india-icon.png" alt="Google Promotion" />
                                <h4>India</h4>
                                <p>A-87, Room No-2, Near Renault Showroom, Noida,Gautam Budh Nagar, U.P.201301</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 col-xs-12">
                            <div className="footer_block1" data-aos="zoom-in-down" data-aos-duration="1700">
                                <a href="https://urlzs.com/1w8eY" target="_blank"><img src="assets/images/google-icon.png" alt="Website Promotion" /> </a>
                            </div>
                            <div className="footer_block2" data-aos="zoom-in-up" data-aos-duration="1700">
                                <a href="https://www.paypal.me/webflying" target="_blank"><img src="assets/images/paypal.png" alt="Paypal" /></a>
                            </div>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="footer-bottom1">
                                <h6 className="">We Work on Quality</h6>
                                <p className="">
                                    If you believe in what you do and observe that you can grow in your career, contribute to the business’ growth, and change your personal life with the results of your work, you will suitable work more laboriously
                                    to do organizational intentions daily.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="footer-bottom text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-sm-12 col-xs-12">
                            <p>
                                © Copyright 2014 <a href="https://www.thewebflying.com/"><span>WebFlying Technologies</span> </a> - All Rights Reserved.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <button onclick="topFunction()" id="myBtn" title="Go to top" style={{display: 'block'}}><i className="fa fa-arrow-up"></i></button>

        </>
    )
}

export default Footer;