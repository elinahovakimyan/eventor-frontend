import React, { useState } from 'react';
import * as emailjs from 'emailjs-com';

import './Campaign.scss';


function Campaign() {
  const [isFormOpen, toggleOpen] = useState(false);
  const [backers, updateBackers] = useState(21);
  const [values, updateValues] = useState({});
  const [btnText, changeBtnText] = useState('Submit');

  const handleSubmit = () => {
    if (values.phone) {
      changeBtnText('Submitting...');

      const templateParams = {
        reply_to: 'reply_to_value',
        from_name: values.email,
        to_name: 'Campaign participation',
        message_html: JSON.stringify(values),
      };

      const serviceId = 'default_service';
      const templateId = 'template_HRWWGhiw';
      const userId = 'user_PWqdeMEakBm4or4HvWUek';

      emailjs.send(serviceId, templateId, templateParams, userId)
        .then(() => {
          changeBtnText('Submit');
          updateBackers(backers + 1);
          updateValues({});
        })
        .catch(() => {
          changeBtnText('Submit');
        });
    }
  };

  const handleChange = (e, key) => {
    const val = values;
    val[key] = e.target.value;

    updateValues(val);
  };

  return (
    <div className="campaign-page">

      <h1>Goal: Organize 100 awesome birthday parties!</h1>
      <div className="campaign-instructions">
        <h3>Instructions</h3>
        <ol>
          <li>To become a supporter you need to click "Support" to fill in the form</li>
          <li>It puts no obligations on you, we will just contact you to see if we can be helpful</li>
          <li>All participants will get 5% discount for the birthday party services</li>
        </ol>
      </div>
      <div className="campaign-progress">
        <h3>
          {backers}
          % completed (
          {backers}
          {' '}
          backers)
        </h3>

        <div className="progress-bar">
          <div className="progress-background" />
          <div className="completed" style={{ width: `${backers}%` }} />
        </div>
      </div>


      <button type="button" className="support-btn" onClick={() => toggleOpen(!isFormOpen)}>Support</button>

      {isFormOpen
        ? (
          <div>
            <form onSubmit={handleSubmit}>
              <input
                required
                placeholder="Phone number (required)"
                onChange={(e) => handleChange(e, 'phone')}
                value={values.phone}
              />
              <input
                placeholder="Your name"
                onChange={(e) => handleChange(e, 'name')}
                value={values.name}
              />
              <input
                placeholder="Your child(ren)'s birth dates"
                onChange={(e) => handleChange(e, 'birthDate')}
                value={values.birthDate}
              />

              <button type="submit">{btnText}</button>
            </form>
          </div>
        ) : null}
    </div>
  );
}

export default Campaign;
