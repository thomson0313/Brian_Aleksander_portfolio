import React from 'react';
import './styles.parte.css';

import ESC_model from '../../../assets/img/hero-banner-1.gif'

function Parte() {
    return (
        <div className="intro">
            <div className='intro-img' data-aos='zoom-in'>
                <img src={ESC_model} alt='intro-esc' width={300} className='intro-image' />
            </div>
            <div className='intro-content' data-aos='fade-down'>
                <div className='intro-sup'>
                    Why choose Smallcap AI Service LLC ?
                </div>
                <div className='intro-description'>
                    <div className='intro-description-list'>
                        <div className='intro-description-list-item'>
                            <li></li>
                            <div>Tailored High-Performance Solutions: Our software is optimized for applications requiring frequent and intensive processing cycles. Whether it's cloud computing, big data analysis, or enterprise resource planning, our solutions are built for reliability.</div>
                        </div>
                        <div className='intro-description-list-item'>
                            <li></li>
                            <div>Rapid Deployment and Updates: For businesses requiring quick implementation and regular updates—such as e-commerce platforms or dynamic customer service systems—our solutions provide unmatched agility and responsiveness.</div>
                        </div>
                        <div className='intro-description-list-item'>
                            <li></li>
                            <div>Enhanced Security Standards: In environments where data security is paramount, such as healthcare, finance, or government sectors, our software ensures compliance with the highest standards, minimizing risks and vulnerabilities.</div>
                        </div>
                        <div className='intro-description-list-item'>
                            <li></li>
                            <div>Adaptability in Extreme Environments: Our systems are designed to operate seamlessly in high-demand scenarios, ensuring stability and functionality even under heavy workloads or extreme conditions.</div>
                        </div>
                        <div className='intro-description-list-item'>
                            <li></li>
                            <div>Long-Term Cost Efficiency: Although premium software often involves higher initial investments, our solutions save money over time through reduced downtime, automation, and extended lifecycle support.</div>
                        </div>
                    </div>
                    <div className='intro-description-content'>At Smallcap AI Service LLC, we specialize in providing software solutions that emphasize high performance, safety, scalability, and cost efficiency. Perfect for industries such as finance, healthcare, retail, and renewable energy systems, we’re your partner in achieving sustainable growth through innovative technology.</div>
                </div>
            </div>
        </div>
    );
}

export default Parte;
