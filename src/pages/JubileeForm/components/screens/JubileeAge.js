import React from 'react';
import { Row, Col } from 'antd';

class JubileeAge extends React.PureComponent {
  render() {
    const { ageSelect } = this.props;

    return (
      <Row className="age-question">
        <Col md={12} sm={24}>
          <div className="age-option" onClick={() => ageSelect('age', '0-2')}>
            <h2>
              0-2
            </h2>
          </div>
        </Col>
        <Col md={12} sm={24}>
          <div className="age-option" onClick={() => ageSelect('age', '3-7')}>
            <h2>
              3-7
            </h2>
          </div>
        </Col>
        <Col md={12} sm={24}>
          <div className="age-option" onClick={() => ageSelect('age', '8-11')}>
            <h2>
              8-11
            </h2>
          </div>
        </Col>
        <Col md={12} sm={24}>
          <div className="age-option" onClick={() => ageSelect('age', '12+')}>
            <h2>
              12+
            </h2>
          </div>
        </Col>
      </Row>
    );
  }
}

export default JubileeAge;
