import React from 'react';
import { connect } from 'react-redux';

import { getVenues } from 'store/actions/venue';

import { ServiceGrid } from 'shared/wrappers';

import VenueCard from './components/VenueCard';
import VenueRequest from './components/VenueRequest';

import './Venues.scss';

class Venues extends React.PureComponent {
  componentDidMount() {
    this.props.getVenues();
  }

  render() {
    return (
      <ServiceGrid services={this.props.venues} lastElement={<VenueRequest />}>
        {(service, isSelected, toggleService) => (
          <VenueCard
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
  venues: state.venue.venues,
});

const mapDispatchToProps = {
  getVenues,
};

export default connect(mapStateToProps, mapDispatchToProps)(Venues);
