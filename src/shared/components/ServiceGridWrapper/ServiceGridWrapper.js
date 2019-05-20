import React from 'react';
import { Row, Col, Empty } from 'antd';

import './ServiceGridWrapper.scss';

class ServiceGridWrapper extends React.PureComponent {
  render() {
    const { services } = this.props;

    return (
      <Row gutter={24} style={{ padding: '0 20px' }}>
        {services && services.length
          ? services.map(service => (
            <Col
              key={service.id}
              className="service-col"
              xl={6}
              lg={8}
              md={12}
              sm={12}
              xs={24}
            >
              {this.props.children(service)}
            </Col>
          )) : (
            <div className="mt-30">
              <Empty description="Ոչինչ չի գտնվել :(" />
            </div>
          )}
      </Row>
    );
  }
}

export { ServiceGridWrapper };
