import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LivingRoom from './components/LivingRoom';
import BedRoom from './components/BedRoom';
import Accessories from './components/Accessories';
import Cart from './components/Cart';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SellFurniture from './components/SellFurniture';
import ContacUs from './components/ContactUs';
import Checkout from './components/Checkout';
import Dashboard from './components/adminPanel/Dashboard';
import Login from './components/adminPanel/Login';
import Portal from './components/adminPanel/Portal';
import UserList from './components/adminPanel/UserList';
import UserEdit from './components/adminPanel/UserEdit';
import UserView from './components/adminPanel/UserView';
import Usercreate from './components/adminPanel/Usercreate';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes> 
      <Route path="sellfurniture" element={<SellFurniture/>} /> 
      <Route path="livingroom" element={<LivingRoom/>} />
      <Route path="bedroom" element={<BedRoom/>} />
      <Route path="accessories" element={<Accessories/>} />
      <Route path="cart" element={<Cart/>} />
      <Route path="signup" element={<SignUp/>} />
      <Route path="signin" element={<SignIn/>} />
      <Route path="contactus" element={<ContacUs/>} />
      <Route path="checkout" element={<Checkout/>} />
      <Route path="/" element={<HomePage/>} /> 

      <Route path="adminDashboard" element={<Dashboard/>} /> 
      <Route path="adminLogin" element={<Login/>} /> 
      <Route path='/portal' element={<Portal/>}/>
      <Route path='user-list' element={<UserList/>} />
      <Route Route path='create-user' element={<Usercreate/>} />
      <Route path='user-edit/:id' element={<UserEdit/>} />
      <Route path='user-view/:id' element={<UserView/>} />
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



