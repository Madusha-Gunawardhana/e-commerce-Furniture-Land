
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import NavBar from "./NavBar";
import HeroSection from "./HeroSection";
import bag from "../images/bag.svg";
import support from "../images/support.svg";
import truck from "../images/truck.svg";
import re_turn from "../images/re_turn.svg";
import why_choose_us from "../images/why_choose_us.jpg";
import Footer from './Footer';

function HomePage() {
	const [formData, setFormData] = useState({
		project_name: '',
		project_type: 'Engineer',
		project_description: '',
		image_1: null,
		image_2: null,
		image_3: null,
		image_4: null,
	  });
	
	  const handleChange = (e) => {
		const { name, value, type, files } = e.target;
		setFormData({
		  ...formData,
		  [name]: type === 'file' ? files[0] : value,
		});
	  };
	
	  const handleSubmit = async (e) => {
		e.preventDefault();
	
		const formDataToSend = new FormData();
		for (const key in formData) {
		  formDataToSend.append(key, formData[key]);
		}
		
		try {
		  const response = await fetch('Submit.php', {
			method: 'POST',
			body: formDataToSend,
		  });
	
		  if (response.ok) {
			console.log("success");
		  } else {
			console.log("unsuccess");
		  }
		} catch (error) {
		  // Handle fetch errors
		}
	  };
  return (
    <div>
       <NavBar/> 
       <HeroSection/>
    <div className="App">
    <div className="container">
      <div className="product-card">
		<div className="badge">Hot</div>
		<div className="product-tumb">
			<img src="https://cdn.shopify.com/s/files/1/0389/7812/5956/files/16th03aa_60f16cc1-64f6-440e-9008-265491eb3526_533x.jpg?v=1689758455" alt=""/>
		</div>
		<div className="product-details">
			<h4><a href="">GARRY - SINGLE SEATER</a></h4>
			<p>Crafted with foreign fabric,this is designed to fit in with any living room.Enjoy resilient foam cushions.</p>
			<div className="product-bottom-details">
				<div className="product-price"><small>Rs.46,728.00</small>Rs.36,500.00</div>
				<div className="product-links">
					<a href="#"><FontAwesomeIcon icon={faHeart}/></a>
					<a href="#"><FontAwesomeIcon icon={faShoppingCart}/></a>
				</div>
			</div>
      </div>
		</div>
    <div className="product-card">
		<div className="badge">Hot</div>
		<div className="product-tumb">
			<img src="https://ae01.alicdn.com/kf/Sc9ef5c9190894f4c9f65e29f3408696fX/Factory-Hot-Selling-Sofa-Set-Terrace-Garden-Hotel-Outdoor-Furniture.jpg" alt=""/>
		</div>
		<div className="product-details">
			<h4><a href="">SOFA KIVI</a></h4>
			<p>Sofa Kivi is an excellent choice for a large seating area. For people who prefer soft shapes and elegant comfort, this sofa is for you.</p>
			<div className="product-bottom-details">
				<div className="product-price"><small>Rs.214,800.00 </small>Rs.171,840.00</div>
				<div className="product-links">
					<a href="#"><FontAwesomeIcon icon={faHeart}/></a>
					<a href="#"><FontAwesomeIcon icon={faShoppingCart}/></a>
				</div>
			</div>
      </div>
		</div>
    <div className="product-card">
    <div className="badge">Hot</div>
		<div className="product-tumb">
			<img src="https://www.dreamzzfurniture.com/wp-content/uploads/2021/01/1-8-15.jpg" alt=""/>
		</div>
		<div className="product-details">
			<h4><a href="">SOFA KELLY</a></h4>
			<p>This sofa takes a more minimalistic approach to your living room, this simple three-seater design perfectly blends in with the surrounding.</p>
			<div className="product-bottom-details">
				<div className="product-price"><small>Rs.160,000.00</small>Rs.139,440.00</div>
				<div className="product-links">
					<a href="#"><FontAwesomeIcon icon={faHeart}/></a>
					<a href="#"><FontAwesomeIcon icon={faShoppingCart}/></a>
				</div>
			</div>
      
		</div>
		</div>
    </div>
    </div>

{/* services */}
	
<div className="why-choose-section">
			<div className="container">
				<div className="row justify-content-between">
					<div className="col-lg-6">
						<h2 className="section-title">Why Choose Us</h2>
						<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.</p>

						<div className="row my-5">
							<div className="col-6 col-md-6">
								<div className="feature">
									<div className="icon">
										<img src={truck} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Fast &amp; Free Shipping</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={bag} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Easy to Shop</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={support} alt="Image" class="imf-fluid"/>
									</div>
									<h3>24/7 Support</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

							<div class="col-6 col-md-6">
								<div class="feature">
									<div class="icon">
										<img src={re_turn} alt="Image" class="imf-fluid"/>
									</div>
									<h3>Hassle Free Returns</h3>
									<p>Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate.</p>
								</div>
							</div>

						</div>
					</div>

					<div class="col-lg-5">
						<div class="img-wrap">
							<img src={why_choose_us} alt="Image" class="img-fluid"/>
						</div>
					</div>

				</div>
			</div>
		</div>

{/* Start Form */}
  
      <section className='contact_fe' id='contact_fe'>
        <h2 className='heading_fe'>Furniture <span>Details</span></h2>
        <form className='form-e' encType="multipart/form-data" onSubmit={handleSubmit}>
          <div className='input-box_fe'>
            <p className='p-e'>Furniture Name<span>*</span></p>
            <input
              type="text"
              name="project_name"
              placeholder="Enter your furniture name"
              value={formData.project_name}
              onChange={handleChange}
            />
          </div>
          <div className='input-box_fe'>
            <label>Furniture Type<span>*</span></label>
            <select
              name='project_type'
              required
              className='input'
              value={formData.project_type}
              onChange={handleChange}
            >
              <option value="Engineer">Bedroom</option>
              <option value="QA">Living Room</option>
              <option value="Archi">Accessories</option>
            </select>
          </div>
          <div className='input-box_fe'>
            <p className='p-e'>Furniture Description<span>*</span></p>
            <textarea
              name="project_description"
              cols={30}
              rows={10}
              placeholder="Write Some Details about your Furniture"
              value={formData.project_description}
              onChange={handleChange}
            />
          </div>
          <div className='input-box_fe'>
            <p className='p-e'>Image <span>*</span></p>
            <input
              type="file"
              name="image_1"
              onChange={handleChange}
            />
          </div>
          <input
            type='submit'
            value='Submit Details'
            name="submit"
            className='btn_fe'
            onClick={handleSubmit}
          />
        </form>
      </section>
{/*End form */}


<Footer/>
    </div>

  );
}
export default HomePage;