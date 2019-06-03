import React from 'react';
import {
  Menu, Icon, Empty,
} from 'antd';
import { connect } from 'react-redux';
import ReactGA from 'react-ga';

import { formatPrice } from 'core/helpers';
import {
  deselectVenue, deselectGameShow, deselectCartoonHero, deselectDecoration,
} from 'store/actions/birthday';
import {
  getSelectedVenue, getSelectedCartoonHeroes, getSelectedDecorations, getSelectedGameShows,
} from 'store/getters';

import ConfirmationForm from './components/ConfirmationForm';
// import Invoice from './components/Invoice';

import './Confirmation.scss';


class Confirmation extends React.PureComponent {

  componentDidMount() {
    ReactGA.pageview('/done');
  }

  getContent = () => {
    const {
      selectedVenue,
      selectedCartoonHeroes,
      selectedGameShows,
      selectedDecorations,
    } = this.props;

    if ((!selectedVenue || !selectedVenue.length)
          && (!selectedCartoonHeroes || !selectedCartoonHeroes.length)
          && (!selectedGameShows || !selectedGameShows.length)
          && (!selectedDecorations || !selectedDecorations.length)) {
      return (
        <div className="order-table flex-col-center">
          <Empty description="Մենք շատ ուրախ կլինենք հասատատել հայտը,
              սակայն նախ պետք է ընտրել հետաքրքիր ծառայություններից գոնե մեկը։ :))"
          />
          <br />
          <h3>Դժվարանու՞մ եք։ Զանգահարե՛ք և մենք սիրով կօգնենք Ձեզ ընտրություն կատարել։ </h3>
        </div>
      );
    }

    return (
      <>
        <h4>Դուք ընտրել եք.</h4>

        <div className="order-table">
          <Menu>
            {selectedVenue && selectedVenue.length
              ? (
                <Menu.Item key="1" className="order-item">
                  <div className="service-wrapper">
                    <img src={require('assets/icons/place.svg')} alt="place" />
                    <h4>{selectedVenue[0].title}</h4>
                  </div>
                  <div className="service-wrapper">
                    <p>
                      {selectedVenue[0].entranceFee
                        ? ` Մուտքավճարը՝ ${formatPrice(selectedVenue[0].entranceFee)}`
                        : ''}
                    </p>
                    <Icon type="delete" onClick={() => this.props.deselectVenue(selectedVenue[0])} />
                  </div>
                </Menu.Item>
              )
              : null}
            {selectedCartoonHeroes && selectedCartoonHeroes.length
              ? selectedCartoonHeroes.map(service => (

                <Menu.Item key={`2+${service.id}`} className="order-item">
                  <div className="service-wrapper">
                    <img src={require('assets/icons/donatello.svg')} alt="cartoon hero" />
                    <h4>{service.title}</h4>
                  </div>
                  <div className="service-wrapper">
                    <p>
                      {service.price
                        ? formatPrice(service.price)
                        : `սկսած ${formatPrice(service.startingPrice)}`}
                    </p>
                    <Icon type="delete" onClick={() => this.props.deselectCartoonHero(service)} />
                  </div>
                </Menu.Item>
              ))
              : null}
            {selectedGameShows && selectedGameShows.length
              ? selectedGameShows.map(service => (

                <Menu.Item key={`3+${service.id}`} className="order-item">
                  <div className="service-wrapper">
                    <img src={require('assets/icons/laugh.svg')} alt="cartoon hero" />
                    <h4>{service.title}</h4>
                  </div>
                  <div className="service-wrapper">
                    <p>
                      {service.price
                        ? formatPrice(service.price)
                        : `սկսած ${formatPrice(service.startingPrice)}`}
                    </p>
                    <Icon type="delete" onClick={() => this.props.deselectGameShow(service)} />
                  </div>
                </Menu.Item>
              ))
              : null}
            {selectedDecorations && selectedDecorations.length
              ? selectedDecorations.map(service => (

                <Menu.Item key={`4+${service.id}`} className="order-item">
                  <div className="service-wrapper">
                    <img src={require('assets/icons/balloons.svg')} alt="cartoon hero" />
                    <h4>{service.title}</h4>
                  </div>
                  <div className="service-wrapper">
                    <p>
                      {service.price
                        ? formatPrice(service.price)
                        : `սկսած ${formatPrice(service.startingPrice)}`}
                    </p>
                    <Icon type="delete" onClick={() => this.props.deselectDecoration(service)} />
                  </div>
                </Menu.Item>
              ))
              : null}
          </Menu>
        </div>

        <br />
        <br />
        <br />

        <h4>Ինչ է լինելու հիմա...</h4>

        <p>
        Հաստատելուց հետո մեր թիմը կուսումնասիրի Ձեր պատվերը և կապ կհաստատի Ձեզ հետ
        24 ժամվա ընթացքում, վերջնական հաստատման և արժեքի ներկայացման համար։
          <br />
        Չեղարկելու դեպքում՝ պետք է զգուշացնել միջոցառումից առնվազն երեք օր առաջ։
        </p>

        {/* <h3>Ընդհանուր կազմում է՝ 86,000 դրամ</h3> */ }

        <ConfirmationForm selectedServices={this.props.selectedServices} />
      </>
    );
  }

  render() {
    return (
      <div className="order-confirmation">
        <h2>Հաստատե՛ք հայտը</h2>

        {this.getContent()}

      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  selectedVenue: getSelectedVenue(state),
  selectedCartoonHeroes: getSelectedCartoonHeroes(state),
  selectedGameShows: getSelectedGameShows(state),
  selectedDecorations: getSelectedDecorations(state),
  selectedServices: state.birthday.selectedServices,
});

const mapDispatchToProps = {
  deselectVenue,
  deselectGameShow,
  deselectCartoonHero,
  deselectDecoration,
};


export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
