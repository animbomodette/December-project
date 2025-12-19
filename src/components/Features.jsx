import "./Features.css";
import startLogo from "../assets/start-course.png";
import teacherLogo from "../assets/expert-teachers.png";
import locationLogo from "../assets/strategic-location.png";
function Features() {
 return (
<section className="features">
<div className="featuresInner">
<div className="featureCard">
<div className="featureIconWrap">
<img className="featureLogo" src={startLogo} alt="Start Course" />
</div>
<h3 className="featureTitle">START COURSE</h3>
<p className="featureText">
           Duis aute irure dolor reprehenderit in voluptate velit esse cillum
           dolore eu fugiat nulla pariatur.
</p>
</div>
<div className="featureCard featureCardActive">
<div className="featureIconWrap featureIconWrapActive">
<img
             className="featureLogo"
             src={teacherLogo}
             alt="Expert Teachers"
           />
</div>
<h3 className="featureTitle featureTitleActive">EXPERT TEACHERS</h3>
<p className="featureText featureTextActive">
           Duis aute irure dolor reprehenderit in voluptate velit esse cillum
           dolore eu fugiat nulla pariatur.
</p>
</div>
<div className="featureCard">
<div className="featureIconWrap">
<img
             className="featureLogo"
             src={locationLogo}
             alt="Strategic Location"
           />
</div>
<h3 className="featureTitle">STRATEGIC LOCATION</h3>
<p className="featureText">
           Duis aute irure dolor reprehenderit in voluptate velit esse cillum
           dolore eu fugiat nulla pariatur.
</p>
</div>
</div>
</section>
 );
}
export default Features;