import "./Footer.css"
import logo from "./logo.png"

const Footer = () => {
    return (
        <footer>
            <div className="row">
                <div className="col">
                    <h2>Contact Us</h2>
                    
                    <div className="add-info">
                        <i class="fa-solid fa-location-dot"></i>
                        <p>NIT SILCHAR, Silchar, Assam, India</p>
                    </div>
                    <div className="add-info">
                        <i class="fa-solid fa-phone"></i>
                        <p>+91 7096597864</p>
                    </div>
                    <div className="add-info">
                        <i class="fa-solid fa-envelope"></i>
                        <p>nitsmun@nits.ac.in</p>
                    </div>
                </div>
                <div className="col explore">
                    <h2>Explore</h2>

                    <ul>
                        <li>Home</li>
                        <li>Mock MUN 2024</li>
                        <li>Team</li>
                        <li>About</li>
                        <li>Photo Gallery</li>
                    </ul>
                </div>
                <div className="col cl2">
                    <div className="logo">
                        <img src={logo} alt="logo img" />
                    </div>
                </div>

                
            </div>
            <div className="center">
                <hr class= "line"/>
            </div>
            
            <div className="list-items">
                <p class="copy">Copyright © 2023 All Rights Reserved by NITSMUN</p>

                <ul>
                    <li><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                </ul>
            </div>
            
        </footer>
    );
};

export default Footer;