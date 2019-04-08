import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import './MainBanner.scss';

class MainBanner extends React.PureComponent {
  render() {
    return (
      <div className="filter-banner">
        <Link to="/service-providers"><Button>Գտնել ծննդյան միջոցառման ծառայություններ</Button></Link>
        {/* <FilterFields /> */}
      </div>
    );
  }
}

export { MainBanner };
