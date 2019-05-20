import React from 'react';
import { Link } from 'react-router-dom';

import { CakeOrderForm } from 'shared/components';
import { cakesPics } from 'shared/data/cakePics';

import './CakeHome.scss';

class CakeHome extends React.PureComponent {
  render() {
    return (
      <div className="cake-home">

        <div className="banner-container">
          <img src={require('../../assets/cake-animated.gif')} alt="տորթ" />

          <div className="info-container">
            <h1>Ստացե՛ք բոլոր մանրամասները Ձեր երազանքի տորթի մասին</h1>
            <h2>1. Լրացրե՛ք ստորև նշված հայտը</h2>
            <h2>2. Ստացե՛ք 5-10 տարբեր գնային և համային առաջարկներ 1 օրում</h2>
            <h2>3. Ընտրե՛ք ամենագեղեցիկ, համեղ և ցանկալի տորթը</h2>
            <br />
            <h2>
              Ձեր հարցերի պատասխանները՝
              {' '}
              <Link to="/faq">Հաճախ Տրվող Հարցեր</Link>
            </h2>
          </div>
        </div>

        <hr />

        <CakeOrderForm />

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div>
          {cakesPics.map(item => (
            <div style={{ width: '25%', padding: 20, display: 'inline-block' }}>
              <img src={item.source} alt="Cake" style={{ width: '99%' }} />
              <h3 style={{ width: '25%', padding: 10 }}>{item.code}</h3>
            </div>
          ))}
        </div>


        {/* <div className="card-container">
          <div className="blocks-container">
            <div className="block-1">
              <ImageCard
                path="venue"
                type="venue"
                title="Ժամանցի Վայր"
                height="55vh"
              />
              <ImageCard
                path="game_show"
                type="game"
                title="Խաղային Շոու"
                height="45vh"
              />
            </div>
            <div className="block-2">
              <ImageCard
                path="cake"
                type="cake"
                title="Թխվածք"
                height="45vh"
              />
              <ImageCard
                path="photographer"
                type="photography"
                title="Լուսանկարիչ"
                height="55vh"
              />
            </div>
            <div className="block-3">
              <ImageCard
                path="decoration"
                type="decoration"
                title="Ձևավորում"
                height="55vh"
              />
              <ImageCard
                path="cartoon_hero"
                type="cartoon"
                title="Մուլտհերոս"
                height="45vh"
              />
            </div>
          </div>
        </div> */}
      </div>
    );
  }
}

export default CakeHome;
