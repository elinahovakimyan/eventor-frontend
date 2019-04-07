import React from 'react';
import {
  Card, Icon, Tooltip, Rate, Button,
} from 'antd';

import './ServiceCard.scss';

const { Meta } = Card;


class ServiceCard extends React.PureComponent {
  render() {
    const { service } = this.props;
    return (
      <Card
        cover={(
          <div
            style={{
              backgroundImage: `url(${service.serviceImg})`,
            }}
            className="service-card"
          >
            <img
              className="service-provider-logo"
              alt={service.title}
              src={service.serviceImg}
            />
          </div>
        )}
        actions={[
          <Tooltip placement="topLeft" title={service.price || service.priceRange}>
            <Button className="service-price-btn">{service.priceRange}</Button>
          </Tooltip>,
          <Icon type="phone" />,
          <Icon type="ellipsis" />,
        ]}
      >
        <Meta
          title={service.title}
          description={(
            <div>
              <p className="service-description one-line-text">
                {service.description}
              </p>
              <Rate allowHalf defaultValue={2.5} />
            </div>
          )}
        />
      </Card>
    );
  }
}

export { ServiceCard };
