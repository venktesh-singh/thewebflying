import React from 'react';
import {Link} from 'react-router-dom';

const Contact = () =>{
    return(
        <>
            <link rel="alternate" href="https://www.thewebflying.com/contact.php" hreflang="en-us" />
            <title>Contact-us✅Website Designing Company in Delhi✅WebFlying Technologies</title>
            <meta name="Description" content="WebFlying Technologies is a Professional Website Designing Company in Delhi, an SEO Company in India, a Mobile App Development Company in Delhi." />
            <meta
                name="keywords"
                content="Website Designing Company in Delhi,SEO Agency in Delhi, SEO Comnpany in India, Digital Marketing Company in India, SEO Services in Delhi, Mobile Application Development Company in Noida, SEO Agency in Noida"
            />
            <div class="clearfix"></div>

            <section class="inner-section" style={{'background': 'url(assets/images/contact-us.jpg)', 'backgroundPosition': 'center'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="inner-banner">
                                <div class="breadcrumb">
                                    <Link to='/'><span></span></Link>Home<span> </span>😉
                                    <h1></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="contact-section bb-1">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <h2 class="contact-heading mb-20">Get in Touch with us Our Technical Consultant get back-Your Soon</h2>
                            <form method="post" id="myform" action="success.php">
                                <div class="row contact-form">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <input type="text" class="form-control" name="fname" placeholder="Full Name *" value="" required="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="phone" minlength="10" maxlength="10" class="form-control" placeholder="Your Phone *" required="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="email" name="email" class="form-control" placeholder="Your Email *" value="" required="" />
                                        </div>
                                        <div class="form-group">
                                            <input type="text" name="subject" class="form-control" id="subject" placeholder="Subject *" value="" required="" />
                                        </div>
                                        <div class="form-group">
                                            <textarea type="text" name="message" class="form-control" id="message" rows="5" placeholder="Message *" value="" required=""></textarea>
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" name="submit" id="submit" class="btnsubmit" value=""><i class="fa fa-send-o"></i> Submit</button>

                                <span id="showhide" style={{'color': 'green', 'display': 'none', 'fontWeight': 'bold'}}>Form has been Submitted Successfully</span>
                            </form>
                        </div>

                        <div class="col-md-6 col-sm-6">
                            <ul class="contact-list">
                                <li>
                                    <i class="fa fa-map-marker"></i>
                                    <h4>Head Office</h4>
                                    <p>B-83, B Block, Sector 10, Noida, Uttar Pradesh 201301</p>
                                </li>

                                <li>
                                    <i class="fa fa-fax"></i>
                                    <h4>Mobile Number</h4>
                                    <p><a href="tel:+8383860018" class="phone">+91 (838) 386-0018</a></p>
                                </li>
                                <li>
                                    <i class="fa fa-envelope"></i>
                                    <h4>Email</h4>
                                    <p><a href="mailto:info@thewebflying.con " target="_top">info@thewebflying.con </a></p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <div class="map-section">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.3351206709012!2d77.32677401464309!3d28.589721682434696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce4ff0dafa10f%3A0x55b9dd18d93b2edc!2sB-83%2C%20B%20Block%2C%20Sector%2010%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1571162869784!5m2!1sen!2sin"
                    width="100%"
                    height="450"
                    frameborder="0"
                    style={{'border': 0}}
                    allowfullscreen=""
                ></iframe>
            </div>


        </>
    )
}

export default Contact;