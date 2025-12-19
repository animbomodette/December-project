import "./Header.css";
import { Icon } from "@iconify/react";
function Header() {
 return (
<header className="header">
<div className="headerInner">
       {/* Logo: books stack + text */}
<div className="brand">
<div className="brandMark" aria-label="Edunity logo">
<Icon icon="mdi:books-variant" />
</div>
<span className="brandName">edunity</span>
</div>
       {/* Navigation links */}
<nav className="menu">
<a href="#">Home <Icon icon="mdi:chevron-down" className="icon"/></a> 
<a href="#">About Us</a>
<a href="#">Courses <Icon icon="mdi:chevron-down" className="icon" /></a>
<a href="#">Pages <Icon icon="mdi:chevron-down" className="icon" /></a>
<a href="#">Blog <Icon icon="mdi:chevron-down" className="icon" /></a>
<a href="#">Contact</a>
</nav>
       {/* Right side icons + button */}
<div className="actions">
<button className="iconBtn" aria-label="Search">
<Icon icon="mdi:magnify" />
</button>
<button className="iconBtn" aria-label="Account">
<Icon icon="mdi:account" />
</button>
<button className="contactBtn">Contact</button>
</div>
</div>
</header>
 );
}
export default Header;