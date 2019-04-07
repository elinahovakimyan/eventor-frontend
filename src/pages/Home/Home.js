import React from 'react';

import { MainBanner, ImageCard } from 'core/components';

import './Home.scss';

class Home extends React.PureComponent {
  render() {
    return (
      <div className="Home">
        <MainBanner />
        <div className="card-container">
          <ImageCard type="restaurant" title="Ժամանցի Վայր" />
          <ImageCard type="decoration" title="Ձևավորում" />
          <ImageCard type="cake" title="Թխվածք" />
          <ImageCard type="cartoon" title="Մուլտհերոս" />
          <ImageCard type="game" title="Խաղային Շոու" />
          <ImageCard type="photography" title="Լուսանկարիչ" />
        </div>
      </div>
    );
  }
}

export default Home;
