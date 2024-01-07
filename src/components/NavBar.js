import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import '../style/navbar.css';

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <nav>
        <div className={`navbar ${showMenu ? 'show-menu' : ''}`}>
          <i className='bx bx-menu' onClick={toggleMenu}></i>
          <div className='logo'>
            <a href='/'>Furniture<span>Land</span></a>
          </div>
          <div className='nav-links'>
            <div className='sidebar-logo'>
              <i className='bx bx-x' onClick={closeMenu}></i>
            </div>
            <ul className='links'>
              <li>
                <a href='/'>HOME</a>
              </li>
              <li>
                <a href='#'>SHOP</a>
                <i className='bx bxs-chevron-down htmlcss-arrow arrow'></i>
                <ul className='htmlCss-sub-menu sub-menu'>
                  <li>
                    <a href='livingroom'>LIVING ROOM</a>
                  </li>
                  <li>
                    <a href='bedroom'>BED ROOM</a>
                  </li>
                  <li>
                    <a href='accessories'>ACCESSORIES</a>
                  </li>
                  <li className='more'>
                    <i className='bx bxs-chevron-right arrow more-arrow'></i>
                  </li>
                </ul>
              </li>
              <li>
                <a href='sellfurniture'>SELL Furniture</a>
              </li>
              <li>
                <a href='aboutus'>ABOUT US</a>
              </li>
              <li>
                <a href='contactus'>CONTACT US</a>
              </li>
              <li>
                <a href='checkout'>CHECOUT PAGE</a>
                <i className='bx bxs-chevron-down js-arrow arrow'></i>
                <ul className='js-sub-menu sub-menu'></ul>
              </li>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
              
             
          
              <li>
                <a href='cart'>
                  <FontAwesomeIcon icon={faCartShopping} />
                </a>
              </li>
              <li>
                <a href='wishlist'>
                  <FontAwesomeIcon icon={faHeart} />
                </a>
              </li>
              <li>
                <a href=''>
                  SIGN IN
                  <ul className='htmlCss-sub-menu sub-menu'>
                    <li>
                      <a href='signin'>SIGN IN</a>
                    </li>
                    <li>
                      <a href='signup'>SIGN UP</a>
                    </li>
                    <li className='more'>
                      <i className='bx bxs-chevron-right arrow more-arrow'></i>
                    </li>
                  </ul>
                </a>
              </li>
            </ul>
          </div>
          <div className='search-box'>
            <i className='bx bx-search'></i>
            <div className='input-box'>
              <input type='text' placeholder='Search...' />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
