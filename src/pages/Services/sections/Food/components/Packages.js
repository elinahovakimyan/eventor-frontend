import React from 'react';
import { Radio, InputNumber } from 'antd';

import { formatPrice } from 'shared/helpers';

const RadioGroup = Radio.Group;


class Packages extends React.PureComponent {
  state = {
    packageName: null,
    guests: 1,
  }

  onChange = (val) => {
    this.setState((prevState) => {
      const packageName = prevState.packageName === val ? null : val;

      return ({
        packageName,
      });
    });
  }

  onGuestsChange = (guests) => {
    this.setState({
      guests,
    });
  }

  updatePrice = () => {
    const { packages } = this.props;
    const { guests, packageName } = this.state;

    const currentPackage = packages.find(p => p.name === packageName);
    const price = (guests && currentPackage) ? guests * currentPackage.pricePerPerson : 0;

    return price;

  }

  render() {
    const { packages } = this.props;
    const { guests } = this.state;
    const price = this.updatePrice();

    return (
      <>
        <h2 className="text-center">Առկա Փաթեթներ</h2>
        <div className="food-package-wrap">

          <RadioGroup value={this.state.packageName}>

            {packages.map(p => (
              <Radio
                className="food-package"
                value={p.name}
                key={p.name}
                onClick={() => this.onChange(p.name)}
              >
                <div className="food-package-content">
                  <div className="title-line">
                    <h3>{p.name}</h3>
                    <h3>{formatPrice(p.pricePerPerson)}</h3>
                  </div>
                  {p.foodIncluded
                    ? (
                      <p>
                        <img src={require('assets/icons/cutlery.svg')} alt="food package" />
                        {p.foodIncluded}
                      </p>
                    )
                    : null
                  }
                  {p.showIncluded
                    ? (
                      <p>
                        <img src={require('assets/icons/laugh.svg')} alt="show package" />
                        Խաղային ծրագիրը ներառված է
                      </p>
                    )
                    : null
                  }
                </div>
              </Radio>
            ))}

          </RadioGroup>


          <h3 className="text-right">
            Հյուրերի քանակը՝
            <InputNumber onChange={this.onGuestsChange} value={guests} />
          </h3>

          <h2 className="text-right">
            Կազմեց՝
            {' '}
            {formatPrice(price)}
          </h2>

        </div>
      </>
    );
  }
}

export default Packages;
