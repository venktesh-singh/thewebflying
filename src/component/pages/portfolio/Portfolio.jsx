import React from 'react';
import {Link} from 'react-router-dom';

const Portfolio = () =>{
    return(
        <>
            <title>✅वेबफलयिंग टेक्नोलॉजीज✅Portfolio✅Call us +91-8383860018</title>
            <meta name="description" content="We are the best SEO & Digital Marketing Services in Delhi,Website Designing Company in Delhi, our professionals have well experienced." />
            <meta
                name="keywords"
                content="SEO and Digital Marketing Company in India, Website Designing Company in Delhi, SEO Company in Delhi, SEO Services in India, SEO Agency in Mumbai, Digital Marketing Company in Bangalore,Website Designing Company in Delhi, Website Development Company in India, Website Designing Company in Australia, Website Development Company in Delhi, iOS Development Company in India, Android Mobile App Development Company in India, Digital Marketing Company in Singapore, SEO Company in Singapore, SEO Company in Dubai, PPC Company in Delhi, best seo services provider"
            />
            <meta name="robots" content="index, follow" />
            <meta name="cc" content="INDEX, FOLLOW" />
            <meta name="robots" content="index, follow" />
            <meta name="robots" content="all" />
            <meta name="revisit-after" content="daily" />
            <meta name="revisit-after" content="daily" />
            <link rel="canonical" href="https://www.thewebflying.com/portfolio.php" />
            <meta
                name="abstract"
                content="SEO and Digital Marketing Company in India, Website Designing Company in Delhi, SEO Company in Delhi, SEO Services in India, SEO Agency in Mumbai, Digital Marketing Company in Bangalore,Website Designing Company in Delhi, Website Development Company in India, Website Designing Company in Australia, Website Development Company in Delhi, iOS Development Company in India, Android Mobile App Development Company in India, Digital Marketing Company in Singapore, SEO Company in Singapore, SEO Company in Dubai, PPC Company in Delhi, best seo services provider."
            />
            <meta name="author" content="thewebflying" />
            <meta name="author" content="Mahesh Maurya" />
            <meta name="contact" content="info@thewebflying.com" />
            <meta name="contact" content="info@thewebflying.com" />
            <meta name="copyright" content="the Metatags thewebflying" />
            <meta name="copyright" content="the Metatags thewebflying" />
            <meta name="distribution" content="world-global" />
            <meta name="expires" content="tue, 01 Jun 2022" />
            <meta name="googlebot" content="noodp" />
            <meta name="language" content="English" />
            <meta name="news_keywords" content="offer" />
            <meta name="rating" content="general" />
            <meta name="robots" content="noydir" />
            <meta httpss-equiv="Content-Script-Type" content="text/javascript" />
            <meta httpss-equiv="Content-Style-Type" content="text/css" />
            <meta httpss-equiv="Window-Target" content="_top" />
            <meta name="dc.language" content="text" />

            <div class="clearfix"></div>

            <section class="inner-section" style={{'background': 'url(/assets/images/about-banner.jpg)', 'backgroundPosition': 'center'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="inner-banner">
                                <div class="breadcrumb">
                                    <Link to="/"><span></span></Link>Home<span> </span>😉
                                    <h1></h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="gallery-section">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-md-12">
                            <h3>
                                <center>
                                    PORTFOLIO
                                </center>
                            </h3>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 pdnone">
                            <div class="gallery-box zoom">
                                <a href="#" class="thumbnail"> <img src="assets/images/seo.PNG" alt="Website Designing Agency" /></a>

                                <div class="overlay">
                                    <h6><Link to="/seo-optimization">SEO Optimization</Link></h6>
                                    <Link to="/seo-optimization">View More</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 pdnone">
                            <div class="gallery-box zoom">
                                <a href="#" class="thumbnail"> <img src="assets/images/web-development.PNG" alt="Web Development Company " /></a>

                                <div class="overlay">
                                    <h6><Link to='/website-development-portfolio'>Website Development</Link></h6>
                                    <Link to='/website-development-portfolio'>View More</Link>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4 pdnone">
                            <div class="gallery-box zoom">
                                <a href="#" class="thumbnail"> <img src="assets/images/web-designing.PNG" alt="Website Designing Services" /></a>

                                <div class="overlay">
                                    <h6><Link to='/website-designing-portfolio'>Website Designing</Link></h6>
                                    <Link to='/website-designing-portfolio'>View More</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 pdnone">
                            <div class="gallery-box zoom">
                                <a href="#" class="thumbnail"> <img src="assets/images/brochur.jpg" alt="Graphic Design Services" /></a>

                                <div class="overlay">
                                    <h6><Link to="/brochure-design">Brochure Design</Link></h6>
                                    <Link to="/brochure-design">View More</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 pdnone">
                            <div class="gallery-box zoom">
                                <a href="#" class="thumbnail"> <img src="assets/images/psd.PNG" alt="Logo Designing Company" /></a>

                                <div class="overlay">
                                    <h6><Link to="/psd-designing">PSD Designing</Link></h6>
                                    <Link to="/psd-designing">View More</Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 pdnone">
                            <div class="gallery-box zoom">
                                <a href="#" class="thumbnail"> <img src="assets/images/agartala_logo.jpg" alt="Brand Designing" /></a>

                                <div class="overlay">
                                    <h6><Link to="/logo-designing">logo Designing</Link></h6>
                                    <Link to="/logo-designing">View More</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio;