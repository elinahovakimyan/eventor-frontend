import React from 'react';
import { connect } from 'react-redux';

import { getGameShows } from 'store/actions/gameShow';
import { selectGameShow, deselectGameShow } from 'store/actions/birthday';
import { getSelectedGameShows } from 'store/getters';
import { ServiceGrid } from 'shared/wrappers';
import { toggleSelection } from 'core/helpers';

import GameShowCard from './components/GameShowCard';

import './GameShows.scss';


class GameShows extends React.PureComponent {
  componentDidMount() {
    this.props.getGameShows();
  }

  render() {
    const { selectedGameShows } = this.props;

    return (
      <ServiceGrid services={this.props.gameShows}>
        {(service) => (
          <GameShowCard
            service={service}
            isSelected={selectedGameShows && !!selectedGameShows.find(s => s.id === service.id)}
            toggleService={() => toggleSelection(
              service, selectedGameShows, this.props.selectGameShow, this.props.deselectGameShow,
            )}
          />
        )}
      </ServiceGrid>
    );
  }
}

const mapStateToProps = (state) => ({
  gameShows: state.gameShow.gameShows,
  selectedGameShows: getSelectedGameShows(state),
});

const mapDispatchToProps = {
  getGameShows,
  selectGameShow,
  deselectGameShow,
};

export default connect(mapStateToProps, mapDispatchToProps)(GameShows);
