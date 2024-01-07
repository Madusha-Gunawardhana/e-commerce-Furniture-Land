import '../style/livingroom.css';
import NavBar from './NavBar';
import Footer from './Footer';
import fur3 from "../images/fur3.jpg";
import fur7 from "../images/fur7.png";
import fur8 from "../images/fur8.png";
import fur10 from "../images/fur10.png";
import fur11 from "../images/fur11.png";
import fur12 from "../images/fur12.png";


function BedRoom() {
  return (
    <div>
<NavBar/>

<div className="main">
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={fur3} /></div>
              <div className="card_content">
                <h2 className="card_title">bed</h2>
                <p className="card_text"><strong>rs.100000</strong>
                <p>Plush design, sturdy frame – redefine your sleep sanctuary with style and tranquility.</p></p>
                <button className="btn card_btn">buy now</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={fur8} /></div>
                 <div className="card_content">
                <h2 className="card_title">Nightstands </h2>
                <p className="card_text"><strong>rs.50000  </strong>
                <p>Modern elegance meets practicality with our Harmony Nightstand.</p></p>
                <button className="btn card_btn">buy now</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={fur10}/></div>
              <div className="card_content">
                <h2 className="card_title">Dressers</h2>
                <p className="card_text"><strong>rs.75000  </strong>
                <p>features quality craftsmanship, ample space, and diverse styles to elevate your decor.</p></p>
                <button className="btn card_btn">buy now</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
            <div className="card_image"><img src={fur7}/></div>
              <div className="card_content">
                <h2 className="card_title">Wardrobes</h2>
                <p className="card_text"><strong>rs.20000  </strong>
                <p>Ample storage, elegant designs, and quality craftsmanship, ensuring both style and functionality.</p></p>
                <button className="btn card_btn">buy now</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={fur12}/></div>
              <div className="card_content">
                <h2 className="card_title">Chests of drawers</h2>
                <p className="card_text"> <strong>rs.80000  </strong>
                <p>Elevate your storage with our collection. Durable materials, multiple drawers, and stylish designs to complement any room decor.</p></p>
                <button className="btn card_btn">buy now</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={fur11}/></div>
              <div className="card_content">
                <h2 className="card_title">Vanity tables</h2>
                <p className="card_text"><strong>rs.35000  </strong>
                <p>Crafted with premium materials, multiple drawers, and an elegant mirror, merging style with functionality seamlessly.</p></p>
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

export default BedRoom;