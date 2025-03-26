import React from "react";
import { Link } from "react-router-dom";
import './styles.partb.css'

import Product_1 from '../../../assets/img/produc-b.png'
import Product_2 from '../../../assets/img/produc-t.png'
import Right_icon from '../../../assets/img/right-arrow.png'

import { ESC_data } from "../../../utils/data";

const features = [
    "100% Depth of Discharge (DoD)",
    "Safe — No risk of thermal runaway",
    "Long Lifespan/Cycle Life",
    "Wide operating temperature",
    "Low ESR",
    "Green/Environmentally Friendly",
    "Low maintenance"
];

export default function Partb() {
    return (
        <div className="part-b">
            <div className="part-b-product">
                <div className="part-b-cont" data-aos='fade-up'>
                    <div className="part-b-title">ESC Wall Mount Systems</div>
                    <div className="part-b-sub">Features:</div>
                    <div className="feature-list">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                {feature}
                            </div>
                        ))}
                    </div>
                    <Link to='/product/wall' state={ESC_data.wall}>
                        <div className="part-b-button">
                            <div>View Product</div>
                            <img src={Right_icon} alt="arrow" />
                        </div>
                    </Link>
                </div>
                <div className="part-b-img" data-aos='fade-down'>
                    <img src={Product_1} alt="product" />
                </div>
            </div>
            <div className="part-b-product">
                <div className="part-b-cont" data-aos='fade-up'>
                    <div className="part-b-title">ESC Rack Mount Systems</div>
                    <div className="part-b-sub">Features:</div>
                    <div className="feature-list">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-item">
                                {feature}
                            </div>
                        ))}
                    </div>
                    <Link to='/product/rack' state={ESC_data.rack}>
                        <div className="part-b-button">
                            <div>View Product</div>
                            <img src={Right_icon} alt="arrow" />
                        </div>
                    </Link>
                </div>
                <div className="part-b-img" data-aos='fade-down'>
                    <img src={Product_2} alt="product" />
                </div>
            </div>
        </div>
    )
}