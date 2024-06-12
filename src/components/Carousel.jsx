import React, { useState, useEffect } from 'react';
import './Carousel.css';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    setCurrentImageIndex(newIndex);
  };

  const renderCounter = () => {
    return (
      <div className="counter">
        {images.map((_, index) => (
          <div
            key={index}
            className={index === currentImageIndex ? 'active' : ''}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div>
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => clearInterval(intervalId);
  }, [currentImageIndex]);

  return (
    <div className="carousel">
      <button onClick={prevSlide} className="arrow left-arrow">&#10094;</button>
      <div className="slides" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Imagem do carrossel"
            className={index === currentImageIndex ? 'slide active' : 'slide'}
          />
        ))}
      </div>
      <button onClick={nextSlide} className="arrow right-arrow">&#10095;</button>
      {renderCounter()}
    </div>
  );
};

export default Carousel;
