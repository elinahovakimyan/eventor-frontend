import React from 'react';
import { connect } from 'react-redux';
import { Collapse } from 'antd';

import { formatPrice } from 'core/helpers';
import { Space } from 'core/components';
import { getFoodInfo } from 'store/getters';

import MenuItem from './components/MenuItem';
import Packages from './components/Packages';

import './Food.scss';

const Panel = Collapse.Panel;

class Food extends React.PureComponent {
  render() {
    const { foodInfo } = this.props;
    const menu = foodInfo ? foodInfo.menu : [];
    const packages = foodInfo ? foodInfo.packages : [];

    return (
      <div className="food-info">

        <Packages packages={packages} />

        <Space />

        <h2 className="text-center">...Կամ օգտվե՛ք մենյուից</h2>
        <Collapse className="menu">
          {menu.map(section => (
            <Panel header={section.title} key={section.id}>
              {section.items.map(item => (
                <MenuItem item={item} key={item.name} />
              ))}
            </Panel>
          ))}
        </Collapse>

        <h2 className="text-right">
          Կազմեց՝
          {' '}
          {formatPrice(0)}
        </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foodInfo: getFoodInfo(1, state),
});

export default connect(mapStateToProps)(Food);
