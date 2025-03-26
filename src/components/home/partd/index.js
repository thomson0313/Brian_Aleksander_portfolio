import React from 'react';
import './styles.partd.css';

import ESC_model from '../../../assets/img/produc-3.png'
import { Link } from 'react-router-dom';

function Partd() {
    return (
        <div className="intro">
            <div className='intro-img' data-aos='zoom-in'>
                <img src={ESC_model} alt='intro-esc' width={300} className='intro-image' />
            </div>
            <div className='intro-content' data-aos='fade-down'>
                <div className='intro-sup'>
                    ESC Hybrid Supercapacitor Battery
                </div>
                <div className='intro-description'>Our standard energy storage module features a voltage range of 42V to 58.8V and a capacity of 5,250 Wh. It supports 50 A charge/discharge currents, with a maximum pulse discharge up to 150 A. Operating from -20°C to 60°C, it boasts a lifespan of over 50,000 cycles. Compatible with inverters like Victron and SMA, it's engineered for long-lasting performance in parallel systems. Custom designed modules with any voltage requirements are available upon request.</div>
                <div className='intro-sub'>
                    <div className='intro-button'>
                        <Link to='/products'>Show Products</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Partd;
