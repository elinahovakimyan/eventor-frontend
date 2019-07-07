import React from 'react';
import ImageGallery from 'react-image-gallery';

import './ImageCarousel.scss';

function ImageCarousel({ imgs }) {
  const images = imgs && imgs.length ? imgs.map(img => ({ original: img, thumbnail: img })) : [];

  return (
    <div className="ImageCarousel">
      <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} />
    </div>
  );
}

export { ImageCarousel };
