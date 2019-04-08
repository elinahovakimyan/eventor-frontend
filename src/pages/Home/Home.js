import React from 'react';

import './Home.scss';
import ImageCard from 'core/components/ImageCard/ImageCard';
import { MainBanner } from '../../core/components';

class Home extends React.PureComponent {
  render() {
    return (
      <div className="home">
        <MainBanner />
        <div className="card-container">
          <div className="blocks-container">
            <div className="block-1">
              <ImageCard
                path="restaurant"
                type="restaurant"
                title="Ժամանցի Վայր"
                height="55vh"
              />
              <ImageCard
                path="game_show"
                type="game"
                title="Խաղային Շոու"
                height="45vh"
              />
            </div>
            <div className="block-2">
              <ImageCard
                path="cake"
                type="cake"
                title="Թխվածք"
                height="45vh"
              />
              <ImageCard
                path="photographer"
                type="photography"
                title="Լուսանկարիչ"
                height="55vh"
              />
            </div>
            <div className="block-3">
              <ImageCard
                path="decoration"
                type="decoration"
                title="Ձևավորում"
                height="55vh"
              />
              <ImageCard
                path="cartoon_hero"
                type="cartoon"
                title="Մուլտհերոս"
                height="45vh"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
