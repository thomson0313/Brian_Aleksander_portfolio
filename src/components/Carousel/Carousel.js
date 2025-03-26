// src/Carousel.js
import React, { useState } from 'react';
import './Carousel.css'; // Import the CSS file for styling

const Carousel = ({ items }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    return (
        <div className="carousel">
            <div className="carousel-inner" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                {items.map((item, index) => (
                    // Remove curly braces to return the item directly
                    <div key={index} className="carousel-item">
                        {item}
                    </div>
                ))}
            </div>
            <button className="carousel-control prev" onClick={prevSlide}>
                &#10094;
            </button>
            <button className="carousel-control next" onClick={nextSlide}>
                &#10095;
            </button>
            <div className="carousel-indicators">
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
