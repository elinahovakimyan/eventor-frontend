import React from 'react';
import ImageGallery from 'react-image-gallery';

import './ImageCarousel.scss';

function ImageCarousel({ imgs, isLocal }) {
  const baseUrl = '../../../assets/services';
  const images = imgs && imgs.length
    ? imgs.map(img => {
      const imgUrl = isLocal ? `${baseUrl}/${img}` : img;
      return ({ original: imgUrl, thumbnail: imgUrl });
    })
    : [];

  return (
    <div className="ImageCarousel">
      <ImageGallery items={images} showPlayButton={false} showFullscreenButton={false} />
    </div>
  );
}

export { ImageCarousel };
