import React from 'react';
import { connect } from 'react-redux';

import { getVenues } from 'store/actions/venue';

import { ServiceGridWrapper } from 'shared/components';

import VenueCard from './components/VenueCard';

import './Venues.scss';

class Venues extends React.PureComponent {
  componentDidMount() {
    this.props.getVenues();
  }

  render() {
    return (
      <ServiceGridWrapper services={this.props.venues}>
        {(service) => <VenueCard service={service} />}
      </ServiceGridWrapper>
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
