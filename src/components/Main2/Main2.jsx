import React from 'react';
import './index.css';
import coursesIcon from '/images/Group.png';
import learnersIcon from '/images/Group (1).png';
import doubtsIcon from '/images/XMLID_994_.png';
import projectsIcon from '/images/Complete.png';
const Main2 = () => {
  
  const stats = [
    { icon: coursesIcon, number: '24', label: 'Courses' },
    { icon: learnersIcon, number: '30k+', label: 'Learners' },
    { icon: doubtsIcon, number: '100k+', label: 'Doubts Solved' },
    { icon: projectsIcon, number: '10k+', label: 'Student Projects' },
  ];


  return (
    <div className="statistics-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-item">
          <img src={stat.icon} alt={stat.label} className="stat-icon" />
          <div className="stat-number">{stat.number}</div>
          <div className="stat-label">{stat.label}</div>
        </div>
      ))}
    </div>
  )
}

export default Main2;