import React from 'react';
import { Checkbox, Input } from 'antd';

import { Space } from 'core/components';

const Search = Input.Search;
const CheckboxGroup = Checkbox.Group;

const options1 = [
  { label: 'Բացօթյա', value: 'outdoor' },
  { label: 'Փակօթյա', value: 'indoor' },
];

const options2 = [
  { label: 'Քարտով Վճարում', value: 'creditCard' },
  { label: 'Պարային երաժշտություն', value: 'danceMusic' },
  { label: 'Խաղային ավտոմատներ', value: 'gamingMachines' },
  { label: 'Կայանատեղի', value: 'parking' },
  { label: 'VIP սրահ', value: 'VIProom' },
  { label: 'Բուսակերների համար սնունդ', value: 'vegetarian' },
  { label: 'Wi-Fi', value: 'wifi' },
  { label: 'DJ', value: 'DJ' },
];

class VenueFilters extends React.PureComponent {
  onChange = (e) => {
    console.log('e :', e);
  }

  render() {
    return (
      <div className="venue-filters-container">

        <div>
          <Search
            placeholder="Որոնում..."
            onSearch={value => console.log(value)}
          />
        </div>

        <Space />

        <CheckboxGroup
          options={options1}
          onChange={this.onChange}
        />

        <Space />


        <h3>Ցանկալի հատկանիշներ</h3>

        <CheckboxGroup
          options={options2}
          onChange={this.onChange}
        />

      </div>
    );
  }
}

export default VenueFilters;
