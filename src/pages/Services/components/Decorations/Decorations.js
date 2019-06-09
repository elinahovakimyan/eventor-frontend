import React from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

import { ServiceGrid } from 'shared/wrappers';
import { getDecorations } from 'store/actions/decoration';
import { selectDecoration, deselectDecoration } from 'store/actions/birthday';
import { getSelectedDecorations, getSelectedVenue } from 'store/getters';
import { toggleSelection } from 'core/helpers';

import DecorationCard from './components/DecorationCard';

import './Decorations.scss';


class Decorations extends React.PureComponent {
  componentDidMount() {
    this.props.getDecorations();
    ReactGA.pageview('/decorations');
  }

  render() {
    const { selectedDecorations, decorations, selectedVenue } = this.props;
    const allDecorations = selectedVenue && selectedVenue[0] && selectedVenue[0].decorations
      ? [...selectedVenue[0].decorations, ...decorations]
      : decorations;

    return (
      <ServiceGrid services={allDecorations}>
        {(service) => (
          <DecorationCard
            service={service}
            isSelected={selectedDecorations && !!selectedDecorations.find(s => s.id === service.id)}
            toggleService={(isTrue) => toggleSelection(
              service,
              selectedDecorations,
              this.props.selectDecoration,
              this.props.deselectDecoration,
              isTrue,
            )}
          />
        )}
      </ServiceGrid>
    );
  }
}

const mapStateToProps = (state) => ({
  decorations: state.decoration.decorations,
  selectedDecorations: getSelectedDecorations(state),
  selectedVenue: getSelectedVenue(state),
});

const mapDispatchToProps = {
  getDecorations,
  selectDecoration,
  deselectDecoration,
};

export default connect(mapStateToProps, mapDispatchToProps)(Decorations);
