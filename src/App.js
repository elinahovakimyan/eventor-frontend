import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Home from './pages/Home/Home';
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
                <Link to="/about/">About</Link>
              </li>
              <li>
                <Link to="/users/">Users</Link>
              </li>
            </ul>
          </nav>

          <Route path="/" exact component={Home} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
