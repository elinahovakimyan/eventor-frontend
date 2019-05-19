import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

class JubileeGuests extends React.PureComponent {
  render() {

    return (
      <div className="jubilee-guests">
        <div className="guests-questions">
          <h2>Նշե՛ք հյուրերի քանակը</h2>


          <Select className="guest-select">
            <Option value="1-5">1-5</Option>
            <Option value="6-10">6-10</Option>
            <Option value="11-15">11-15</Option>
            <Option value="16-20">16-20</Option>
            <Option value="21-30">21-30</Option>
            <Option value="31-50">31-50</Option>
            <Option value="51-60">51-60</Option>
            <Option value="61-100">61-100</Option>
            <Option value="101-150">101-150</Option>
            <Option value="151-200">151-200</Option>
            <Option value="200 և ավելի">200 և ավելի</Option>
          </Select>
          {/* <span>
            <InputNumber />
            երեխա,
          </span>
          <span>
            <InputNumber />
            մեծահասակ
          </span> */}
        </div>
        <p>Պատրա՞ստ եք գտնել լավագույն ծառայությունները Ձեր երեխայի տարեդարձի համար</p>
      </div>
    );
  }
}

export default JubileeGuests;
