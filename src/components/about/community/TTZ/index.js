import React from "react";
import './styles.ttz.css';

import Img_1 from '../../../../assets/img/frontend.png'
import Img_2 from '../../../../assets/img/shopify.jpg'
import Img_3 from '../../../../assets/img/mobile.png'

const ttzData = {
    title: ["WHAT WE DO", "Our Professional Services"],
    sub: "Building a website, Development the shopify. Our products are 100% turn-key & believable",
    cards: [
        {
            topic: 'WEBSITE BUILDING',
            content: 'Brian Aleksander Service LLC specializes in crafting responsive, user-friendly websites tailored to enhance your digital presence. From e-commerce platforms to portfolio sites, we focus on design, functionality, and scalability.',
            img: Img_1
        },
        {
            topic: 'SHOPIFY DEVELOPMENT',
            content: 'Our Shopify solutions empower your eCommerce business with customized, scalable, and user-friendly online stores. From theme development to app integration, we help you create seamless shopping experiences that drive growth and conversions.',
            img: Img_2
        },
        {
            topic: 'MOBILE APP DEVELOPMENT',
            content: 'Brian Aleksander Service LLC creates cutting-edge mobile applications for iOS and Android platforms. Our apps are designed to offer seamless user experiences, integrate advanced features, and meet your business objectives.',
            img: Img_3
        }
    ]
}


export default function TTZ() {
    return (
        <div className="ttz">
            <div className="ttz-title" data-aos='fade-down'>
                <div className="ttz-title-x">{ttzData.title[0]}</div>
                <div className="ttz-title-y">{ttzData.title[1]}</div>
            </div>
            <div className="ttz-sub" data-aos='fade-down'>{ttzData.sub}</div>
            <div className="ttz-cards">
                {
                    ttzData.cards.map((item) => (
                        <div className="ttz-card-item" data-aos='flip-up'>
                            <img src={item.img} alt="img" />
                            <div>{item.topic}</div>
                            <div className="ttz-item-content">{item.content}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}