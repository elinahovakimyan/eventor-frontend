import React from 'react';
import { Checkbox, Input } from 'antd';

import { Space } from 'shared/components';

const Search = Input.Search;
const CheckboxGroup = Checkbox.Group;


const options = [
  { label: 'Փուչիկ', value: 'balloon' },
  { label: 'Սպասք', value: 'dishes' },
  { label: 'Տորթի սեղան', value: 'cake-table' },
  { label: 'Այլ զարդարանք', value: 'other' },
];

class VenueFilters extends React.PureComponent {
  onChange = () => {

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

        <h3>Ըստ տեսակի</h3>

        <CheckboxGroup
          options={options}
          onChange={this.onChange}
        />

      </div>
    );
  }
}

export default VenueFilters;
