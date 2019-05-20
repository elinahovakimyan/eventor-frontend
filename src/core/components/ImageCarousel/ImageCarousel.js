import React from 'react';

import { Carousel } from 'antd';

import './ImageCarousel.scss';

class ImageCarousel extends React.PureComponent {

  onChange = () => {
  }

  render() {
  //  const { service } = this.props;

    return (
      <Carousel afterChange={this.onChange} dotPosition="top">
        <div>
          <h3>1</h3>
        </div>
        <div>
          <h3>2</h3>
        </div>
        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
      </Carousel>
    );
  }
}

export { ImageCarousel };
