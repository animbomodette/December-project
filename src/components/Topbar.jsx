import "./Topbar.css";
import { Icon } from "@iconify/react";

function Topbar() {
  return (
    <div className="top-bar">
      <div className="left-side">
        <div className="info">
          <Icon icon="mdi:clock" className="icon" />
          <span>Monday - Friday. 9am–5pm</span>
        </div>

        <div className="middle">
          <Icon icon="mdi:map-marker" className="icon" />
          <span>Hudson, Wisconsin (WI), 54016 

          </span>
        </div>
      </div>

      <div className="right-side">
        <div className="language">
            <Icon icon='twemoji:flag-united-kingdom' className="flag"/>
          <span>English</span>
          <Icon icon="mdi:chevron-down" className="icon" />
        </div>

        <div className="socials">
          <Icon icon="mdi:facebook" />
          <Icon icon="mdi:twitter" />
          <Icon icon="mdi:skype" />
          <Icon icon="mdi:linkedin" />
          
        </div>

      </div>
    </div>
  );
}
  export default Topbar;