import React from 'react';
import * as emailjs from 'emailjs-com';
import {
  Form, Button, Input,
} from 'antd';

const { TextArea } = Input;

class QuestionForm extends React.PureComponent {
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
          to_name: 'Eventor team',
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

          <Form.Item
            label="Ձեր հարցը"
          >
            {getFieldDecorator('question', {
              rules: [
                {
                  required: true,
                  message: 'Խնդրում ենք գրել Ձեր հարցը նախքան ուղարկելը։',
                },
              ],
            })(
              <TextArea placeholder="Ի՞նչ հարց ունեք" autosize />,
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
              Ուղարկել հարցը
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const QuestionFormPage = Form.create({ name: 'question_form' })(QuestionForm);

export default QuestionFormPage;
