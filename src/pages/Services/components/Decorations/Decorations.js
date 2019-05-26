import React from 'react';
import { connect } from 'react-redux';

import { getDecorations } from 'store/actions/decoration';
import { ServiceGrid } from 'shared/wrappers';

import DecorationCard from './components/DecorationCard';

import './Decorations.scss';


class Decorations extends React.PureComponent {
  componentDidMount() {
    this.props.getDecorations();
  }

  render() {
    return (
      <ServiceGrid services={this.props.decorations}>
        {(service, isSelected, toggleService) => (
          <DecorationCard
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
  decorations: state.decoration.decorations,
});

const mapDispatchToProps = {
  getDecorations,
};

export default connect(mapStateToProps, mapDispatchToProps)(Decorations);
