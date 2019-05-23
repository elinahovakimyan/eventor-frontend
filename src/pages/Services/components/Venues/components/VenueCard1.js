import React from 'react';
import {
  Card, Icon, Checkbox,
} from 'antd';

import VenueModal from './VenueModal';

const { Meta } = Card;

class VenueCard extends React.PureComponent {
  render() {
    const { service } = this.props;

    return (
      <Card
        className="venue-card"
        cover={(
          <div
            className="venue-card-cover"
            style={{ backgroundImage: `url(${service.mainImage})` }}
          >
            <Checkbox />
          </div>
        )}
        actions={[
          <VenueModal service={service} />,
        ]}
      >
        <Meta
          title={service.title}
          description={(
            <div>
              <p className="service-description one-line-text">
                {service.description}
              </p>
              <h4 className="one-line-text">
                <Icon type="environment" />
                {` Հասցե՝ ${service.address}`}
              </h4>
              <h4 className="one-line-text">
                <Icon type="shop" />
                {` Սրահների քանակը՝ ${service.rooms}`}
              </h4>

              <h4 className="text-center price-range">{service.priceRange}</h4>
            </div>
          )}
        />
      </Card>
    );
  }
}

export default VenueCard;
