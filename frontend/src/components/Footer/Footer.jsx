import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img className='img' src={assets.logo} alt="" />
            <p>HappyMeals brings the joy of delicious food right to your doorstep! Our mission is to make every meal a delightful experience, crafted with quality ingredients and delivered with care. Whether you're craving comfort or exploring new flavors, HappyMeals is here to satisfy every bite. Join us and discover happiness in every meal!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>1800-255-255</li>
                <li>contact@happymeals.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © HappyMeals.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
