import React from "react";
import './styles.character.css'

import Icon_1 from '../../../assets/img/char-3.png'
import Icon_2 from '../../../assets/img/char-2.png'
import Icon_3 from '../../../assets/img/char-1.png'
import Icon_4 from '../../../assets/img/char-5.png'
import Icon_5 from '../../../assets/img/char-4.png'
import Icon_6 from '../../../assets/img/char-6.png'
import Icon_7 from '../../../assets/img/char-7.png'
import Icon_8 from '../../../assets/img/char-8.png'
import Icon_9 from '../../../assets/img/char-9.png'
import Icon_10 from '../../../assets/img/char-10.png'
import Icon_11 from '../../../assets/img/char-11.png'
import Icon_12 from '../../../assets/img/char-12.png'

const data = [
    {title: 'Cross-Platform Compatibility', content: "Ensures seamless functionality on web, mobile, and desktop environments.", icon: Icon_1},
    {title: 'High Performance', content: "Optimized for high-speed data processing and minimal downtime.", icon: Icon_2},
    {title: 'Real-Time Monitoring', content: "Provides live insights into system performance and user engagement.", icon: Icon_3},
    {title: 'Data Security', content: "Advanced encryption and compliance with GDPR and other standards.", icon: Icon_4},
    {title: 'User-Friendly Interface', content: "Designed for intuitive navigation and enhanced user experience.", icon: Icon_5},
    {title: 'Customizable Features', content: "Tailored modules to fit specific business needs.", icon: Icon_6},
    {title: 'Cloud Integration', content: "Seamlessly integrates with major cloud platforms for scalability.", icon: Icon_7},
    {title: 'Maintenance-Free Operation', content: "Automated updates and robust architecture reduce upkeep requirements.", icon: Icon_8},
    {title: 'Sustainability', content: "Built with energy-efficient coding practices.", icon: Icon_9},
    {title: '24/7 Support', content: "Dedicated customer service team to resolve issues anytime.", icon: Icon_10},
    {title: 'Continuous Innovation', content: "Regular updates to integrate the latest technology trends.", icon: Icon_11},
    {title: 'Exceptional Durability', content: "Engineered to handle large-scale operations with long-term reliability.", icon: Icon_12},
];

export default function Character() {
    return(
        <div className="char">
            <div className="char-title" data-aos='zoom-in'>Essential characteristics</div>
            <div className="char-items-list">
                {data.map((item)=> (
                    <div className="char-item" data-aos='fade-up'>
                        <img src={item.icon} alt="icon" />
                        <div>
                            <div className="char-item-title">{item.title}: </div>
                            <div>{item.content}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}