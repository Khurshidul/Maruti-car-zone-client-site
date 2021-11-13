import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className = "footer-icon">
                <h1 className="footer-title">Maruti Car's Zone</h1>
                <i class="fab fa-facebook-square"></i>
                <i class="fab fa-instagram-square"></i>
                <i class="fab fa-twitter-square"></i>
                <i class="fab fa-whatsapp-square"></i>
                <p>Our cars were is so strong and looking good. <br /> Get Buy for Enjoy.</p>
               
                
            </div>
            <div className="footer-menu">
                <br /><br />
                <NavLink to = "/home">Home</NavLink>
                <br />
                <br />
                <NavLink to = "/explore">Explore</NavLink>
                <br />
                <br />
                <NavLink to = "/reviews">Reviews</NavLink>
                <br />
                <br />
                

            </div>
            <div className="contact-item">
                <h4 className="text-light">Sign Up for the newsletter</h4>
                <label htmlFor="email">Email:   
                <input type="email" name="email" placeholder="Enter your email" id="" />
                </label>
                <br />
                <br />
                <h6>Mail: <span>maruticar@gmail.com</span> </h6>
                <br />
                <h6>Mobile: <span>019********</span> </h6>
                
            </div>
        </div>
    );
};

export default Footer;