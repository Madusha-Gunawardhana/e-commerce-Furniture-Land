import "../style/footer.css";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faVoicemail } from "@fortawesome/free-solid-svg-icons";

function Footer() {

    return (
      <div>
<div className="footer-dark">
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Fast & Free Shipping</a></li>
                            <li><a href="#">Easy to Shop</a></li>
                            <li><a href="#">24/7 Support</a></li>
                            <li><a href="#">Hassle Free Returns</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-6 col-md-3 item">
                        <h3>Find Out More</h3>
                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Sell Furniture</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 item text">
                        <h3>Furniture Land</h3>
                        <p>Explore our diverse range of sofas, chairs, tables, and more, each crafted with precision and an eye for detail. Whether you're furnishing a cozy home or a contemporary office, Furniture Land brings you quality and elegance that transforms every space into a haven of comfort and beauty.</p>
                    </div>
                    <div className="col item social"><a href="#"><FontAwesomeIcon icon={faFacebookSquare}/></a>
                    <a href="#"><FontAwesomeIcon icon={faInstagram}/></a>
                    <a href="#"><FontAwesomeIcon icon={faTwitter}/></a>
                    <a href="#"><FontAwesomeIcon icon={faVoicemail}/></a>
                    </div>
                </div>
               
            </div>
        </footer>
    </div>
</div>
  );
}

export default Footer;