import React from 'react';
import ReactGA from 'react-ga';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import JubileeForm from 'pages/JubileeForm/JubileeForm';
import Services from 'pages/Services/Services';
import FAQPage from 'pages/FAQPage/FAQPage';
import { DrawerHeader } from 'shared/components';
import Campaign from './pages/Campaign/Campaign';


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
    const message = 'Հետաքրքիր ծնու՞նդ է անհրաժեշտ։ Ճիշտ տեղո՜ւմ եք։ Դիմեք մեզ այստեղ :)';

    return (
      <div>
        <div id="fb-root" />

        <div
          className="fb-customerchat"
          attribution="setup_tool"
          page_id="340948546707923"
          // theme_color="#ff5900""
          size="standard"
          logged_in_greeting={message}
          logged_out_greeting={message}
        />

        <BrowserRouter>
          <React.Fragment>
            <DrawerHeader />
            <Content>
              <Switch>
                <Route path="/" exact component={Services} />
                <Route path="/faq" component={FAQPage} />
                <Route path="/jubilee-form" component={JubileeForm} />
                <Route path="/campaign" component={Campaign} />
                <Route path="/:category/service/:serviceId" component={Services} />
                <Route path="/:category" component={Services} />
              </Switch>
            </Content>
          </React.Fragment>
        </BrowserRouter>

      </div>
    );
  }
}

export default App;
