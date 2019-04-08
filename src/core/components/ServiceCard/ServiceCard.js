import React from 'react';
import { Link } from 'react-router-dom';
import {
  Card, Icon, Tooltip, Rate, Button,
} from 'antd';

import { ContactModal } from 'core/components';

import './ServiceCard.scss';

const { Meta } = Card;

class ServiceCard extends React.PureComponent {
  render() {
    const { service, category } = this.props;

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
          <Tooltip placement="topLeft" title="Ավելացնել ցանկությունների ցանկում">
            <Button type="primary" onClick={this.toggleModal}>
              <Icon type="heart" />
            </Button>
          </Tooltip>,
          <ContactModal contacts={service.contacts} />,
        ]}
      >
        <Link to={`/service/${category}/${service.id}`}>
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
        </Link>
      </Card>
    );
  }
}

export { ServiceCard };
