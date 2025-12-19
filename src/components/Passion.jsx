import "./Passion.css";
import { Icon } from "@iconify/react";
import girlBig from "../assets/girl-big.png";
import kidSmall from "../assets/kid-small.png";
import birds from "../assets/birds.png";
function Passion() {
 return (
<section className="passion">
<div className="passionInner">
       {/* LEFT IMAGES */}
<div className="passionLeft">
<img src={birds} className="decor birds" alt="" />
<div className="imageStack">
<div className="imageSmall">
<img src={kidSmall} alt="Child playing" />
</div>
<div className="imageBig">
<img src={girlBig} alt="Happy student" />
</div>
<div className="happyBadge">
             😊 Happy Student
</div>
</div>
</div>
       {/* RIGHT CONTENT */}
<div className="passionRight">
<span className="sectionTag">ABOUT US</span>
<h2>
           It's Our Passion To Work With <br />
           Children At <span>Kindergarten.</span>
</h2>
<p>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
           eiusmod tempor incididunt ut labore et dolore magna aliqua.
</p>
<div className="features">
<div><Icon icon="mdi:check-circle" /> Quality Educations</div>
<div><Icon icon="mdi:check-circle" /> Play To Learn</div>
<div><Icon icon="mdi:check-circle" /> Safety And Security</div>
<div><Icon icon="mdi:check-circle" /> Homelike Environment</div>
</div>
<button className="passionBtn">About More</button>
</div>
</div>
</section>
 );
}
export default Passion;