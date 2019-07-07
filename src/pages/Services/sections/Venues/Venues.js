import React from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

import venues from 'data/venues';
import { selectVenue, deselectVenue } from 'store/actions/birthday';
import { getSelectedVenue } from 'store/getters';

import { ServiceGrid } from 'shared/wrappers';
import { toggleSelection } from 'shared/helpers';

import VenueCard from './components/VenueCard';
import VenueRequest from './components/VenueRequest';

import './Venues.scss';

class Venues extends React.PureComponent {
  componentDidMount() {
    ReactGA.pageview('/venue');
  }


  render() {
    const { selectedVenue } = this.props;

    return (
      <ServiceGrid services={venues} lastElement={<VenueRequest />}>
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
  selectedVenue: getSelectedVenue(state),
});

const mapDispatchToProps = {
  selectVenue,
  deselectVenue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Venues);
