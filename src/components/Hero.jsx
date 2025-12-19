import "./Hero.css";
import { Icon } from "@iconify/react";
import kidBoy from "../assets/kid-boy.png";
import kidGrad from "../assets/kid-grad.png";
import birds from "../assets/birds.png";   // your file is bird.png (singular)
import sun from "../assets/sun.png";
import cross from "../assets/cross.png";
import cloud from "../assets/cloud.png";
function Hero() {
 return (
<section className="hero">
<div className="heroInner">
       {/* LEFT TEXT */}
<div className="heroLeft">
<h1 className="heroTitle">
           The Best Place <br />
           TO Learn And Play <br />
           For Kids
</h1>
<p className="heroText">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<div className="heroCtas">
<button className="primaryBtn">Browse Courses</button>
<button
             className="watchBtn"
             type="button"
             onClick={() => console.log("Watch Now clicked")}
>
<span className="playCircle">
<Icon icon="mdi:play" />
</span>
<span>Watch Now</span>
</button>
</div>
</div>
       {/* RIGHT ILLUSTRATION */}
<div className="heroRight">
<div className="heroArt">
           {/* Decorations */}
<img className="decor birds" src={birds} alt="" />
<img className="decor sun" src={sun} alt="" />
<img className="decor cross" src={cross} alt="" />
<img className="decor cloud" src={cloud} alt="" />
           {/* Shapes */}
<div className="blob blobOrange"></div>
<div className="blob blobTeal"></div>
           {/* Teal panel behind girl (this makes it look like the template) */}
<div className="tealPanel"></div>
           {/* Characters */}
<img className="kidImg boy" src={kidBoy} alt="Kid" />
<img className="kidImg grad" src={kidGrad} alt="Graduate kid" />
           {/* Stat badges */}
<div className="badge badgeTop">
<strong>5.8k</strong>
<span>Success Courses</span>
</div>
<div className="badge badgeBottom">
<strong>10k+</strong>
<span>Student</span>
<div className="miniAvatars">
<span className="dot dot1"></span>
<span className="dot dot2"></span>
<span className="dot dot3"></span>
</div>
</div>
</div>
</div>
</div>
</section>
 );
}
export default Hero;