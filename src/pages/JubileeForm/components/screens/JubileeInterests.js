import React from 'react';
import { Button } from 'antd';

const interests = [
  'Արքայադուստր',
  'Մեքենա',
  'Ջունգլի',
  'Ինքնաթիռ',
  'Ճանապարհորդություն',
  'Տրանսֆորմեր',
  'Դիսնեյ',
  'ԼՕԼ',
  'Ձուկ',
  'Փերի',
  'Սարդ մարդ',
  'Կակտուս',
  'Քաղցրավենիք',
  'Երաժշտություն',
  'Քիմիա և ֆիզիկա',
  'Սպորտ',
  'Նկարչություն',
  'Կռիվ',
  'Բնություն',
  'Դինոզավր',
  'Միաեղջյուր',
  'Համակարգչային խաղեր',
  'Լեգո',
  'Նորաձևություն',
  'Գիրք',
  'Բիզնես',
  'Ֆիլմ',
  'Առեղծված',
  'Բժշկություն',
  'Նառուտո',
  'Անիմե',
  'Պինգվին',
  'Պինոկյո',
];

class JubileeInterests extends React.PureComponent {
  render() {
    const { selectedInterests, toggleInterest } = this.props;

    return (
      <div className="jubilee-interests">
        <h2 className="question-title">Նշված թեմաներից որո՞նք են հոբելյարին հարազատ</h2>

        {interests.map(item => {
          const buttonClass = Array.isArray(selectedInterests) && selectedInterests.includes(item)
            ? 'active-btn'
            : '';

          return (
            <Button key={item} className={`interest-btn ${buttonClass}`} onClick={() => toggleInterest(item)}>
              {item}
            </Button>
          );
        })}
      </div>
    );
  }
}

export default JubileeInterests;
