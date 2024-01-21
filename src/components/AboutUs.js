import home2 from '../images/home1.jpg';
import Footer from './Footer';
import NavBar from './NavBar';
import '../style/hero.css';
import '../style/about.css';
import truck from '../images/truck.svg';
import bag from '../images/bag.svg';
import support from '../images/support.svg';
import re_turn from '../images/re_turn.svg';
import why_choose_us from '../images/why_choose_us.jpg';

function AboutUs() { 

    return (
      <div>
        <NavBar/>
         <div className="upper" style={{backgroundImage:`url(https://img.freepik.com/premium-photo/green-interior-modern-interior-living-room-style-with-soft-sofa-green-wall-3d-rendering_41470-3902.jpg?w=900)` }}>
    <section className="upper">
      
      <div className="content">
      
        <h2>ABOUT US</h2>
        <p>
        Crafting Comfort, Inspiring Homes. </p>
        <p>Discover Timeless Elegance at Furniture Land.</p>
        
        <button>Sign in</button>
      </div>
     </section> 
 </div>
 <div className="why-choose-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-6">
						<h2 className="section-title">Why Choose Us</h2>
						<p>Discover unmatched quality and style at our furniture store. Elevate your living space with handcrafted pieces that seamlessly blend sophistication and comfort.</p>

						<div className="row my-5">
							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={truck} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Fast &amp; Free Shipping</h3>
									<p>Experience swift and complimentary delivery with our furniture store's fast and free shipping service. Elevate your space effortlessly with hassle-free shipping on all orders.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={bag} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Easy to Shop</h3>
									<p>Seamless Shopping: Discover the convenience of an effortless shopping experience at our furniture store.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={support} alt="Image" class="imf-fluid"/>
									</div>
									<h3>24/7 Support</h3>
									<p>Our 24/7 support ensures you have expert guidance and assistance whenever you need it.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={re_turn} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Hassle Free Returns</h3>
									<p>Enjoy hassle-free returns on your furniture purchases. Our customer-friendly return policy ensures your comfort and peace of mind.</p>
								</div>
							</div>

						</div>
					</div>

					<div class="col-lg-5">
						<div class="img-wrap">
							<img src={why_choose_us} alt="Image" class="img-home-fluid"/>
						</div>
					</div>

				</div>
			</div>
  </div>


 <Footer/>
        </div>
    );
}
export default AboutUs;