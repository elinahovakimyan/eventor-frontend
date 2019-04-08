import React from 'react';
import { connect } from 'react-redux';

import './ServicePage.scss';

class ServicePage extends React.PureComponent {
  componentDidMount() {
    // const { category, id } = this.props.match.params;
    // TODO: get service data based on category & id
  }

  render() {
    return (
      <div>
        Here should be service page
      </div>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(ServicePage);
