import React from 'react';
import './index.css';

const Main6 = () => {
  return (
    <div className="certificates-section container">
      <h2>
        Unlock <span className="highlight-6">6 Certificates</span> & <span className="highlight-6">Internship Opportunities!</span>
      </h2>


      <div className="certificates-content">
        <div className="certificate">
          <h3>Get 6 Industry Recognized Certificates!</h3>
          <img src="./images/new-certiciate-design.png" className="certificate-6-img-1" alt="Certificate" />

          <div className="certificate-badges">
            <div>
              <img src="./images/award_star-1.png" alt="star-img" /> Official and Verified
            </div>
            <div>
              <img src="./images/award_star-1.png" alt="star-img" /> Enhances Credibility
            </div>
          </div>

        </div>
        
        <div className="internship">
          <h3 className='intership-heading-6'>Bag Internship Opportunities!</h3>
          <p>With every course, we make you not only industry-ready but also help you crack your first internship.</p>
          <img src="./images/14327653_5474231 1.png" className="certificate-6-img-2" alt="Internship" />
        </div>
      </div>
    </div>

  )
}

export default Main6;
