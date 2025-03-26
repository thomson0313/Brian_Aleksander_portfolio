import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.hero.css';

import ESC_model from '../../../assets/img/hero-banner-2.png';
import ESC_model_2 from '../../../assets/img/hero-banner-3.png';
import Tick_icon from '../../../assets/img/tick.png';
import Carousel from '../../Carousel/Carousel';

const heroData = [
    {
        title: 'Empower Your Business with Blockchain Solutions',
        subTitle: 'The Future of Secure and Transparent Transactions',
        features: [
            'Decentralized and secure systems',
            'Seamless integration with existing infrastructure',
            'Smart contract automation',
            'Cost-effective and scalable solutions',
        ],
        content: 'Our blockchain expertise empowers businesses to embrace decentralized technologies, ensuring transparency, security, and efficiency in all transactions.',
        btn: 'Discover Blockchain',
        img: ESC_model_2,
    },
    {
        title: 'Revolutionize with AI Innovations',
        subTitle: 'Smarter Technologies, Smarter Decisions',
        features: [
            'Real-time data analysis and insights',
            'Advanced machine learning models',
            'Custom AI solutions tailored to your needs',
            'Improved operational efficiency through automation',
            'Seamless integration with existing systems',
            'Scalable architectures for future growth'
        ],
        content: 'Leverage AI to drive innovation and gain a competitive edge with our cutting-edge AI development services.',
        btn: 'Explore AI Solutions',
        img: ESC_model,
    }
];

function Hero() {
    const sliderRef1 = useRef(null);
    const sliderRef2 = useRef(null);
    const [maxHeight, setMaxHeight] = useState(0);

    useEffect(() => {
        const height1 = sliderRef1.current.clientHeight;
        const height2 = sliderRef2.current.clientHeight;
        setMaxHeight(Math.max(height1, height2) + 200);
    }, []);

    const items = [
        <div className="hero" ref={sliderRef1} style={{ height: `${maxHeight}px` }}>
            <div className='hero-slide' data-aos='fade-down'>
                <img src={heroData[0].img} alt='hero-esc' className='hero-image' />
            </div>
            <div className='hero-content' data-aos='fade-down'>
                <div className='hero-title'>{heroData[0].title}</div>
                <div className='hero-sub-title'>{heroData[0].subTitle}</div>
                <div className='hero-features'>
                    {heroData[0].features.map((item, index) => (
                        <div key={index} className='hero-feature-item'>
                            <img src={Tick_icon} alt='tick' />
                            <div>{item}</div>
                        </div>
                    ))}
                </div>
                <div className='hero-description'>{heroData[0].content}</div>
                <div className='hero-hidden-image'>
                    <img src={heroData[0].img} alt='hero-esc' className='hero-image' />
                </div>
                <div className='sub'>
                    <Link to='/contact'>
                        <div className='button-c'>{heroData[0].btn}</div>
                    </Link>
                </div>
            </div>
        </div>,
        <div className="hero" ref={sliderRef2} style={{ height: `${maxHeight}px` }}>
            <div className='hero-content' data-aos='fade-down'>
                <div className='hero-title'>{heroData[1].title}</div>
                <div className='hero-sub-title'>{heroData[1].subTitle}</div>
                <div className='hero-features font-mid'>
                    {heroData[1].features.map((item, index) => (
                        <div key={index} className='hero-feature-item'>
                            <img src={Tick_icon} alt='tick' />
                            <div>{item}</div>
                        </div>
                    ))}
                </div>
                <div className='hero-description'>{heroData[1].content}</div>
                <div className='hero-hidden-image'>
                    <img src={heroData[1].img} alt='hero-esc' className='hero-image' />
                </div>
                <div className='sub'>
                    <Link to='/contact'>
                        <div className='button-c'>{heroData[1].btn}</div>
                    </Link>
                </div>
            </div>
            <div className='hero-slide' data-aos='fade-down'>
                <img src={heroData[1].img} alt='hero-esc' className='hero-image' />
            </div>
        </div>
    ];

    return (
        <Carousel items={items} />
    );
}

export default Hero;
