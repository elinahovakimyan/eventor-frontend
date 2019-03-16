import React from 'react';

import Button from 'antd/lib/button';

import './ImageCard.scss';

class ImageCard extends React.PureComponent {
  render() {
    return (
      <div className="image-card">
        <header className="image-card-header">
          <Button>This is a card button</Button>
        </header>
      </div>
    );
  }
}

export { ImageCard };
