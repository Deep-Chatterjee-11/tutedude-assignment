import React from 'react';
import './index.css';

const Main1 = () => {
    return (
        <main className="main container">


            <div className="intro">


                <div className="badge">
                    <img src='./images/Graduation hat.png' alt="Graduation Cap" className="icon" />
                    <span>An <strong>IIT Delhi</strong> Alumni Initiative</span>
                </div>

                <div className='hero'>
                    <div><h1><strong>Become an Expert in the field of <span>Data Science<br />with 6 courses</span></strong></h1></div>
                    <div><p>A specially crafted Tech Kickstarter, with 5+ extensive online courses.</p></div>
                </div>


                <div className="badges">
                    <div>
                        <img src="./images/award_star.png" alt="star-img" />Personal Mentorship
                    </div>
                    <div>
                        <img src="./images/award_star.png" alt="star-img" />Internship Assistance
                    </div>
                    <div>
                        <img src="./images/award_star.png" alt="star-img" />Industry Certified Courses
                    </div>
                </div>


                <div className="buttons-container">
                    <button className="enroll-button">
                        Enroll Now <img src="./images/fi-br-paper-plane.png" alt="Enroll Now" className="icon" />
                    </button>
                    <a href="#" className="know-more">
                        Know More <img src="./images/fi-br-interrogation.png" alt="Know More" className="icon" />
                    </a>
                </div>


            </div>



            

        </main>
    );
}

export default Main1;
