import React from "react";
import './styles.wes.css';

import Img from '../../../../assets/img/wes.png'

const wesData = {
    title: 'What is Energy storage?',
    content: [
        'As the global energy landscape shifts towards sustainability, the importance of renewable energy sources has surged. To support the transition to Net Zero goals, a growing portion of energy must now be sourced from renewables, presenting new challenges in managing electricity networks.',
        'Unlike the consistent output from traditional coal and gas power stations, renewable energy generation can be intermittent due to natural variances such as weather conditions, causing fluctuations in energy supply across extensive networks.',
        'Battery storage systems like those developed by ESC play a crucial role in stabilizing the grid. They store energy when production from renewable sources is high and release it during peak demand periods. This not only helps in managing the energy supply more efficiently but also ensures a reliable and steady power flow, crucial for both today’s needs and future expansion in electric transportation and heating. ESC is on a mission to help energize the world safely and responsibly.'
    ]
}

export default function WES() {
    return (
        <div className="wes">
            <div className="wes-title" data-aos='fade-up'>{wesData.title}</div>
            <div className="wes-content">
                <img src={Img} alt="img" data-aos='zoom-in' />
                <div className="wes-txt">
                    {
                        wesData.content.map((item) => (
                            <div className="wes-txt-item" data-aos='flip-up'>{item}</div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}