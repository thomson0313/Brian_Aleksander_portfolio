import React from "react";
import './styles.esc.css'

import Icon_1 from '../../../../assets/img/dev-1.png'
import Icon_2 from '../../../../assets/img/dev-2.png'
import Icon_3 from '../../../../assets/img/dev-3.png'
import Icon_4 from '../../../../assets/img/dev-4.png'
import Icon_5 from '../../../../assets/img/dev-5.png'
import Icon_6 from '../../../../assets/img/dev-1.png'

const data = [
    {
        title: "Analyze",
        content: "We perform in-depth analyses of your business needs to design scalable and efficient IT solutions that align with your goals.",
        icon: Icon_1,
    },
    {
        title: "Develop",
        content: "Our team builds custom software solutions using the latest technologies, ensuring performance and innovation at every step.",
        icon: Icon_2,
    },
    {
        title: "Deploy",
        content: "We streamline the deployment process, ensuring a smooth transition from development to a fully functional product with minimal downtime.",
        icon: Icon_3,
    },
    {
        title: "Optimize",
        content: "Through continuous monitoring and updates, we enhance your software’s performance, keeping it aligned with industry trends.",
        icon: Icon_4,
    },
    {
        title: "Collaborate",
        content: "Our collaborative approach ensures that stakeholders are involved throughout the development cycle, resulting in a user-focused solution.",
        icon: Icon_5,
    },
    {
        title: "Innovate",
        content: "We embrace emerging technologies to push the boundaries of software development, bringing innovative solutions to life.",
        icon: Icon_6,
    },
];

export default function ESC() {
    return(
        <div className="esc">
            <div className="esc-title" data-aos='zoom-in'>Our Development Process</div>
            <div className="esc-items-list">
                {data.map((item)=> (
                    <div className="esc-item" data-aos='flip-up'>
                        <div className="esc-item-title">
                            <img src={item.icon} alt="icon" />
                            <div>{item.title}</div>
                        </div>
                        <div className="esc-item-content">{item.content}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}