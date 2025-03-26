import React from "react";
import './styles.tq.css';

const tqData = {
    title: ["Our Commitment", "To Quality"],
    sub: "At Smallcap AI Service LLC, we are dedicated to delivering state-of-the-art IT solutions that redefine industry standards. We strive to be the benchmark for innovation, reliability, and service in the IT sector.",
    content: [
        {
            title: "Quality Standards",
            data: [
                { 
                    subTitle: "Solution Excellence: ", 
                    subData: "Our software and IT services undergo extensive testing and audits to ensure they meet the highest benchmarks for security, performance, and usability." 
                },
                { 
                    subTitle: "Certifications: ", 
                    subData: "Smallcap AI Service LLC holds globally recognized certifications in IT compliance, cybersecurity, and service management, including ISO and SOC standards." 
                }
            ]
        },
        { 
            title: "Innovation and Continuous Improvement", 
            data: "Innovation drives our IT offerings. We consistently invest in emerging technologies like AI, cloud computing, and blockchain to keep our solutions ahead of the curve and aligned with customer needs." 
        },
        { 
            title: "Background", 
            data: "With over 20 years of experience in delivering IT infrastructure, software development, and digital transformation services across various industries, we’ve built a legacy of excellence." 
        },
        { 
            title: "Customer-Centric Approach", 
            data: "Our focus on customer satisfaction is reflected in our responsive technical support, customized solutions, and transparent processes. We ensure clients get the most out of their IT investments." 
        },
        { 
            title: "Sustainability and Ethics", 
            data: "Smallcap AI Service LLC prioritizes green computing practices and ethical technology solutions to minimize environmental impact while maximizing societal benefits." 
        },
    ]
};

export default function TQ() {
    return (
        <div className="tq">
            <div className="tq-title" data-aos='fade-down'>
                <div className="tq-title-x">{tqData.title[0]}</div>
                <div className="tq-title-y">{tqData.title[1]}</div>
            </div>
            <div className="tq-sub" data-aos='fade-down'>{tqData.sub}</div>
            <div className="tq-items">
                <div className="tq-items-l">
                    <div className="tq-item" data-aos='flip-up'>
                        <div className="tq-item-title">{tqData.content[0].title}</div>
                        <div className="tq-item-content">
                            <div className="tq-item-sub-content">
                                <span>{tqData.content[0].data[0].subTitle}</span>
                                {tqData.content[0].data[0].subData}
                            </div>
                            <div className="tq-item-sub-content">
                                <span>{tqData.content[0].data[1].subTitle}</span>
                                {tqData.content[0].data[1].subData}
                            </div>
                        </div>
                    </div>
                    <div className="tq-item" data-aos='flip-up'>
                        <div className="tq-item-title">{tqData.content[1].title}</div>
                        <div className="tq-item-content">{tqData.content[1].data}</div>
                    </div>
                    <div className="tq-item" data-aos='flip-up'>
                        <div className="tq-item-title">{tqData.content[2].title}</div>
                        <div className="tq-item-content">{tqData.content[2].data}</div>
                    </div>
                </div>
                <div className="tq-items-r">
                    <div className="tq-item" data-aos='flip-up'>
                        <div className="tq-item-title">{tqData.content[3].title}</div>
                        <div className="tq-item-content">{tqData.content[3].data}</div>
                    </div>
                    <div className="tq-item" data-aos='flip-up'>
                        <div className="tq-item-title">{tqData.content[4].title}</div>
                        <div className="tq-item-content">{tqData.content[4].data}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}