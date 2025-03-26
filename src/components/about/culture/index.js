import React from "react";
import './styles.culture.css'


const cultureData = [
    {
        title: "Core Value",
        content: "Our company is built on a foundation of customer-centricity. We believe that our talented team is the heart of our innovation and success. Their passion for excellence ensures that we create software solutions that empower our clients and exceed expectations."
    },
    {
        title: "Core Vision",
        content: "Brian Aleksander Service LLC envisions a future where we lead the software industry through groundbreaking technologies that drive digital transformation. Over the next decade, we aim to enhance global connectivity, security, and efficiency through innovative software solutions."
    },
    {
        title: "Corporate Spirit",
        content: "We prioritize creativity and innovation, constantly exploring new ideas and cutting-edge technologies. Continuous improvement is central to our spirit, ensuring we adapt to change and deliver exceptional results. Collaboration and teamwork drive us toward achieving shared goals."
    },
    {
        title: "Our Working Philosophy",
        content: "Our philosophy is rooted in professionalism, ensuring we approach every project with dedication and precision. We take ownership of our work, striving for efficiency and accountability. Ethical practices guide our actions, fostering trust and integrity in every client relationship."
    },
];

export default function Culture() {
    return (
        <div className="culture">
            <div className="culture-title" data-aos='zoom-in'>Our Corporation Culture</div>
            <div className="culture-items-list">
                <div className="culture-items-l">
                    <div className="culture-item" data-aos='flip-up'>
                        <div className="culture-item-title">{cultureData[0].title}</div>
                        <div className="culture-item-content">{cultureData[0].content}</div>
                    </div>
                    <div className="culture-item" data-aos='flip-up'>
                        <div className="culture-item-title">{cultureData[1].title}</div>
                        <div className="culture-item-content">{cultureData[1].content}</div>
                    </div>
                </div>
                <div className="culture-items-r">
                    <div className="culture-item" data-aos='flip-up'>
                        <div className="culture-item-title">{cultureData[2].title}</div>
                        <div className="culture-item-content">{cultureData[2].content}</div>
                    </div>
                    <div className="culture-item" data-aos='flip-up'>
                        <div className="culture-item-title">{cultureData[3].title}</div>
                        <div className="culture-item-content">{cultureData[3].content}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}