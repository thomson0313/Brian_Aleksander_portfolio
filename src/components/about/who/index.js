import React from "react";
import './styles.who.css'

const data = {
    title: "Who We Are",
    content: "Smallcap AI Service Limited liability company is a leading software development company, dedicated to delivering cutting-edge solutions that transform industries and empower businesses globally. Our expertise spans cloud computing, SaaS platforms, AI-driven analytics, and enterprise-grade software solutions tailored to meet the unique needs of diverse industries. Our product suite, including the Smallcap AI Service Cloud Suite, Smallcap AI Service AI Analytics, and Smallcap AI Service Edge Software, enables businesses to scale operations, optimize performance, and drive innovation. Whether you're a startup seeking agile solutions or an enterprise aiming to enhance efficiency, our customizable platforms ensure seamless integration and superior user experiences. We also specialize in custom software development, API integrations, and consultation services, ensuring that our clients receive end-to-end support. At Smallcap AI Service LLC, we are committed to building a smarter, more connected future through innovative software solutions. Join us in shaping tomorrow’s digital landscape!"
}

export default function Who() {
    return (
        <div className="who" data-aos='fade-up'>
            <div className="who-title" data-aos='zoom-in'>{data.title}</div>
            <div className="who-content">{data.content}</div>
        </div>
    )
}