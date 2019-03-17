import React from 'react';
import { Row, Col, Empty } from 'antd';

import { ServiceCard } from 'core/components';

import './SuppliersGrid.scss';

class SuppliersGrid extends React.PureComponent {
  render() {
    const { services } = this.props;
    return (
      <Row gutter={24} style={{ padding: '0 50px' }}>
        {services && services.length
          ? services.map(service => (
            <Col
              key={service.id}
              className="service-col"
              xs={24}
              sm={12}
              md={12}
              lg={8}
              xl={6}
            >
              <ServiceCard service={service} />
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

export default SuppliersGrid;
