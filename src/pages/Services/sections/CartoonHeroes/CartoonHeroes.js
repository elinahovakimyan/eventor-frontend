import React from 'react';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

import cartoonHeroes from 'data/cartoonHeroes';
import { selectCartoonHero, deselectCartoonHero } from 'store/actions/birthday';
import { getSelectedCartoonHeroes } from 'store/getters';
import { ServiceGrid } from 'shared/wrappers';
import { toggleSelection } from 'shared/helpers';

import CartoonHeroCard from './components/CartoonHeroCard';

import './CartoonHeroes.scss';


class CartoonHeroes extends React.PureComponent {
  componentDidMount() {
    ReactGA.pageview('/cartoon_hero');
  }

  render() {
    const { selectedCartoonHeroes } = this.props;

    return (
      <ServiceGrid services={cartoonHeroes}>
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
  selectedCartoonHeroes: getSelectedCartoonHeroes(state),
});

const mapDispatchToProps = {
  selectCartoonHero,
  deselectCartoonHero,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartoonHeroes);
