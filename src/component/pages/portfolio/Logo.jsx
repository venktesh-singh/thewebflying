import React from 'react';
import {Link} from 'react-router-dom';

const Logo = () =>{
    return(
        <>
            <link rel="alternate" href="https://www.thewebflying.com/logo-designing.php" hreflang="en-us" />
            <div class="clearfix"></div>

            <section class="inner-section" style={{'background': 'url(assets/images/about-banner.jpg)', 'backgroundPosition': 'center'}}>
                <div class="container">
                    <div class="row">
                        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div class="inner-banner">
                                <div class="breadcrumb">
                                    <Link to="/"><span>Home</span></Link> <span> → </span> Logo Designing
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
                            <h6>
                                Our Some Valuable Clients <br />
                                Recent,s Logo Designing
                            </h6>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 pdnone">
                            <div class="gallery-box zoom">
                                <a href="#" class="thumbnail"> <img src="assets/images/seo.PNG" alt="" /></a>

                                <div class="overlay">
                                    <h6><a href="#">Project Name</a></h6>
                                    <a href="#">View More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 pdnone">
                            <div class="gallery-box zoom">
                                <a href="#" class="thumbnail"> <img src="assets/images/web-development.PNG" alt="" /></a>

                                <div class="overlay">
                                    <h6><a href="#">Project Name 2</a></h6>
                                    <a href="#">View More</a>
                                </div>
                            </div>
                        </div>

                        <div class="col-xs-12 col-sm-6 col-md-3 col-lg-4 pdnone">
                            <div class="gallery-box zoom">
                                <a href="#" class="thumbnail"> <img src="assets/images/web-designing.PNG" alt="" /></a>

                                <div class="overlay">
                                    <h6><a href="#">Project Name 3</a></h6>
                                    <a href="#">View More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 pdnone">
                            <div class="gallery-box zoom">
                                <a href="#" class="thumbnail"> <img src="assets/images/brochur.jpg" alt="" /></a>

                                <div class="overlay">
                                    <h6><a href="#">Project Name 4</a></h6>
                                    <a href="#">View More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 pdnone">
                            <div class="gallery-box zoom">
                                <a href="#" class="thumbnail"> <img src="assets/images/psd.PNG" alt="" /></a>

                                <div class="overlay">
                                    <h6><a href="#">Project Name 5</a></h6>
                                    <a href="#">View More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-4 pdnone">
                            <div class="gallery-box zoom">
                                <a href="#" class="thumbnail"> <img src="assets/images/agartala_logo.jpg" alt="" /></a>

                                <div class="overlay">
                                    <h6><a href="#">Project Name 6</a></h6>
                                    <a href="#">View More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Logo;