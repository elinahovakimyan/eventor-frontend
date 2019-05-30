import React from 'react';
import { connect } from 'react-redux';

import { ServiceGrid } from 'shared/wrappers';
import { getDecorations } from 'store/actions/decoration';
import { selectDecoration, deselectDecoration } from 'store/actions/birthday';
import { getSelectedDecorations } from 'store/getters';
import { toggleSelection } from 'core/helpers';

import DecorationCard from './components/DecorationCard';

import './Decorations.scss';


class Decorations extends React.PureComponent {
  componentDidMount() {
    this.props.getDecorations();
  }

  render() {
    const { selectedDecorations } = this.props;

    return (
      <ServiceGrid services={this.props.decorations}>
        {(service) => (
          <DecorationCard
            service={service}
            isSelected={selectedDecorations && !!selectedDecorations.find(s => s.id === service.id)}
            toggleService={() => toggleSelection(
              service, selectedDecorations, this.props.selectDecoration, this.props.deselectDecoration,
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
});

const mapDispatchToProps = {
  getDecorations,
  selectDecoration,
  deselectDecoration,
};

export default connect(mapStateToProps, mapDispatchToProps)(Decorations);
