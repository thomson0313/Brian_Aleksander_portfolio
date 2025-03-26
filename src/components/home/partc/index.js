import React from 'react';
import { Link } from 'react-router-dom';
import './styles.partc.css';

import ESC_logo from '../../../assets/img/esc-logo.png'
import ESC_1 from '../../../assets/img/produc-4.png'
import Right_icon from '../../../assets/img/right-arrow-w.png'

export default function Partc() {
    return (
        <div className='part-c'>
            <div className='part-c-l' data-aos='fade-up'>
                <div className='part-c-logo'>
                    <img src={ESC_logo} alt='logo' />
                </div>
                <div className='part-c-title'>Hybrid Supercapacitors The Future of Battery Energy Storage</div>
                <Link to='/products' >
                    <div className="part-c-button">
                        <div>View Products</div>
                        <img src={Right_icon} alt="arrow" />
                    </div>
                </Link>
            </div>
            <div className='part-c-r' data-aos='zoom-out'>
                <img src={ESC_1} alt='esc' />
            </div>
        </div>
    )
}