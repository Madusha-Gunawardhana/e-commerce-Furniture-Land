import '../style/checkout.css';
import NavBar from './NavBar';
import Footer from './Footer';
import home2 from "../images/home4.webp";


function Checkout(){
    return(
    <div>
<NavBar/>

<div className="upper" style={{backgroundImage:`url(${home2})` }}>
    <section className="upper">
      
      <div className="content">
      
        <h2>FURNITURE LAND</h2>
        <p>
          Your Space, Your Story, Our Furnitures.
        </p>
        <button>Sign in</button>
      </div>
     </section> 
 </div>


<div className='checkbody'>
      <div className="checkcard">
        <div className="checkrightside">
          <form action="">
            
            <h2>Payment Information</h2>
            <p>Cardholder Name</p>
            <input type="text" className="checkinputbox" name="name" required />
            <p>Card Number</p>
            <input type="number" className="checkinputbox" name="card_number" id="card_number" required />

            <p>Card Type</p>
            <select className="checkinputbox" name="card_type" id="card_type" required>
              <option value="">--Select a Card Type--</option>
              <option value="Visa">Visa</option>
              <option value="RuPay">RuPay</option>
              <option value="MasterCard">MasterCard</option>
            </select>
<div className="checkexpcvv">

            <p className="expcvv_text">Expiry</p>
            <input type="date" className="checkinputbox" name="exp_date" id="exp_date" required />

            <p className="checkexpcvv_text2">CVV</p>
            <input type="password" className="checkinputbox" name="cvv" id="cvv" required />
        </div>
            <p></p>
            <button type="submit" className="checkbutton">CheckOut</button>
          </form>
        </div>
      </div>
    </div>
    
    <Footer/>
    </div>
    
  );
}
export default Checkout;