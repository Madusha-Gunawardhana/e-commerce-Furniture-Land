import '../style/livingroom.css';
import NavBar from './NavBar';
import Footer from './Footer';
import fur1 from "../images/fur1.jpg";
import fur2 from "../images/fur2.jpg";
import fur4 from "../images/fur4.jpg";
import fur5 from "../images/fur5.jpg";
import fur6 from "../images/fur6.jpg";
import fur9 from "../images/fur9.jpg";


function LivingRoom() {
  return (
    <div>
<NavBar/>

<div className="main">
        <ul className="cards">
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={fur1} /></div>
              <div className="card_content">
                <h2 className="card_title">Sofa Set</h2>
                <p className="card_text"><strong>rs.100000</strong>
                <p>High-quality upholstery, ergonomic support, and customizable configurations create a perfect blend of style and relaxation for your room.</p></p>
                <button className="btn card_btn">buy now</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={fur2} /></div>
                 <div className="card_content">
                <h2 className="card_title">Coffee table  </h2>
                <p className="card_text"><strong>rs.50000  </strong>
                <p>Quality craftsmanship, versatile designs,     and durable materials create a perfect blend of style and functionality.Style on your own house.......</p></p>
                <button className="btn card_btn">buy now</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={fur4}/></div>
              <div className="card_content">
                <h2 className="card_title">End table</h2>
                <p className="card_text"><strong>rs.75000  </strong>
                <p>Sleek designs, durable materials, and versatile options for convenient storage and stylish accents.Create the beautiful look for your living room</p></p>
                <button className="btn card_btn">buy now</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
            <div className="card_image"><img src={fur5}/></div>
              <div className="card_content">
                <h2 className="card_title">Entertainment centers</h2>
                <p className="card_text"><strong>rs.20000  </strong>
                <p>Premium finishes, ample storage, and cable management solutions create a stylish and organized media hub</p></p>
                <button className="btn card_btn">buy now</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={fur6}/></div>
              <div className="card_content">
                <h2 className="card_title">Bookshelves</h2>
                <p className="card_text"> <strong>rs.80000  </strong>
                <p>Quality materials, adjustable shelves, and stylish designs make for functional and aesthetic storage solutions</p></p>
                <button className="btn card_btn">buy now</button>
              </div>
            </div>
          </li>
          <li className="cards_item">
            <div className="card">
              <div className="card_image"><img src={fur9}/></div>
              <div className="card_content">
                <h2 className="card_title">Lounge chairs</h2>
                <p className="card_text"><strong>rs.35000  </strong>
                <p>Plush upholstery, ergonomic design, and versatile styles for the perfect blend of comfort and aesthetics.</p></p>
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

export default LivingRoom;