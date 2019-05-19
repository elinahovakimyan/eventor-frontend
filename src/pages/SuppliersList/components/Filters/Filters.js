import React from 'react';
import { Checkbox, Rate, Collapse } from 'antd';

import './Filters.scss';

const Panel = Collapse.Panel;

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
      <Collapse bordered={false}>
        {/* <Collapse bordered={false} defaultActiveKey={['3']}> */}
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
        </Panel>
      </Collapse>
    );
  }
}

export default Filters;
