import React from 'react';
import { Collapse } from 'antd';

import QuestionForm from 'core/components/QuestionForm/QuestionForm';

import './FAQPage.scss';

const Panel = Collapse.Panel;

const questionsList = [
  {
    id: 1,
    question: 'Որքա՞ն ժամանակում կստանամ առաջարկներ։',
    answer: 'Answer Here',
  },
  {
    id: 2,
    question: 'Ինչպե՞ս է կատարվում առաքումը։',
    answer: 'Answer Here',
  },
  {
    id: 3,
    question: 'Ովքե՞ր են Ձեր գործընկերները։',
    answer: 'Answer Here',
  },
  {
    id: 4,
    question: 'Ինչո՞ւ պետք է օգտվեմ այս հարթակից։',
    answer: 'Answer Here',
  },
  {
    id: 5,
    question: 'Փոփոխություններ սպասվու՞մ են, թե սա է հարթակի ամբողջական գործառույթը։',
    answer: 'Answer Here',
  },
  {
    id: 6,
    question: 'Դուք պատասխանատվություն կրու՞մ եք տորթի որակի համար։',
    answer: 'Answer Here',
  },
];

class FAQPage extends React.PureComponent {

  render() {
    return (
      <div className="faq-container">

        <h1>Հաճախ տրվող հարցեր</h1>
        <h3>
          Այս էջը կօգնի գտնել Ձեր հարցերի պատասխանները։
          Եթե ունեք հարցեր, որոնք ներառված չեն այս ցանկում, գրե՛ք մեր
          {' '}
          <a
            href="https://www.facebook.com/eventor.am"
            target="_blank"
            rel="noopener noreferrer"
          >
          ֆեյսբուքյան էջին։
          </a>
          {' '}
          Մեր թիմը սիրով կպատասխանի ցանկացած հարցի։
        </h3>

        <Collapse>
          {questionsList.map(item => (
            <Panel header={item.question} key={item.id}>
              <p>{item.answer}</p>
            </Panel>
          ))}
        </Collapse>

        <h2 className="text-center question-form-title">
          Չգտա՞ք Ձեր հարցի պատասխանը։ Գրե՛ք մեզ և մեր թիմը սիրով կպատասխանի։
        </h2>
        <QuestionForm />
      </div>
    );
  }
}

export default FAQPage;
