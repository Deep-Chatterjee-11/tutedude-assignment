import React from 'react';
import './index.css';
import eyeIcon from '/images/fi-br-eye.png';

const Main3 = () => {

    const courses = [
        {
            title: 'C++', 
            description: 'Learn C++ for strong programming fundamentals.' 
        },

        { 
            title: 'MERN Stack', 
            description: 'Master the MERN stack for high-demand projects.' 
        },

        { 
            title: 'Data Structure & Algorithm', 
            description: 'Excel in Data Structures and Algorithms for interview success.' 
        },

        { 
            title: 'Competitive Programming', 
            description: 'Excel in Data Structures and Algorithms for interview success.' 
        }
    ];

    return (
        <div className="curriculum-container">
            <div className="curriculum-header">
                <span className="learning-path">DATASCIENCE COURSE LEARNING PATH</span>
                <h2><span className="highlight">Data Science</span> Course Curriculum</h2>
            </div>
            <div className="curriculum-list">
                {courses.map((course, index) => (
                    <div key={index} className="course-item">
                        <div className="course-info">
                            <h3>{course.title}</h3>
                            <p>{course.description}</p>
                        </div>
                        <button className="view-curriculum">
                            <img src={eyeIcon} alt="eye-icon" />
                            <span>View Curriculum</span>
                        </button>
                    </div>
                ))}
            </div>
        </div>

    );
};

export default Main3;