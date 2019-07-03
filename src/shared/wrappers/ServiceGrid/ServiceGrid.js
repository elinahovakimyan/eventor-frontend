import React from 'react';
import { Empty } from 'antd';

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
      <div key={service.id}>
        {this.props.children(service, isSelected, this.toggleService)}
      </div>
    );
  })

  getLastElement = (lastElement) => (
    <div className="service-col">
      {lastElement}
    </div>
  )

  render() {
    const { services, lastElement } = this.props;

    return (
      <div className="services-grid">
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
      </div>
    );
  }
}

export { ServiceGrid };
