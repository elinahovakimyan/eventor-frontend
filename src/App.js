import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';

import Home from 'pages/Home/Home';
import SuppliersList from 'pages/SuppliersList/SuppliersList';
import ServicePage from 'pages/ServicePage/ServicePage';

import Header from 'core/components/Header/Header';

import 'styles/index.scss';

const { Content, Footer } = Layout;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Header />
          <Content>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/service-providers" exact component={SuppliersList} />
              <Route path="/service-providers/:category" component={SuppliersList} />
              <Route path="/service/:category/:id" component={ServicePage} />
            </Switch>
          </Content>
          <Footer>© Eventor.am 2019</Footer>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
