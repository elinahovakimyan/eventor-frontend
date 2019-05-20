import React from 'react';
import {
  Checkbox, Collapse, Input,
} from 'antd';

import './Filters.scss';

const Search = Input.Search;
const Panel = Collapse.Panel;
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

class Filters extends React.PureComponent {
  onChange = () => {

  }

  render() {
    return (
      <Collapse bordered={false} defaultActiveKey={['3']}>
        <Panel header="Հոբելյարի մասին" key="1">
          <h3>Տարիք</h3>
          <h3>Սեռ</h3>
          <h3>Հետաքրքրություններ</h3>
        </Panel>
        <Panel header="Միջոցառման մասին" key="2">
          <h3>Օր</h3>
          <h3>Ժամ</h3>
          <h3>Հյուրերի քանակ</h3>
        </Panel>
        <Panel header="Վայրի մասին" key="3">
          <div className="filters-container">

            <div>
              <Search
                placeholder="Որոնում..."
                onSearch={value => console.log(value)}
              />
            </div>

            <br />
            <br />

            <CheckboxGroup
              options={options1}
              onChange={this.onChange}
            />

            <br />
            <br />

            <h3>Ցանկալի հատկանիշներ</h3>

            <CheckboxGroup
              options={options2}
              onChange={this.onChange}
            />

          </div>
        </Panel>
      </Collapse>
    );
  }
}

export default Filters;
