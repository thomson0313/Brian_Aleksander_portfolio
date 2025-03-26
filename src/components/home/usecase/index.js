import React from "react";
import './styles.usecase.css';
import BatteryComparisonTable from "./ComparisonTable";

import LIPO from '../../../assets/img/produc-1.png'
import HSC from '../../../assets/img/produc-4.png'
import Good_icon from '../../../assets/img/good.png'
import Bad_icon from '../../../assets/img/bad.png'

export default function Usecase() {
    return(
        <div className="usecase">
            <div className="usecase-title">Why Our HSC Battery is Best in Class</div>
            <div className="usecase-compare">
                <div className="usecase-bad">
                    <div className="usecase-compare-name" data-aos='fade-down'>LIPO Batteries</div>
                    <div className="usecase-product" data-aos='zoom-in'>
                        <div className="usecase-product-img">
                            <img src={LIPO} alt="lipo" />
                        </div>
                        <div className="usecase-result-icon">
                            <img src={Bad_icon} alt="bad" />
                        </div>
                    </div>
                </div>
                <div className="usecase-good">
                    <div className="usecase-compare-name" data-aos='fade-down'>HSC Batteries</div>
                    <div className="usecase-product" data-aos='zoom-in'>
                        <div className="usecase-result-icon">
                            <img src={Good_icon} alt="good" />
                        </div>
                        <div className="usecase-product-img">
                            <img src={HSC} alt="hsc" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="usecase-txt" data-aos='fade-down'>When comparing our energy storage technology to existing battery solutions, we come out on top. The safety, longevity, and reliability of our HSC are unrivaled.</div>
            <BatteryComparisonTable />
        </div>
    )
}