import React from 'react';
import * as emailjs from 'emailjs-com';
import {
  Form, Button, Input,
} from 'antd';

const { TextArea } = Input;

class CForm extends React.PureComponent {
  state = {
    isButtonLoading: false,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {

        this.setState({
          isButtonLoading: true,
        });

        const templateParams = {
          reply_to: 'reply_to_value',
          from_name: values.email,
          to_name: 'Eventor team (Order confirmation)',
          message_html: JSON.stringify(values),
        };

        const serviceId = 'default_service';
        const templateId = 'template_KWvTDbxq';
        const userId = 'user_KTPrRh8HKGMZ7Uw4U0P8U';

        emailjs.send(serviceId, templateId, templateParams, userId)
          .then(() => {
            this.setState({
              isButtonLoading: false,
            });
            this.props.form.resetFields();
          })
          .catch(() => {
            this.setState({
              isButtonLoading: false,
            });
          });
      }
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 12 },
    };

    return (
      <div className="faq-container">
        <Form {...formItemLayout} onSubmit={this.handleSubmit}>
          <Form.Item label="Էլ. Հասցե">
            {getFieldDecorator('email', {
              rules: [{
                type: 'email', message: 'Խնդրում ենք նշել ճիշտ էլ.հասցե',
              }, {
                required: true, message: 'Խնդրում ենք նշել Ձեր էլ.հասցեն',
              }],
            })(
              <Input placeholder="Ձեր էլեկտրոնային հասցեն" />,
            )}
          </Form.Item>

          <Form.Item label="Հեռախոսահամար">
            {getFieldDecorator('phone', {
              rules: [{
                required: true, message: 'Խնդրում ենք նշել Ձեր հեռախոսահամարը',
              }],
            })(
              <Input placeholder="Ձեր հեռախոսահամարը" />,
            )}
          </Form.Item>

          <Form.Item
            label="Նշումներ"
          >
            {getFieldDecorator('notes')(
              <TextArea placeholder="Ձեր նշումները" autosize />,
            )}
          </Form.Item>

          <Form.Item
            wrapperCol={{ span: 12, offset: 6 }}
          >
            <Button
              loading={this.state.isButtonLoading}
              className="submit-btn"
              type="primary"
              htmlType="submit"
            >
              Հաստատել պատվերը
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const ConfirmationForm = Form.create({ name: 'question_form' })(CForm);

export default ConfirmationForm;
