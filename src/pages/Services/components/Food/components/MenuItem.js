import React from 'react';

import MenuItemModal from './MenuItemModal';

class MenuItem extends React.PureComponent {
  render() {
    const { item } = this.props;

    return (
      <div className="menu-item">
        <div className="menu-item-text">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
        </div>
        <div className="flex-row-center">
          <h3 className="menu-item-price">
            {`${item.price} դր.`}
          </h3>
          <MenuItemModal item={item} />
        </div>
      </div>
    );
  }
}

export default MenuItem;
