import React, { Fragment, useState, useEffect } from 'react';
import Placeholder from '../../assets/Background.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // add lazy loading for images to improve performance to remove undefined error
  const [images, setImages] = useState();
  const [imageLenght, setImageLenght] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (props.images == undefined) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
      setImageLenght(props.images.length);
      setImages(props.images);
    }
  }, [props.images, isLoading]);

  const nextImage = () => {
    if (currentIndex < props.images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else if (currentIndex === props.images.length - 1) {
      setCurrentIndex(0);
    }
  };
  const previousImage = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (currentIndex === 0) {
      setCurrentIndex(props.images.length - 1);
    }
  };
  return (
    <Fragment>
      <div className='carousel-banner '>
        <div className='carousel-grid'>
          <FaChevronLeft className='icon icon-left' onClick={previousImage} />
          <img
            alt='Florest Banner'
            className='carousel-image'
            src={images === undefined ? '' : images[currentIndex]}
          />
          <FaChevronRight className='icon icon-right' onClick={nextImage} />
          <div className='pages'>
            {currentIndex + 1}/{imageLenght === 0 ? 0 : imageLenght}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Carousel;
