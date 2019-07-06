import React from 'react';
import Slider from 'react-slick';

import './ServiceSlider.scss';

const settings = {
  arrows: true,
  className: 'slides',
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

class ServiceSlider extends React.PureComponent {
  render() {
    const { services, style } = this.props;

    return (
      <div className="service-slider-container" style={style}>
        <h2 className="text-center">Թոփ արդյունքներ</h2>
        {services
          ? (
            <Slider {...settings}>
              {services.map(service => (
                <div key={service.id} className="service-card-wrapper">
                  Service card
                </div>
              ))}
            </Slider>
          ) : null}
      </div>
    );
  }
}

export { ServiceSlider };
