import React from "react";
import './styles.tech.css'

import Icon_1 from '../../../assets/img/tech-1.png'
import Icon_2 from '../../../assets/img/tech-2.png'
import Icon_3 from '../../../assets/img/tech-3.png'

const data = [
    {
        title: "Scalable Architecture",
        content: "Our solutions are designed to handle growth seamlessly, ensuring your software scales efficiently with your business needs.",
        icon: Icon_1
    },
    {
        title: "Advanced Security",
        content: "We integrate cutting-edge security protocols to safeguard your data and ensure reliable performance in any environment.",
        icon: Icon_2
    },
    {
        title: "Sustainable Innovation",
        content: "Committed to technological sustainability, we develop solutions that are energy-efficient and eco-friendly, aligning with global environmental goals.",
        icon: Icon_3
    },
];

export default function Tech() {
    return(
        <div className="tech">
            <div className="tech-title" data-aos='zoom-in'>Our Core Technologies</div>
            <div className="tech-items-list">
                {data.map((item)=> (
                    <div className="tech-item" data-aos='flip-up'>
                        <div className="tech-item-title">
                            <img src={item.icon} alt="icon" />
                            <div>{item.title}</div>
                        </div>
                        <div className="tech-item-content">{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}