import React from "react";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div>
          <p>For better experience,download Foodvilla app now</p>
        </div>
        <div>
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
            alt="google-play"
            className="footer-img"
          />
          <img
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
            alt="app-store"
            className="footer-img"
          />
        </div>
      </div>
      <div className="footer2">
        <div className="footlogo">
        <img className="footer-logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnm9yURneW64_3Ci5fRm1dsvfCIiyj2Ox8KQ&s"/>
        </div>
        <div className="company">
            <ul className="company-1">
                <li> <div className="companylogo">Company</div> </li>
                <li><div>About</div></li>
                <li><div>Carrers</div></li>
                <li><div>Team</div></li>
            </ul>
        </div>
        <div className="contact">
        <ul className="company-1">
                <li> <div className="companylogo">Contact Us</div> </li>
                <li><div>Help & Support</div></li>
                <li><div>Partern with us</div></li>
                <li><div>Ride with us</div></li>
            </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
