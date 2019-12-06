import React from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

import photographers from 'data/photography';
import { selectPhotography, deselectPhotography } from 'store/actions/birthday';
import { getSelectedPhotography } from 'store/getters';
import { ServiceGrid } from 'shared/wrappers';
import { toggleSelection } from 'shared/helpers';

import PhotographyCard from './components/PhotographyCard';

import './Photography.scss';


class Photography extends React.PureComponent {
  componentDidMount() {
    ReactGA.pageview('/photography');
  }

  render() {
    const { selectedPhotography } = this.props;

    return (
      <ServiceGrid services={photographers}>
        {(service) => (
          <PhotographyCard
            service={service}
            isSelected={selectedPhotography && !!selectedPhotography.find(s => s.id === service.id)}
            toggleService={(isTrue) => toggleSelection(
              service,
              selectedPhotography,
              this.props.selectPhotography,
              this.props.deselectPhotography,
              isTrue,
            )}
          />
        )}
      </ServiceGrid>
    );
  }
}

const mapStateToProps = (state) => ({
  selectedPhotography: getSelectedPhotography(state),
});

const mapDispatchToProps = {
  selectPhotography,
  deselectPhotography,
};

export default connect(mapStateToProps, mapDispatchToProps)(Photography);
