import React from 'react';
import { connect } from 'react-redux';

import { getVenues } from 'store/actions/venue';
import { selectVenue, deselectVenue } from 'store/actions/birthday';
import { getSelectedVenue } from 'store/getters';

import { ServiceGrid } from 'shared/wrappers';
import { toggleSelection } from 'core/helpers';

import VenueCard from './components/VenueCard';
import VenueRequest from './components/VenueRequest';

import './Venues.scss';

class Venues extends React.PureComponent {
  componentDidMount() {
    this.props.getVenues();
  }


  render() {
    const { selectedVenue } = this.props;

    return (
      <ServiceGrid services={this.props.venues} lastElement={<VenueRequest />}>
        {(service) => (
          <VenueCard
            service={service}
            isSelected={selectedVenue && !!selectedVenue.find(s => s.id === service.id)}
            toggleService={(isTrue) => toggleSelection(
              service,
              selectedVenue,
              this.props.selectVenue,
              this.props.deselectVenue,
              isTrue,
            )}
          />
        )}
      </ServiceGrid>
    );
  }
}

const mapStateToProps = (state) => ({
  venues: state.venue.venues,
  selectedVenue: getSelectedVenue(state),
});

const mapDispatchToProps = {
  getVenues,
  selectVenue,
  deselectVenue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Venues);
