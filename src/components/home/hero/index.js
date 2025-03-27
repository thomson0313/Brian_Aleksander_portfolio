import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.hero.css';

import Shopify_model from '../../../assets/img/shopify_banner.png';
import ESC_model_2 from '../../../assets/img/hero-banner-3.png';
import Tick_icon from '../../../assets/img/tick.png';
import Carousel from '../../Carousel/Carousel';

const heroData = [
    {
        title: 'Revolutionize with Web and Mobile App Development',
        subTitle: 'Smarter Applications for Smarter Businesses',
        features: [
            'Custom web and mobile applications',
            'Intuitive UI/UX design for better user experiences',
            'Scalable and secure architecture',
            'Cross-platform solutions for web and mobile',
            'Real-time data integration and API development',
            'Seamless integration with your existing systems',
        ],
        content: 'Transform your business with custom web and mobile applications designed to enhance functionality and streamline operations.',
        btn: 'Explore Web & Mobile Solutions',
        img: ESC_model_2,
    },
    {
        title: 'Empower Your Business with Shopify Solutions',
        subTitle: 'The Future of Seamless eCommerce Experiences',
        features: [
            'Customizable and scalable online stores',
            'Seamless integration with payment gateways',
            'Mobile-optimized and responsive designs',
            'Advanced analytics and reporting tools',
        ],
        content: 'Our Shopify expertise enables businesses to create tailored, high-performance online stores that drive sales and improve customer engagement.',
        btn: 'Discover Shopify Solutions',
        img: Shopify_model,
    },
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
