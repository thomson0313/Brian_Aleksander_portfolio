import React from 'react';
import './styles.cards.css';

import Icon_1 from '../../../assets/img/icon-1.png'
import Icon_2 from '../../../assets/img/icon-2.png'
import Icon_3 from '../../../assets/img/icon-3.png'
import Icon_4 from '../../../assets/img/icon-4.png'
import Icon_5 from '../../../assets/img/icon-5.png'

const cardData = [
    { 
        title: 'Longevity', 
        content: 'Our software is built to last with scalable architecture, ensuring it supports your business for years to come.', 
        icon: Icon_1 
    },
    { 
        title: 'Reliability', 
        content: 'Delivers consistent performance across multiple platforms with 99.9% uptime guarantees.', 
        icon: Icon_2 
    },
    { 
        title: 'Stability', 
        content: 'Robust coding practices ensure stability and seamless functionality even under heavy loads.', 
        icon: Icon_3 
    },
    { 
        title: 'Speed Optimization', 
        content: 'High-speed processing and optimized algorithms reduce latency and enhance user experience.', 
        icon: Icon_4 
    },
    { 
        title: 'Cost Efficiency', 
        content: 'Designed to maximize ROI by automating processes and reducing resource overhead.', 
        icon: Icon_5 
    },
];

const Card = ({ title, content, icon, bg }) => {
    return (
        <div className={bg === 'primary' ? "primary-color card" : "card"} data-aos='flip-down'>
            <div className='card-sup'>
                <div className="card-icon">
                    <img src={icon} alt='icon' width={30} />
                </div>
                <h3 className="card-title">{title}</h3>
            </div>
            <div className="card-content">{content}</div>
        </div>
    );
};

const Features = () => {
    return (
        <div className="features-container">
            {
                cardData.map((cardItem) => (
                    <Card 
                        title={cardItem.title}
                        content={cardItem.content}
                        icon={cardItem.icon}
                        bg={(cardItem.title === 'Stability' || cardItem.title === 'Supercharging') ? 'primary' : 'black'}
                    />
                ))
            }
        </div>
    );
};

export default Features;
