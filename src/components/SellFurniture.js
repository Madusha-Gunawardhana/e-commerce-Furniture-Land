
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../style/sellfurniture.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import NavBar from "./NavBar";
import Footer from './Footer';
import home1 from "../images/home3.jpg";
import "../style/hero.css";

function SellFurniture() {
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
  
    <div className="upper" style={{backgroundImage:`url(${home1})` }}>
    <section className="upper">
      
      <div className="content">
      
        <h2>Sell Your Furniture</h2>
        <p>
        Transform Your Space: Sell Your Furniture, Embrace Change.
        </p>
        <button>Sign in</button>
      </div>
     </section> 
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
export default SellFurniture;