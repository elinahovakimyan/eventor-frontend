import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Home from 'pages/Home/Home';
import JubileeForm from 'pages/JubileeForm/JubileeForm';
import SuppliersList from 'pages/SuppliersList/SuppliersList';
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
              <Route path="/service-providers" exact component={SuppliersList} />
              <Route path="/service-providers/:category" component={SuppliersList} />
            </Switch>
          </Content>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
