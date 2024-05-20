import React from 'react';
import './index.css';

const Main4 = () => {
    return (
        <div className="container-4">
            <h1 className='h1-heading'>Don't miss out on this <span className="highlight-4">limited-time <br /> opportunity</span> to learn for <span className="highlight">Free!</span></h1>

            <div className="offer-container-4">
                <div className='refund-offer'><h2 className='h2-heading'>100% Refund Offer 😎</h2><img src="/images/scribble final version-24.png" className="refund-plane" alt="" /></div>
                <div className="seats">20 Seats Left</div>
                <div className="progress-bar">
                    <div className="progress"></div>
                    <div className="circle"></div>
                </div>
                <div className="offer-end"><img src="/images/bx_time-five.png" className='clock' alt="" />Offer ends in 10:00Mins</div>
            </div>

            <div className="how-it-works">
                <h2 className='h2-heading'>How does it work?</h2>
                <div className="steps">
                    <div className="step">
                        <div className="step-header">Step 1</div>
                        <div className="step-content">
                            <h3>Step 1 : Enroll into your favorite course for only ₹1,499</h3>
                            <p>Start Learning with <strong>Lifetime Course Access</strong>.</p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-header">Step 2</div>
                        <div className="step-content">
                            <h3>Step 2 : Complete Course & Assignments within 2 Years!</h3>
                            <p>
                                <span className="highlight">2 years</span> time from the date of enrollment.
                                Finish the course within 2 Years to Qualify for Refund.
                            </p>
                        </div>
                    </div>
                    <div className="step">
                        <div className="step-header">Step 3</div>
                        <div className="step-content">
                            <h3>Step 3 : Receive 100% Refund upon completion</h3>
                            <p>
                                <span className="highlight">100%</span> Enrollment Fee is refunded.
                                Upon Course Completion within 2 Years, Get Your ₹1,499 Back.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Main4;