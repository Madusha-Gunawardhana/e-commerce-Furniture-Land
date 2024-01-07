import '../style/livingroom.css';
import NavBar from './NavBar';
import Footer from './Footer';
import fur13 from "../images/fur13.jpg";
import fur17 from "../images/fur17.jpg";
import fur18 from "../images/fur18.jpg";
import fur16 from "../images/fur16.jpg";
import fur15 from "../images/fur15.jpg";
import fur14 from "../images/fur14.jpg";
//import home4 from "../images/home4.webp";


function Accessories() {
  return (
    <div>
<NavBar/>

<div className="main">
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={fur13} /></div>
              <div className="card_content">
                <h2 className="card_title">Throws and Blankets</h2>
                <p className="card_text"><strong>rs.5000</strong>
                <p>Cozy up with our throws and blankets. Luxurious materials, decorative patterns, and warmth for a perfect blend of comfort and style.</p></p>
                <button className="btn card_btn">buy now</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={fur14} /></div>
                 <div className="card_content">
                <h2 className="card_title">Cushions and Throw Pillows  </h2>
                <p className="card_text"><strong>rs.5000  </strong>
                <p>Elevate comfort and style with our cushions and throw pillows. Soft materials, and diverse patterns for personalized home decor.</p></p>
                <button className="btn card_btn">buy now</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={fur15}/></div>
              <div className="card_content">
                <h2 className="card_title">Rugs and Carpets</h2>
                <p className="card_text"><strong>rs.4500  </strong>
                <p>Discover style and comfort with our rugs. High-quality materials, varied sizes, and easy care options for a perfect home transformation.</p></p>
                <button className="btn card_btn">buy now</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
            <div className="card_image"><img src={fur16}/></div>
              <div className="card_content">
                <h2 className="card_title">Wall Art</h2>
                <p className="card_text"><strong>rs.2000 </strong>
                <p>Diverse styles, quality materials, and captivating designs for a personalized and vibrant ambiance.</p></p>
                <button className="btn card_btn">buy now</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={fur17}/></div>
              <div className="card_content">
                <h2 className="card_title">Clocks</h2>
                <p className="card_text"> <strong>rs.6000  </strong>
                <p>Functional timepieces with stylish designs, enhancing your space while keeping you punctual and organized.</p></p>
                <button className="btn card_btn">buy now</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={fur18}/></div>
              <div className="card_content">
                <h2 className="card_title">Mirrors</h2>
                <p className="card_text"><strong>rs.7500  </strong>
                <p>Diverse designs, quality craftsmanship, and versatile sizes to enhance your space with style and functionality</p></p>
                <button className="btn card_btn">buy now</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
		
<Footer/>
	</div> 
  );
}

export default Accessories;