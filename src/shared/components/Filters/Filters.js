import React from 'react';
import { Collapse } from 'antd';

import {
  VENUE,
  FOOD,
  DECORATION,
  // CAKE,
  // CARTOON_HERO,
  // GAME_SHOW,
  // PHOTOGRAPHER,
} from 'shared/data/constants';

import VenueFilters from './components/VenueFilters';
import FoodFilters from './components/FoodFilters';
import DecorationFilters from './components/DecorationFilters';

import './Filters.scss';

const Panel = Collapse.Panel;

class Filters extends React.PureComponent {
  getMatchingFilters = (currentCategory) => {
    switch (currentCategory.type) {
      case VENUE:
        return <VenueFilters />;
      case FOOD:
        return <FoodFilters />;
      case DECORATION:
        return <DecorationFilters />;
      // case CAKE:
      //   return this.props.cakes;
      // case CARTOON_HERO:
      //   return this.props.cartoonHeroes;
      // case GAME_SHOW:
      //   return this.props.gameShows;
      // case PHOTOGRAPHER:
      //   return this.props.photographers;
      default:
        return null;
    }
  }

  onChange = () => {

  }

  getFiltersTitle = (currentCategory) => {
    if (currentCategory.type === DECORATION) {
      return 'Ձևավորման մասին';
    }

    return `${currentCategory.label}ի մասին`;
  }

  render() {
    const { currentCategory } = this.props;

    return (
      <Collapse bordered={false} defaultActiveKey={['3']}>

        {/* <Panel header="Հոբելյարի մասին" key="1">
          <h3>Տարիք</h3>
          <h3>Սեռ</h3>
          <h3>Հետաքրքրություններ</h3>
        </Panel>

        <Panel header="Միջոցառման մասին" key="2">
          <h3>Օր</h3>
          <h3>Ժամ</h3>
          <h3>Հյուրերի քանակ</h3>
        </Panel> */}

        <Panel header={this.getFiltersTitle(currentCategory)} key="3" className="filters-container">
          {this.getMatchingFilters(currentCategory)}
        </Panel>


      </Collapse>
    );
  }
}

export { Filters };
