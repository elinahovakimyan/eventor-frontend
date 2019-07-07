import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';
import {
  Form, Button, Input,
} from 'antd';

const { TextArea } = Input;

function QForm({ form }) {
  const [isButtonLoading, toggleButtonLoading] = useState(false);
  const { getFieldDecorator } = form;
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 12 },
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {

        toggleButtonLoading(true);

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
            toggleButtonLoading(false);
            form.resetFields();
          })
          .catch(() => {
            toggleButtonLoading(false);
          });
      }
    });
  };

  return (
    <div className="faq-container">
      <Form {...formItemLayout} onSubmit={handleSubmit}>
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
            loading={isButtonLoading}
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

const QuestionForm = React.memo(Form.create({ name: 'question_form' })(QForm));

export { QuestionForm };
