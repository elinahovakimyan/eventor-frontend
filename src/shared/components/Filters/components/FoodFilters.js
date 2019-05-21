import React from 'react';
import { Checkbox } from 'antd';

const CheckboxGroup = Checkbox.Group;

const options = [
  { label: 'Մանկական սնունդ', value: 'Apl' },
  { label: 'Բուսակերների համար', value: 'Par' },
];

class VenueFilters extends React.PureComponent {
  onChange = () => {

  }

  render() {
    return (
      <div className="food-filters-container">
        <CheckboxGroup
          options={options}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default VenueFilters;
