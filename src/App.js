import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from 'pages/Home/Home';
import SuppliersList from 'pages/SuppliersList/SuppliersList';
import 'styles/index.scss';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          {/* TODO: Create a header component */}
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/service-providers/">List</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
          <Route path="/service-providers" exact component={SuppliersList} />
          <Route path="/service-providers/:category" component={SuppliersList} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
