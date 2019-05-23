import React from 'react';
import { connect } from 'react-redux';

import { getCartoonHeroes } from 'store/actions/cartoonHero';
import { ServiceGrid } from 'shared/wrappers';

import CartoonHeroCard from './components/CartoonHeroCard';

import './CartoonHeroes.scss';


class CartoonHeroes extends React.PureComponent {
  componentDidMount() {
    this.props.getCartoonHeroes();
  }

  render() {
    return (
      <ServiceGrid services={this.props.cartoonHeroes}>
        {(service, isSelected, toggleService) => (
          <CartoonHeroCard
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
  cartoonHeroes: state.cartoonHero.cartoonHeroes,
});

const mapDispatchToProps = {
  getCartoonHeroes,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartoonHeroes);
