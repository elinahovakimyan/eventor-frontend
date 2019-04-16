import React from 'react';
import * as emailjs from 'emailjs-com';
import {
  Form, Select, InputNumber, Switch, Radio,
  Slider, Button, Upload, Icon, Input,
} from 'antd';

import './OrderForm.scss';

const { Option } = Select;
const { TextArea } = Input;

class CakeOrderForm extends React.PureComponent {
  state = {
    applicationStatus: null,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);

        // const valuesHtml = (
        //   <div>
        //     {Object.keys(values).map(key => (
        //       <p>
        //         {`${key}: ${values[key]}`}
        //       </p>
        //     ))}
        //   </div>
        // );

        // console.log('valuesHtml :', valuesHtml);

        const templateParams = {
          reply_to: 'reply_to_value',
          from_name: values.email,
          to_name: 'Eventor team',
          message_html: JSON.stringify(values),
        };

        const serviceId = 'default_service';
        const templateId = 'template_KWvTDbxq';
        const userId = 'user_KTPrRh8HKGMZ7Uw4U0P8U';
        emailjs.send(serviceId, templateId, templateParams, userId)
          .then(() => {
            this.setState({ applicationStatus: 'success' });
          })
          .catch(() => {
            this.setState({ applicationStatus: 'error' });
          });
      }
    });

  }

  normFile = (e) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e && e.fileList;
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 12 },
    };
    const phonePrefix = getFieldDecorator('prefix', {
    })(
      <span>+374</span>,
    );

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit} className="form-container">

        <h2 className="text-center">Տորթի հայտի մանրամասներ</h2>

        <Form.Item
          label="Կտորների քանակ"
        >
          {getFieldDecorator('min-pieces', {
            rules: [
              { required: true, message: 'Նշե՛ք քանի հոգու համար է նախատեսված' },
            ],
          })(
            <Input
              type="number"
              style={{ width: 100, textAlign: 'center' }}
              placeholder="Սկսած"
            />,
          )}
        </Form.Item>

        <Form.Item
          label="Նախընտրած կրեմ"
        >
          {getFieldDecorator('select-cremes', {
            rules: [
              { required: true, message: 'Ընտրե՛ք առնվազն մեկ նախընտրած կրեմ', type: 'array' },
            ],
          })(
            <Select mode="multiple" placeholder="Ընտրե՛ք բոլոր նախընտրած կրեմները">
              <Option value="Կատալոնական">Կատալոնական</Option>
              <Option value="Կարագով">Կարագով</Option>
              <Option value="Սերուցքով">Սերուցքով</Option>
              <Option value="Եփած կրեմ">Եփած կրեմ</Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item
          label="Նախընտրած միջուկ"
        >
          {getFieldDecorator('select-mijuks', {
            rules: [
              { required: true, message: 'Ընտրե՛ք առնվազն մեկ նախընտրած միջուկ', type: 'array' },
            ],
          })(
            <Select mode="multiple" placeholder="Ընտրե՛ք բոլոր նախընտրած միջուկները">
              <Option value="Ընկույզ">Ընկույզ</Option>
              <Option value="Նուշ">Նուշ</Option>
              <Option value="Կոկոս">Կոկոս</Option>
              <Option value="Շոկոլադ">Շոկոլադ</Option>
              <Option value="Սպիտակ շոկոլադ">Սպիտակ շոկոլադ</Option>
              <Option value="Բանան">Բանան</Option>
              <Option value="Նարինջ">Նարինջ</Option>
              <Option value="Արքայախնձոր">Արքայախնձոր</Option>
              <Option value="Ելակ">Ելակ</Option>
              <Option value="Ազնվամորի">Ազնվամորի</Option>
              <Option value="Չամիչ">Չամիչ</Option>
            </Select>,
          )}
        </Form.Item>

        <Form.Item
          label="Հարկերի քանակ"
        >
          {getFieldDecorator('floors-number', { initialValue: 1 })(
            <InputNumber min={1} max={10} />,
          )}
          <span className="ant-form-text"> հարկ</span>
        </Form.Item>

        <Form.Item
          label="Գնային սահման (դր.)"
        >
          {getFieldDecorator('price-limit')(
            <Slider marks={{
              0: '0', 10: '10,000', 30: '30,000', 50: '50,000', 70: '70,000 և ավելի',
            }}
            />,
          )}
        </Form.Item>

        <Form.Item
          label="Ու՞մ կողմից պատրաստված"
        >
          {getFieldDecorator('supplier-type')(
            <Radio.Group>
              <Radio.Button value="individuals">Անհատ</Radio.Button>
              <Radio.Button value="companies">Կազմակերպություն</Radio.Button>
              <Radio.Button value="both">Երկուսն էլ</Radio.Button>
            </Radio.Group>,
          )}
        </Form.Item>

        <Form.Item
          label="Ներբեռնեք նկար(ներ)"
          extra="Եթե ունեք նախընտրած դիզայն, ներբեռնեք նկարը"
        >
          {getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
          })(
            <Upload name="logo" action="/upload.do" listType="picture">
              <Button>
                <Icon type="upload" />
                {' '}
                Սեղմե՛ք ներբեռնելու համար
              </Button>
            </Upload>,
          )}
        </Form.Item>

        <Form.Item
          label="Լրացուցիչ տեղեկություն"
        >
          {getFieldDecorator('notes', {
            rules: [
              { required: true, message: 'Եթե ցանկալի դիզայնը կցված է նկարի տեսքով, խնդրում ենք նշել' },
            ],
          })(
            <TextArea placeholder="Նկարագրե՛ք տորթի դիզայնը, եթե կան ալերգիաներ կամ այլ նշումներ" autosize />,
          )}
        </Form.Item>

        <Form.Item
          label="Առաքում"
        >
          {getFieldDecorator('delivery', { valuePropName: 'checked' })(
            <Switch />,
          )}
        </Form.Item>


        <h2 className="text-center">Կոնտակտային տվյալներ</h2>
        <Form.Item
          label="Էլ. հասցե"
        >
          {getFieldDecorator('email', {
            rules: [{
              type: 'email', message: 'Խնդրում ենք նշել ճիշտ էլ.հասցե',
            }, {
              required: true, message: 'Խնդրում ենք նշել Ձեր էլ.հասցեն',
            }],
          })(
            <Input />,
          )}
        </Form.Item>

        <Form.Item
          label="Հեռախոսահամար"
        >
          {getFieldDecorator('phone')(
            <Input addonBefore={phonePrefix} />,
          )}
        </Form.Item>

        <Form.Item
          label="Սոց. մեդիա հասցե"
        >
          {getFieldDecorator('social-media')(
            <Input placeholder="Այն սոց. մեդիայի հասցեն, որով ցանկանում եք Ձեզ հետ կապ հաստատենք" />,
          )}
        </Form.Item>

        <Form.Item
          wrapperCol={{ span: 12, offset: 6 }}
        >
          <Button className="submit-btn" type="primary" htmlType="submit">Ստանալ գնային առաջարկներ</Button>
        </Form.Item>

        {this.state.applicationStatus === 'success' ? (
          <h4 className="text-center success">
            Ուրախությամբ հայտնում ենք,
            որ ձեր հայտը բարեհաջող հասել է մեր թիմին։
            Այժմ մեր մասնագետները կգտնեն համապատասխան առաջարկներ
            և կապ կհաստատեն Ձեզ հետ 24 ժամվա ընթացքում։ ^_^
          </h4>
        ) : null}

        {this.state.applicationStatus === 'error' ? (
          <h4 className="text-center">
            Ցավում ենք, բայց ինչ-որ սխալ է տեղի ունեցել,
            խնդրում ենք փորձել կրկին։ Մեր թիմը սիրով սպասում է Ձեր հայտին։ ^_^
          </h4>
        ) : null}
      </Form>
    );
  }
}

const OrderForm = Form.create({ name: 'cake_order' })(CakeOrderForm);

export { OrderForm };
