import React from 'react';
import { Row, Col, Empty } from 'antd';

import { ServiceCard } from 'core/components';

import './SuppliersGrid.scss';

class SuppliersGrid extends React.PureComponent {
  render() {
    const { services, category } = this.props;

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
              <ServiceCard service={service} category={category} />
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
