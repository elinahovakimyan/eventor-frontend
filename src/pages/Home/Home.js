import React from 'react';
import { Layout } from 'antd';

import './Home.scss';
import { MainBanner, ImageCard, Header } from 'core/components';

const { Content, Footer } = Layout;

class Home extends React.PureComponent {
  render() {
    return (
      <div className="home">
        <Header />
        <Content>
          <MainBanner />
          <div className="card-container">
            <div className="blocks-container">
              <div className="block-1">
                <ImageCard
                  type="restaurant"
                  title="Ժամանցի Վայր"
                  height="55vh"
                />
                <ImageCard
                  type="game"
                  title="Խաղային Շոու"
                  height="45vh"
                />
              </div>
              <div className="block-2">
                <ImageCard
                  type="cake"
                  title="Թխվածք"
                  height="45vh"
                />
                <ImageCard
                  type="photography"
                  title="Լուսանկարիչ"
                  height="55vh"
                />
              </div>
              <div className="block-3">
                <ImageCard
                  type="decoration"
                  title="Ձևավորում"
                  height="55vh"
                />
                <ImageCard
                  type="cartoon"
                  title="Մուլտհերոս"
                  height="45vh"
                />
              </div>
            </div>
          </div>
        </Content>
        <Footer>© Eventor.am 2019</Footer>
      </div>
    );
  }
}

export default Home;
