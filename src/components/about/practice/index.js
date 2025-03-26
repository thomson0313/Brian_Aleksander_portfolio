import React from "react";
import './styles.practice.css'

import Icon_1 from '../../../assets/img/practice-1.png'
import Icon_2 from '../../../assets/img/practice-2.png'
import Icon_3 from '../../../assets/img/practice-3.png'

const data = [
    {
        title: "Innovative Solutions",
        content: "Brian Aleksander Service LLC harnesses the power of cutting-edge software technologies to streamline operations, improve efficiency, and create sustainable digital solutions that empower businesses.",
        icon: Icon_1
    },
    {
        title: "Resource Management",
        content: "Our software is built with the latest security protocols, ensuring robust data management and reliability in every solution we deliver, helping companies manage their resources effectively.",
        icon: Icon_2
    },
    {
        title: "Community Engagement",
        content: "Brian Aleksander Service LLC is committed to fostering digital literacy, supporting educational initiatives, and collaborating with tech communities to drive global progress through innovation.",
        icon: Icon_3
    },
];

export default function Practice() {
    return(
        <div className="practice">
            <div className="practice-container">
                <div className="practice-title" data-aos='zoom-in'>How We Practice Sustainability</div>
                <div className="practice-items-list">
                    {data.map((item)=> (
                        <div className="practice-item" data-aos='zoom-in'>
                            <div className="practice-item-title">
                                <img src={item.icon} alt="icon" />
                                <div>{item.title}</div>
                            </div>
                            <div className="practice-item-content">{item.content}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}