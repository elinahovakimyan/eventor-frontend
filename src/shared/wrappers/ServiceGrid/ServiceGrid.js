import React from 'react';
import { Row, Col, Empty } from 'antd';

import './ServiceGrid.scss';

class ServiceGrid extends React.PureComponent {
  state = {
    selectedServiceIds: [],
  }

  toggleService = (serviceId) => {
    if (!this.isSelected(serviceId)) {

      this.setState((prevState) => ({
        selectedServiceIds: [...prevState.selectedServiceIds, serviceId],
      }));

    } else {

      this.setState((prevState) => ({
        selectedServiceIds: [...prevState.selectedServiceIds.filter(id => id !== serviceId)],
      }));

    }
  }

  isSelected = (id) => this.state.selectedServiceIds.includes(id);

  getServiceList = (services) => services.map(service => {
    const isSelected = this.isSelected(service.id);

    return (
      <Col
        key={service.id}
        className="service-col"
        xl={6}
        lg={8}
        md={12}
        sm={12}
        xs={24}
      >
        {this.props.children(service, isSelected, this.toggleService)}
      </Col>
    );
  })

  getLastElement = (lastElement) => (
    <Col
      className="service-col"
      xl={6}
      lg={8}
      md={12}
      sm={12}
      xs={24}
    >
      {lastElement}
    </Col>
  )

  render() {
    const { services, lastElement } = this.props;

    return (
      <Row gutter={24}>
        {services && services.length
          ? this.getServiceList(services)
          : (
            <div className="mt-30">
              <Empty description="Ոչինչ չի գտնվել :(" />
            </div>
          )}

        {lastElement
          ? this.getLastElement(lastElement)
          : null}
      </Row>
    );
  }
}

export { ServiceGrid };
