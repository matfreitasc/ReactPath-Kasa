import React, { Fragment, useState, useEffect } from 'react';
import Placeholder from '../../assets/Background.png';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Carousel(props) {
  const [images, setImages] = useState([]);
  const [lastImage, setLastImage] = useState(0);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    // setLastImage(props.images.length);
  }, [props.images]);

  useEffect(() => {
    // setImages(props.images);
  }, [props.images]);

  const nextImage = () => {
    if (currentImage < lastImage) {
      setCurrentImage(currentImage + 1);
    } else {
      setCurrentImage(0);
    }
  };
  const previousImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    } else {
      setCurrentImage(lastImage);
    }
  };

  return (
    <Fragment>
      <div className='carousel-banner '>
        <div className='carousel-grid'>
          <FaChevronLeft className='icon icon-left' onClick={previousImage} />
          <img alt='Florest Banner' src={Placeholder} />
          <FaChevronRight className='icon icon-right' onClick={nextImage} />
          <div className='pages'>
            {currentImage}/{lastImage}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Carousel;
