import React from 'react';
import { Checkbox, Input } from 'antd';

import { Space } from 'core/components';

const Search = Input.Search;
const CheckboxGroup = Checkbox.Group;

const options1 = [
  { label: 'Բացօթյա', value: 'Apple' },
  { label: 'Փակօթյա', value: 'Pear' },
];

const options2 = [
  { label: 'Քարտով Վճարում', value: 'Apl' },
  { label: 'Երաժշտություն', value: 'Par' },
  { label: 'Խաղային ավտոմատներ', value: 'Pasfr' },
  { label: 'Կայանատեղի', value: 'Pafer' },
  { label: 'Բուսակերների համար սնունդ', value: 'Pasr' },
  { label: 'Wi-Fi', value: 'Appl' },
  { label: 'DJ', value: 'Djsar' },
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
