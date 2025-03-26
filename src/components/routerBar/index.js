import React from "react";
import { Link } from "react-router-dom";
import './styles.router.css'

import Home_icon from '../../assets/img/home-icon.png'

export default function RouterBar({ router }) {
    return (
        <div className="router-bar">
            <div className="router-bar-container">
                <Link to='/'>
                    <img src={Home_icon} alt="home" />
                </Link>
                {router.map((item, index) => (
                    <div className="router-item">
                        <div> / </div>
                        {
                            index !== router.length - 1 ?
                                <Link to={item.link}> {item.router} </Link> :
                                <div style={{cursor: 'pointer'}}>{item.router}</div>
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}