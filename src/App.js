import './App.css';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import Header from './component/common/Header';
import Footer from './component/common/Footer';
import Home from './component/pages/Home'; 
import About from './component/pages/companyprofile/About';
import Career from './component/pages/companyprofile/Career';
import OurTeam from './component/pages/companyprofile/OurTeam';
import Contact from './component/pages/Contact';
import WebDevelopmentInIndia from './component/pages/technologies/WebDevelopmentInIndia';
import AndroidAppDevelopmentInIndia from './component/pages/technologies/AndroidAppDevelopmentInIndia';
import IosAppDevelopmentInIndia from './component/pages/technologies/IosAppDevelopmentInIndia';
import DesignInIndia from './component/pages/technologies/domestic/DesignInIndia';
import DesignInSouthDelhi from './component/pages/technologies/domestic/DesignInSouthDelhi';
import DesignInFaridbad from './component/pages/technologies/domestic/DesignInFaridbad';
import DesignInNoida from './component/pages/technologies/domestic/DesignInNoida';
import DesignInAustralia from './component/pages/technologies/domestic/DesignInAustralia';
import DesignInDubai from './component/pages/technologies/domestic/DesignInDubai';
import DesignInSingapore from './component/pages/technologies/domestic/DesignInSingapore';
import DesignInGurugram from './component/pages/technologies/domestic/DesignInGurugram';
import SEOOptimization from './component/pages/digitalmarketing/SEOOptimization';
import DigitalMarketing from './component/pages/digitalmarketing/DigitalMarketing';
import ORM from './component/pages/digitalmarketing/ORM';
import SocialMedia from './component/pages/digitalmarketing/SocialMedia';
import Ppc from './component/pages/digitalmarketing/Ppc';
import Brochure from './component/pages/portfolio/Brochure';
import Logo from './component/pages/portfolio/Logo';
import Psd from './component/pages/portfolio/Psd';
import Webdevelopment from './component/pages/portfolio/Webdevelopment';
import Webdesign from './component/pages/portfolio/Webdesign';
import Seo from './component/pages/portfolio/Seo';
import Portfolio from './component/pages/portfolio/Portfolio';

function App() {
  return (
      <>
        <Router>
          <Header/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/about-us' component={About} />
                <Route path='/career' component={Career} />
                <Route path='/our-team' component={OurTeam} />
                <Route path='/contact-us' component={Contact} />
                <Route path='/logo' component={Logo} />
                <Route path='/website-development-company-india' component={WebDevelopmentInIndia} />
                <Route path='/andriod-app-develoment-company-india' component={AndroidAppDevelopmentInIndia} />
                <Route path='/ios-app-develoment-company-india' component={IosAppDevelopmentInIndia} />
                <Route path='/website-designing-company-india' component={DesignInIndia} />
                <Route path='/website-designing-company-south-delhi' component={DesignInSouthDelhi} />
                <Route path='/website-designing-company-faridabad' component={DesignInFaridbad} />
                <Route path='/website-designing-company-noida' component={ DesignInNoida }/>
                <Route path='/website-designing-company-australia' component={DesignInAustralia} />
                <Route path='/website-designing-company-dubai' component={DesignInDubai} />
                <Route path='/website-designing-company-singapore' component={DesignInSingapore}/>
                <Route path='/website-designing-company-gurgaon' component={DesignInGurugram} />
                <Route path='/seo-company-india' component={SEOOptimization} />
                <Route path='/digital-marketing-company-india' component={DigitalMarketing} />
                <Route path='/online-reputation-management-company' component={ORM}/>
                <Route path='/social-media-marketing' component={SocialMedia} />
                <Route path='/ppc-advertising-services' component={Ppc} />
                <Route path='/contact-us' component={Contact} />
                <Route path='/psd-designing' component={Psd}/>
                <Route path='/logo-desiging' component={Logo} />
                <Route path='/brochure-design' component={Brochure}/>
                <Route path='/website-designing-portfolio' component={Webdesign}/>
                <Route path='/website-development-portfolio' component={Webdevelopment} />
                <Route path='/seo-optimization' component={Seo} />
                <Route path='/portfolio' component={Portfolio}/>
            </Switch>  
          <Footer/>
        </Router>
      </>
  );
}

export default App;
