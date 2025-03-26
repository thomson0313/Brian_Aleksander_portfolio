import React from 'react';
import './styles.parta.css';

import ESC_logo from '../../../assets/img/esc-logo.png'
import ESC_1 from '../../../assets/img/produc-f.png'
import ESC_2 from '../../../assets/img/produc-2.png'

export default function Parta() {
    return (
        <div className='part-a'>
            <div className='part-a-l' data-aos='fade-up'>
                <div className='part-a-logo'>
                    <img src={ESC_logo} alt='logo' />
                </div>
                <div className='part-a-des'>Whether you are powering or backing up your home, your office or an entire city block,  ESC has a scalable solution for you.  </div>
                <div className='part-a-des'>From 5 kWh - 10 Megawatts and higher,
                    ESC Engineers will design and build a system precisely tailored to your requirements.
                </div>
            </div>
            <div className='part-a-r' data-aos='zoom-in'>
                <img src={ESC_1} alt='esc' />
                <img src={ESC_2} alt='esc' />
            </div>
        </div>
    )
}