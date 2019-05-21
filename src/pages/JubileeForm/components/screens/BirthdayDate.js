import React from 'react';
import {
  Row, Col, DatePicker, Checkbox, Select,
} from 'antd';

const { Option } = Select;

const Space = () => (
  <div className="space" />
);

class BirthdayDate extends React.PureComponent {
  state = { sameDay: true }

  handleSameDayChange = () => {
    this.setState((prevState) => ({
      sameDay: !prevState.sameDay,
    }));
  }

  render() {
    const { sameDay } = this.state;
    const { onBirthdayDateChange, onPartyDateChange } = this.props;

    return (
      <div className="birthday-info">
        <Row gutter={48} className="birthday-date-row">
          <Col md={12} sm={24} className="birthday-date-col-1">
            <h2 className="question-title">Ծննդյան օրն ու տարեթիվը</h2>
            <p>Մինչ միջոցառումը պետք է լինի առնվազն 7 օր</p>

            <DatePicker placeholder="Նշե՛ք օրը" onChange={onBirthdayDateChange} />

            <Space />

            <Checkbox checked={sameDay} onChange={this.handleSameDayChange}>Նույն օրն ենք նշելու</Checkbox>

            <Space />

            {!sameDay
              ? (
                <React.Fragment>
                  <h2 className="question-title">Միջոցառման օրը</h2>
                  <p>Մինչ միջոցառումը պետք է լինի առնվազն 7 օր</p>
                  <DatePicker placeholder="Նշե՛ք օրը" onChange={onPartyDateChange} />

                  <Space />

                </React.Fragment>
              ) : null}
          </Col>
          <Col md={12} sm={24} className="birthday-date-col-2">
            <h2 className="question-title">Նախընտրելի ժամեր</h2>
            <p>Նշե՛ք, թե որ ժամին կցանկանաք սկսել միջոցառումը</p>

            <Select className="time-select" mode="multiple" placeholder="Ընտրե՛ք բոլոր նախընտրած ժամերը">
              <Option value="10:00">10:00</Option>
              <Option value="11:00">11:00</Option>
              <Option value="12:00">12:00</Option>
              <Option value="13:00">13:00</Option>
              <Option value="14:00">14:00</Option>
              <Option value="15:00">15:00</Option>
              <Option value="16:00">16:00</Option>
              <Option value="17:00">17:00</Option>
              <Option value="18:00">18:00</Option>
              <Option value="19:00">19:00</Option>
              <Option value="20:00">20:00</Option>
              <Option value="21:00">21:00</Option>
              <Option value="22:00">22:00</Option>
            </Select>

            <Space />

            <h2 className="question-title">Նշե՛ք հյուրերի քանակը</h2>
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
          </Col>
        </Row>

        <h4 className="ready-text text-center">
          Պատրա՞ստ եք գտնել լավագույն ծառայությունները Ձեր երեխայի տարեդարձի համար
        </h4>
      </div>
    );
  }
}

export default BirthdayDate;
