import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Home from 'pages/Home/Home';
import JubileeForm from 'pages/JubileeForm/JubileeForm';
import Services from 'pages/Services/Services';
import FAQPage from 'pages/FAQPage/FAQPage';

import { DrawerHeader } from 'shared/components';

import 'styles/index.scss';

const { Content } = Layout;

class App extends React.PureComponent {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <DrawerHeader />
          <Content>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/faq" component={FAQPage} />
              <Route path="/jubilee-form" component={JubileeForm} />
              <Route path="/services" exact component={Services} />
              <Route path="/services/:category" component={Services} />
            </Switch>
          </Content>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
