import React from 'react';

import Button from 'antd/lib/button';

import { ImageCard } from '../../core/components';

import './Home.css';

class Home extends React.PureComponent {
  render() {
    return (
      <div className="Home">
        <header className="Home-header">
          <p>
            Edit
            {' '}
            <code>src/Home.js</code>
            {' '}
and save to reload.
          </p>
        </header>
        <Button>Antd button</Button>
        <ImageCard />
      </div>
    );
  }
}

export default Home;
