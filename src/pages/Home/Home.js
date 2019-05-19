import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Layout } from 'antd';

import './Home.scss';

const { Footer } = Layout;

// import { cakesPics } from '../../data/cakePics';
// import ImageCard from 'core/components/ImageCard/ImageCard';

class Home extends React.PureComponent {
  render() {
    return (
      <React.Fragment>
        <div className="home">
          <Button>
            <Link to="/jubilee-form">
              Կազմակերպել Ծնունդ
            </Link>
          </Button>
        </div>
        <Footer>© Eventor.am 2019</Footer>
      </React.Fragment>
    );
  }
}

export default Home;
