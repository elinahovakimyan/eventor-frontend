import React from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

import gameShows from 'data/gameShows';
import { selectGameShow, deselectGameShow } from 'store/actions/birthday';
import { getSelectedGameShows } from 'store/getters';
import { ServiceGrid } from 'shared/wrappers';
import { toggleSelection } from 'shared/helpers';

import GameShowCard from './components/GameShowCard';

import './GameShows.scss';


class GameShows extends React.PureComponent {
  componentDidMount() {
    ReactGA.pageview('/game_show');
  }

  render() {
    const { selectedGameShows } = this.props;

    return (
      <ServiceGrid services={gameShows}>
        {(service) => (
          <GameShowCard
            service={service}
            isSelected={selectedGameShows && !!selectedGameShows.find(s => s.id === service.id)}
            toggleService={(isTrue) => toggleSelection(
              service,
              selectedGameShows,
              this.props.selectGameShow,
              this.props.deselectGameShow,
              isTrue,
            )}
          />
        )}
      </ServiceGrid>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedGameShows: getSelectedGameShows(state),
});

const mapDispatchToProps = {
  selectGameShow,
  deselectGameShow,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameShows);
