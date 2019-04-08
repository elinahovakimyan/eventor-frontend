import React from 'react';
import { Checkbox, Rate } from 'antd';

import './Filters.scss';

const CheckboxGroup = Checkbox.Group;

const options = [
  { label: 'Applic dyne', value: 'Apple' },
  { label: 'Pear dynamic', value: 'Pear' },
  { label: 'Orange juice & si', value: 'Orange' },
];

class Filters extends React.PureComponent {
  onChange = () => {

  }

  render() {
    return (
      <div className="filters-container">
        <h3>Choose tags</h3>

        <CheckboxGroup
          options={options}
          defaultValue={['Pear']}
          onChange={this.onChange}
        />

        <br />
        <br />

        <h3>Rating</h3>

        <Rate defaultValue={4} />

        <br />
        <br />

        <h3>Choose other tags</h3>

        <CheckboxGroup
          options={options}
          defaultValue={['Pear']}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Filters;
