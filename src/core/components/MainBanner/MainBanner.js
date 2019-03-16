import React from 'react';

import './MainBanner.scss';

class MainBanner extends React.PureComponent {
  render() {
    return (
      <div className="filter-banner">
        {/* <FilterFields /> */}
        <h1>Planning events has never been easier and faster</h1>
      </div>
    );
  }
}

export { MainBanner };
