import React from 'react';
import { connect } from 'react-redux';
import { Collapse, Empty } from 'antd';

import { formatPrice } from 'core/helpers';
import { Space } from 'core/components';
import { getFoodInfo } from 'store/getters';

import MenuItem from './components/MenuItem';
import Packages from './components/Packages';

import './Food.scss';

const Panel = Collapse.Panel;

class Food extends React.PureComponent {
  render() {
    const { selectedVenue, foodInfo } = this.props;
    const menu = foodInfo ? foodInfo.menu : null;
    const packages = foodInfo ? foodInfo.packages : null;

    return (
      <div className="food-info">

        {packages
          ? <Packages packages={packages} />
          : null}

        <Space />

        {menu
          ? (
            <div>
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
          )
          : null}


        {(!packages && !menu)
          ? (
            <h2 className="text-center">
              <Empty description="Օյ, սննդի ցանկ չի գտնվել։" />
              <br />
              {selectedVenue && selectedVenue.length
                ? ' Ձեր ընտրած ժամանցի վայրի սննդի մանրամասների համար խնդրում ենք զանգահարել։'
                : ' Խնդրում ենք ընտրել որևէ ժամանցի վայր։'}
            </h2>
          )
          : null}

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const selectedVenue = state.birthday.selectedServices.venue;
  const venueId = selectedVenue && selectedVenue.length ? selectedVenue[0].id : null;

  return ({
    selectedVenue,
    foodInfo: getFoodInfo(venueId, state),
  });
};

export default connect(mapStateToProps)(Food);
