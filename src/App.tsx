// @ts-nocheck

import React from "react";
import './index.css'
// import { icons } from './images/construction (1).jpg';
// import {images} from'./images'
import first from './images/construction (1).jpg'
import section from './images/bg-img.jpg';
import second from './images/construction (2).jpg';
import third from './images/construction (3).jpg';
import four from './images/construction (4).jpg';
import logo from './logo/alic-2.png';
import call from './logo/call.png';
import whatsapp from './logo/whatsapp.png';
import facebook from './icons/facebook.png';
import linkedin from './icons/linkedin.png';
import twitter from './icons/twitter.png';
import { url } from "inspector";
import Header from "./components/Header";
import Intro from "./components/Intro";



function App() {
  return (
    <>

      {/* <!-- phone logo --> */}
      <a href="https://api.whatsapp.com/send?phone=+918296383275&text=Hello,%20I%20would%20like%20to%20know%20more%20about%20Shapoorji%20Pallonji"
        className="icons">
        <img src={whatsapp} alt="whatsapp" />
      </a>
      {/* <!--whatsapp logo--> */}
      <a href="tel:+917706966600" className="icons-2">
        <img src={call} alt="whatsapp" />
      </a>


      <Header />
      <Intro />
      {/* <!-- 1-section --> */}
    
      {/* <!-- 2-section --> */}
      <section className="slide-container" id="project">
        
        <img src={first} alt="image" className="pics" />
        <img src={second} alt="image" className="pics" />
        <img src={third} alt="image" className="pics" />
        <img src={four} alt="image" className="pics" />
        <span className="arrow prev" onClick={() => {
          document.getElementsByClassName('slide-container')[0].scrollBy({
            left: -document.getElementsByClassName('pics')[0].clientWidth,
            behavior: 'smooth'
          })
        }}>&#10094;</span>
        <span className="arrow next" onClick={() => {
          document.getElementsByClassName('slide-container')[0].scrollBy({ left: +document.getElementsByClassName('pics')[0].clientWidth, behavior: 'smooth' })
        }}>&#10095;</span>
      </section>
      {/* <!-- 3-section --> */}
      <div className="section-3">
        <div className="text-2" id="invester">
          <div className="testimonial-1">
            <p className="test-1" style={{ color: 'black' }}> Alic in India is a top-notch construction business. I've been very impressed with
              their
              work, from the planning stages all the way through to the finished product. They are
              professional
              and
              highly skilled, and I wouldn't hesitate to recommend them for any construction project.
            </p>
            <p style={{ textAlign: 'right', color: 'black' }}>-Anubhav</p>
          </div>
          <div className="testimonial-2">
            <p className="test-1" style={{ color: 'black' }}> Alic in India is a top-notch construction business. I've been very impressed with
              their
              work, from the planning stages all the way through to the finished product. They are
              professional
              and
              highly skilled, and I wouldn't hesitate to recommend them for any construction project.
            </p>
            <p style={{ textAlign: 'right', color: 'black' }}>-Anubhav</p>
          </div>
        </div>
      </div>
      {/* 4-section */}
      <div className="services">
        <h1 className="section-4">Our Services</h1>
        <div className="main-cont" id="services">
          {/* <!-- <button className="btn-1">More Info</button> --> */}
          <img src={first} alt="Construction" className="carousel-img" />
          {/* <!-- <button className="btn-1">More</button> --> */}
          <img src={second} alt="Construction" className="carousel-img" />
          {/* <!-- <button class="btn-1">More</button> --> */}
          <img src={third} alt="Construction" className="carousel-img" />
          {/* <!-- <button class="btn-1">More</button> --> */}
          <img src={four} alt="Construction" className="carousel-img" />
          {/* <!-- <button class="btn-1">More</button> --> */}
          <img src={first} alt="Construction" className="carousel-img" />
          {/* <!-- <button class="btn-1">More</button> --> */}
          <img src={second} alt="Construction" className="carousel-img" />
          {/* <!-- <button class="btn-1">More</button> --> */}
          <img src={third} alt="Construction" className="carousel-img" />
          {/* <!-- <button className="btn-1">More</button> --> */}
          <img src={four} alt="Construction" className="carousel-img" />
          {/* <!-- <button class="btn-1">More</button> --> */}
          <img src={first} alt="Construction" className="carousel-img" />
          {/* <!-- <button class="btn-1" >More</button> --> */}
        </div>

      </div>

      {/* <!-- 5-section --> */}
      <div className="about" id="about">
        <h1 className="section-4" style={{ marginBottom: '2.5rem', fontSize: '2.81rem' }}>Company Overview</h1>
        <ul className=" para-1">
          <li > Welcome to <b style={{ fontStyle: 'italic', textDecoration: 'underline black' }}>ALIC of India!</b> <br />We are a team of
            experienced </li>
          <li>professionals dedicated to providing high-quality construction services to our <br />
            Our company has been in business for <b style={{ fontStyle: 'italic', textDecoration: 'underline black' }}>[number of years] </b>  and over that time, we have built a strong
            reputation
            for delivering projects on time, within budget, and to the satisfaction of our <br /></li>
          <li>We specialize in a wide range of construction services including [list of services], and have experience
            working on projects of all sizes and scopes, from small renovations to large-scale commercial and
            residential developments. <br /></li>
          <li>At our company, we believe that communication is key to a successful project, which is why we work
            closely
            with our clients throughout every stage of the construction process. We listen to your needs, provide
            regular updates on progress, and are always available to answer any questions or concerns you may have.
            We are committed to safety and ensure that our construction sites are secure and follow all safety
            regulations. We also strive to minimize the impact of our work on the environment, using sustainable and
            eco-friendly materials whenever possible.<br /></li>
          <li>Our team consists of skilled and experienced professionals, including project managers, architects,
            engineers, and construction workers, who are passionate about delivering high-quality workmanship and
            excellent customer service.<br /></li>
          <li>We take pride in our work and are dedicated to ensuring that our clients are completely satisfied with
            the
            end result. <br /></li>
          <li>Thank you for considering our company for your construction needs, and we look forward to
            the
            opportunity to work with you.
          </li>
        </ul>
      </div>
      {/* <!-- 6-sefction --> */}
      <div className="contact">
        <h2 style={{ marginBottom: '2.5rem', fontSize: '2.81rem' }}>Contact Us</h2>
        <div className="form-div">
          <p className="contact-form">
            Fill out this form to contact ALIC Construction for any inquiries related to construction services.</p>
          <form action="#" method="POST" autoComplete="off">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="Phone">Phone No:</label>
              <input type="tel" id="Phone" name="Phone" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" required></textarea>
            </div>

            <div className="form-group">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
      {/* <!-- footer --> */}
      <footer style={{ marginTop: '-15px' }}>
        <div className="footer-container">
          <div className="footer-info" style={{ textAlign: 'center' }}>
            <h2 style={{ textAlign: 'start' }}>About Us</h2>
            <p style={{ textAlign: 'start' }}>We are a construction company that specializes in building custom homes and commercial buildings.</p>
          </div>
          <div className="footer-contact" style={{ textAlign: 'center' }}>
            <h2 style={{ textAlign: 'start', margin: '0px 98px' }}>Contact Us</h2>
            <p style={{ textAlign: 'start', margin: '0px 98px', marginTop: '6px' }}>123 Main <br />
              Anytown,USA 12345 <br />
              Phone: 7706966600<br />
              Email: info@alic.in</p>
          </div>
          <div className="footer-social">
            <h2 style={{ textAlign: 'start', margin: '0px 118px' }}>Follow Us</h2>
            <ul className="footer-social-media" style={{ height: '30px', width: '120px', display: 'flex', textDecoration: 'none', justifyContent: 'space-between', marginLeft: '20px', marginTop: '10px' }}>
              <a href="#"><img src={facebook} alt="icons" style={{ height: '30px', width: '30px', borderRadius: '50%' }} /></a>
              <a href="#"><img src={linkedin} alt="icons" style={{ height: '30px', width: '30px', borderRadius: '50%' }} /></a>
              <a href="#"><img src={twitter} alt="icons" style={{ height: '30px', width: '30px', borderRadius: '50%' }} /></a>
            </ul>
          </div>
        </div>
        <div className="footer-nav">
          <ul>
            <li className="items"><a href="#home" >Home</a></li>
            <li className="items"><a href="#about" >Company Overview</a></li>
            <li className="items"><a href="#project" >Projects</a></li>
            <li className="items"><a href="#invester" >Investers</a></li>
            <li className="items"><a href="#services" >Our Services</a></li>
            <li className="items"><a href="#Contact Us" >Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-copy">
          <p style={{ fontWeight: 'bold', fontSize: '1.3rem' }}>&copy; 2023 Construction Co. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default App;