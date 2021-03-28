import React from 'react';
import {Link} from 'react-router-dom';

const Header = () =>{
    return(
        <>
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PGQKPTR" height="0" width="0" style={{display: 'none', visibility: 'hidden',}}></iframe></noscript>

            <div className="" data-spy="affix" data-offset-top="197">
                <div className="header-top clear">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-5 col-sm-5 hidden-xs">
                                <div className="header-top-left header-top-info">
                                    <div className="social-bar">
                                        <ul>
                                            <b className="text-white" style={{paddingRight: '10px'}} >Follow Us</b>
                                            <li>
                                                <a className="fa fa-facebook" target="_blank" href=" https://www.facebook.com/thewebflying"></a>
                                            </li>
                                            <li>
                                                <a className="fa fa-twitter" target="_blank" href="https://twitter.com/WebFlying3"></a>
                                            </li>
                                            <li>
                                                <a className="fa fa-linkedin" target="_blank" href="https://www.linkedin.com/company/thewebflying/"></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-7 col-sm-7 col-xs-12">
                                <div className="header-top-right pull-right header-top-info">
                                    <ul>
                                        <li>
                                            <a className="headerphone" href="tel:91838386-0018"> <i className="fa fa-phone"></i> +91 (838) 386-0018</a>
                                        </li>
                                        <li>
                                            <a href="mailto:Info@thewebflying.com "> <i className="fa fa-envelope"></i> info@thewebflying.com </a>
                                        </li>
                                        <li><a href="http://thewebflying.com/contact.php"> Packages </a></li>
                                        <li>
                                            <a href="https://api.whatsapp.com/send?phone=918383860018" className="whatsap" target="_blank"> <i className="fa fa-whatsapp"></i> </a>
                                        </li>
                                        <li style={{padding: '0px'}}>
                                            <a href="skype:.cid.81501f8fd4b392" className="skype" target="_blank"><i className="fa fa-skype"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <nav id="menu-1" className="mega-menu">
                    <section className="menu-list-items">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 col-md-12">
                                    <ul className="menu-logo">
                                        <li>
                                            <Link to="/"><img id="logo_img" src="assets/images/logo.png" alt="logo" /> </Link>
                                        </li>
                                    </ul>
                                    <ul className="menu-links">
                                        <li className="">
                                            <Link to="/"> <i class="fa fa-home"></i> </Link>
                                        </li>

                                        <li class="hoverTrigger">
                                            <Link to="/#">
                                                Company Profile<i class="fa fa-angle-down fa-indicator"></i>
                                                <div class="mobileTriggerButton"></div>
                                            </Link>
                                            <ul class="drop-down-multilevel effect-expand-top" style={{'transition':'all 400ms ease 0s' }} >
                                                <li><Link to="/about-us"> About Us </Link></li>
                                                <li><Link to="/our-team"> Our Team </Link></li>
                                                <li><Link to="/career"> Career </Link></li>
                                            </ul>
                                        </li>
                                        <li class="hoverTrigger">
                                            <Link to="/#">
                                                Technologies<i class="fa fa-angle-down fa-indicator"></i>
                                                <div class="mobileTriggerButton"></div>
                                            </Link>
                                            <ul class="drop-down-multilevel effect-expand-top" style={{'transition':'all 400ms ease 0s' }} >
                                                <li class="hoverTrigger">
                                                    <a href="#">
                                                        Domestic Web Designing <i class="fa fa-angle-down fa-indicator"></i>
                                                        <div class="mobileTriggerButton"></div>
                                                    </a>
                                                    <ul class="drop-down-multilevel effect-expand-top" style={{'transition':'all 400ms ease 0s' }} >
                                                        <div class="add-nav-new-cl">
                                                            <div class="col-md-6 nav-cl-off">
                                                                <li><Link to="/website-designing-company-india">Website Designing Company India</Link></li>
                                                                <li><Link to="/website-designing-company-south-delhi">Website Designing Company South Delhi</Link></li>
                                                                <li><a href="/website-designing-company-gurgaon">Website Designing Company Gurgaon</a></li>
                                                                <li><Link to="/website-designing-company-faridabad">Website Designing Company Faridabad </Link></li>
                                                            </div>
                                                            <div class="col-md-6">
                                                                <li><Link to="/website-designing-company-noida">Website Designing Company Noida </Link></li>
                                                                <li><Link to="/website-designing-company-australia">Website Designing Company in Australia </Link></li>
                                                                <li><Link to="/website-designing-company-dubai">Website Designing Company in Dubai</Link></li>
                                                                <li><Link to="/website-designing-company-singapore">Website Designing Company in Singapore</Link></li>
                                                            </div>
                                                        </div>
                                                    </ul>
                                                </li>

                                                <li><Link to="/website-development-company-india">Web Development</Link></li>
                                                <li><Link to="/ios-app-develoment-company-india">iOS App Develoment </Link></li>
                                                <li><Link to="/andriod-app-develoment-company-india">Andriod App Develoment</Link></li>
                                            </ul>
                                        </li>
                                        <li class="hoverTrigger">
                                            <a href="#">
                                                Digital Marketing<i class="fa fa-angle-down fa-indicator"></i>
                                                <div class="mobileTriggerButton"></div>
                                            </a>
                                            <ul class="drop-down-multilevel effect-expand-top"style={{'transition':'all 400ms ease 0s' }} >
                                                <li><a href="/digital-marketing-company-india">Digital Marketing </a></li>

                                                <li><a href="/seo-company-india">SEO Optimaiztion </a></li>
                                                <li><a href="/online-reputation-management-company">Online Reputation Management </a></li>
                                                <li><a href="/social-media-marketing">Social Meida</a></li>
                                                <li><a href="/ppc-advertising-services">PPC Advertising Services</a></li>
                                            </ul>
                                        </li>

                                        <li class="hoverTrigger">
                                            <Link to="/portfolio"> Portfolio</Link>
                                        </li>
                                        <li class="hoverTrigger">
                                            <a href="https://www.thewebflying.com/blog/"> Technical blog</a>
                                        </li>
                                        <li><Link to="/contact-us"> Contact Us </Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </nav>
            </div>


        </>
    );
};

export default Header;