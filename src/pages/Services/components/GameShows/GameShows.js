import React from 'react';
import { connect } from 'react-redux';

import { getGameShows } from 'store/actions/gameShow';
import { ServiceGrid } from 'shared/wrappers';

import GameShowCard from './components/GameShowCard';

import './GameShows.scss';


class GameShows extends React.PureComponent {
  componentDidMount() {
    this.props.getGameShows();
  }

  render() {
    return (
      <ServiceGrid services={this.props.gameShows}>
        {(service, isSelected, toggleService) => (
          <GameShowCard
            service={service}
            isSelected={isSelected}
            toggleService={toggleService}
          />
        )}
      </ServiceGrid>
    );
  }
}

const mapStateToProps = (state) => ({
  gameShows: state.gameShow.gameShows,
});

const mapDispatchToProps = {
  getGameShows,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameShows);
