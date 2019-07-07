import React from 'react';
import { Row, Col } from 'antd';

import { TextWithIcon } from 'shared/components';

import './ServiceDetails.scss';


function ServiceDetails({ details }) {
  // === EXAMPLE ===
  // details: {
  //   wifi: true,
  //   vegetarian: false,
  //   parking: true,
  //   danceMusic: true,
  //   creditCard: true,
  //   DJ: false,
  //   gamingMachines: false,
  //   VIProom: false,
  // }

  return (
    <div className="service-details">
      <h2 className="text-center">Մանրամասներ</h2>
      <Row>
        <Col md={6} sm={12} xs={12}>
          <TextWithIcon isActive={details.wifi} iconType="wifi" text="Wi-Fi" />
        </Col>
        <Col md={6} sm={12} xs={12}>
          <TextWithIcon isActive={details.VIProom} iconType="crown" text="VIP սրահ" />
        </Col>
        <Col md={6} sm={12} xs={12}>
          <TextWithIcon isActive={details.parking} iconType="car" text="Կայանատեղի" />
        </Col>
        <Col md={6} sm={12} xs={12}>
          <TextWithIcon isActive={details.DJ} iconType="customer-service" text="Դի-Ջեյ" />
        </Col>
        <Col md={6} sm={12} xs={12}>
          <TextWithIcon isActive={details.creditCard} iconType="credit-card" text="Քարտով Վճարում" />
        </Col>
        <Col md={6} sm={12} xs={12}>
          <TextWithIcon isActive={details.gamingMachines} iconType="rocket" text="Խաղային Ավտոմատներ" />
        </Col>
        <Col md={6} sm={12} xs={12}>
          <TextWithIcon isActive={details.vegetarian} iconType="alert" text="Բուսակերների սնունդ" />
        </Col>
        <Col md={6} sm={12} xs={12}>
          <TextWithIcon isActive={details.danceMusic} iconType="sound" text="Պարային Երաժշտություն" />
        </Col>
      </Row>
    </div>
  );
}

export { ServiceDetails };
