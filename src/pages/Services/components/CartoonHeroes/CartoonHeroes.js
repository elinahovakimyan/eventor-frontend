import React from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

import { getCartoonHeroes } from 'store/actions/cartoonHero';
import { selectCartoonHero, deselectCartoonHero } from 'store/actions/birthday';
import { getSelectedCartoonHeroes } from 'store/getters';
import { ServiceGrid } from 'shared/wrappers';
import { toggleSelection } from 'core/helpers';

import CartoonHeroCard from './components/CartoonHeroCard';

import './CartoonHeroes.scss';


class CartoonHeroes extends React.PureComponent {
  componentDidMount() {
    this.props.getCartoonHeroes();
    ReactGA.pageview('/cartoon_hero');
  }

  render() {
    const { selectedCartoonHeroes } = this.props;

    return (
      <ServiceGrid services={this.props.cartoonHeroes}>
        {(service) => (
          <CartoonHeroCard
            service={service}
            isSelected={selectedCartoonHeroes && !!selectedCartoonHeroes.find(s => s.id === service.id)}
            toggleService={(isTrue) => toggleSelection(
              service,
              selectedCartoonHeroes,
              this.props.selectCartoonHero,
              this.props.deselectCartoonHero,
              isTrue,
            )}
          />
        )}
      </ServiceGrid>
    );
  }
}

const mapStateToProps = (state) => ({
  cartoonHeroes: state.cartoonHero.cartoonHeroes,
  selectedCartoonHeroes: getSelectedCartoonHeroes(state),
});

const mapDispatchToProps = {
  getCartoonHeroes,
  selectCartoonHero,
  deselectCartoonHero,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartoonHeroes);
