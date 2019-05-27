import React from 'react';
import { connect } from 'react-redux';

import ConfirmationForm from './components/ConfirmationForm';
import Invoice from './components/Invoice';

import './Confirmation.scss';


class Confirmation extends React.PureComponent {

  render() {
    return (
      <div className="text-center">
        <h2>Հաստատեք պատվերը</h2>

        <p>
          Դուք պատվիրել եք ...
        </p>
        <Invoice />
        <p>
          Ինչ է լինելու հիմա...
        </p>
        <p>
          Հաստատելուց հետո մեր թիմը կուսումնասիրի Ձեր պատվերը և կապ կհաստատի Ձեզ հետ
          24 ժամվա ընթացքում, վերջնական հաստատման համար։
        </p>

        <h3>Ընդհանուր կազմում է՝ 86,000 դրամ</h3>

        <ConfirmationForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cartoonHeroes: state.cartoonHero.cartoonHeroes,
});

const mapDispatchToProps = {
  // getConfirmation,
};

export default connect(mapStateToProps, mapDispatchToProps)(Confirmation);
