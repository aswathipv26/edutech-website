import React from "react";
import './AboutUs.css';
import male from '../../../assets/img/male.png'
const AboutUs=()=>{
    return(
        <div className="container">
            <div className="about-us-container">
                <div className="team-members">
                    <h2>Our Team</h2>
                    <div className="member-card">
                        <img className="member-image" src={male}
                        alt="" />
                        <h3 className="member-name">Founder</h3>
                      
                    </div>
                </div>
                <div className="about-us-description">
                    <h1 className="about-us-heading">About Us</h1>
                   <p>With the passion for empowering learners of
                all ages, our mission is to make education accessible,
                engaging, and personalised through our cutting-edge
                educational technology platform.
                   </p>
                </div>
            </div>

        </div>
    )
}

export default AboutUs;