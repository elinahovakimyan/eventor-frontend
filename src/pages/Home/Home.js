import React from 'react';

import { MainBanner, ImageCard } from 'core/components';

import './Home.scss';

class Home extends React.PureComponent {
  render() {
    return (
      <div className="Home">
        <MainBanner />
        <ImageCard />
      </div>
    );
  }
}

export default Home;
