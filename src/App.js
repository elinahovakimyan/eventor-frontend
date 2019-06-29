import React from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
// import MessengerCustomerChat from 'react-messenger-customer-chat';

// import Home from 'pages/Home/Home';
import JubileeForm from 'pages/JubileeForm/JubileeForm';
import Services from 'pages/Services/Services';
import FAQPage from 'pages/FAQPage/FAQPage';

import { DrawerHeader } from 'shared/components';

import 'styles/index.scss';

const { Content } = Layout;

class App extends React.PureComponent {
  componentWillMount() {
    this.initializeReactGA();
  }

  initializeReactGA = () => {
    ReactGA.initialize('UA-141260233-1');
  }

  render() {
    return (
      <div>
        <div id="fb-root" />

        <div
          className="fb-customerchat"
          attribution="setup_tool"
          page_id="340948546707923"
          // theme_color="#ff5900""
          size="standard"
          logged_in_greeting="Ողջու՜յն։ Ինչո՞վ կարող ենք օգնել։"
          logged_out_greeting="Ողջու՜յն։ Ինչո՞վ կարող ենք օգնել։"
        />

        <BrowserRouter>
          <React.Fragment>
            <DrawerHeader />
            <Content>
              <Switch>
                <Route path="/" exact component={Services} />
                <Route path="/:category" component={Services} />
                <Route path="/faq" component={FAQPage} />
                <Route path="/jubilee-form" component={JubileeForm} />
                <Route path="/services" exact component={Services} />
                <Route path="/services/:category" component={Services} />
              </Switch>
            </Content>

          </React.Fragment>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
