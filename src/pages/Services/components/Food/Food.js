import React from 'react';
import { connect } from 'react-redux';
import { Collapse, Radio } from 'antd';

import { getFoodInfo } from 'store/getters';

import MenuItem from './components/MenuItem';

import './Food.scss';

const Panel = Collapse.Panel;

class Food extends React.PureComponent {
  render() {
    const { foodInfo } = this.props;
    const menu = foodInfo ? foodInfo.menu : [];

    return (
      <div className="food-info">

        <h2 className="text-center">Առկա Փաթեթներ</h2>
        <div className="food-package-wrap">
          <Radio className="food-package" value={1}>
            Մինի - հավի խորոված, երկու տեսակի աղցան, ջրեղեն - 2,500 AMD
          </Radio>
        </div>
        <div className="food-package-wrap">
          <Radio className="food-package" value={2}>
            Ստանդարդ - խոզի խորոված, ձուկ, երկու տեսակի աղցան, ջրեղեն - 3,500 AMD
          </Radio>
        </div>
        <div className="food-package-wrap">
          <Radio className="food-package" value={3}>
            Մաքսի - հավի և խոզի խորոված, երեք տեսակի աղցան, ջրեղեն - 5,000 AMD
          </Radio>
        </div>


        <br />
        <br />


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
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  foodInfo: getFoodInfo(1, state),
});

export default connect(mapStateToProps)(Food);
