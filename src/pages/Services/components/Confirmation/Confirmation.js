import React from 'react';
import {
  Menu, Icon, Empty,
} from 'antd';
import { connect } from 'react-redux';

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
          <Menu>
            <Menu.Item>
              <Empty description="Ոչինչ չեք ընտրել" />
            </Menu.Item>
          </Menu>
        );
      }

      return (
        <Menu>
          {selectedVenue && selectedVenue.length
            ? (
              <Menu.Item key="1" className="order-item order-invoice">
                <div className="service-wrapper">
                  <img src={require('assets/icons/place.svg')} alt="place" />
                  <h4>{selectedVenue[0].title}</h4>
                </div>
                <Icon type="delete" onClick={() => this.props.deselectVenue(selectedVenue[0])} />
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
                <Icon type="delete" onClick={() => this.props.deselectCartoonHero(service)} />
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
                <Icon type="delete" onClick={() => this.props.deselectGameShow(service)} />
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
                <Icon type="delete" onClick={() => this.props.deselectDecoration(service)} />
              </Menu.Item>
            ))
            : null}
        </Menu>
      );
    }

    render() {
      return (
        <div className="order-confirmation">
          <h2>Հաստատե՛ք պատվերը</h2>

          <h4>Դուք ընտրել եք ...</h4>

          {/* <Invoice /> */}
          <div className="order-table">
            {this.getContent()}
          </div>

          <h4>Ինչ է լինելու հիմա...</h4>

          <p>
            Հաստատելուց հետո մեր թիմը կուսումնասիրի Ձեր պատվերը և կապ կհաստատի Ձեզ հետ
            24 ժամվա ընթացքում, վերջնական հաստատման և արժեքի ներկայացման համար։
            <br />
            Չեղարկելու դեպքում՝ պետք է զգուշացնել միջոցառումից առնվազն երեք օր առաջ։
          </p>

          {/* <h3>Ընդհանուր կազմում է՝ 86,000 դրամ</h3> */}

          <ConfirmationForm />
        </div>
      );
    }
}


const mapStateToProps = (state) => ({
  selectedVenue: getSelectedVenue(state),
  selectedCartoonHeroes: getSelectedCartoonHeroes(state),
  selectedGameShows: getSelectedGameShows(state),
  selectedDecorations: getSelectedDecorations(state),
});

const mapDispatchToProps = {
  deselectVenue,
  deselectGameShow,
  deselectCartoonHero,
  deselectDecoration,
};


export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
