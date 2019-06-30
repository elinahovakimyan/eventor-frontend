import React from 'react';
import ImageGallery from 'react-image-gallery';

import './ImageCarousel.scss';

class ImageCarousel extends React.PureComponent {

  render() {
    const { imgs } = this.props;
    const images = imgs && imgs.length ? imgs.map(img => ({ original: img, thumbnail: img })) : [];

    return (
      <div className="ImageCarousel">
        <ImageGallery items={images} showPlayButton={false} />
      </div>
    );
  }
}

export { ImageCarousel };
