import React from 'react';

import { Carousel } from 'antd';

import './ImageCarousel.scss';

class ImageCarousel extends React.PureComponent {

  onChange = () => {
  }

  render() {
    const { imgs } = this.props;

    if (imgs && imgs.length) {
      return (
        <Carousel
          autoplay
          afterChange={this.onChange}
          dotPosition="top"
          autoplaySpeed={2000}
        >
          {imgs.map((imgSrc, i) => (
            <div key={imgSrc + i}>
              <img src={imgSrc} alt="eventor" />
            </div>
          ))}
        </Carousel>
      );
    }

    return null;
  }
}

export { ImageCarousel };
