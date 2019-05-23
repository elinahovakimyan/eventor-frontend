import React from 'react';
import {
  Button, Input, Icon,
} from 'antd';

const interestsData = [
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
  state = {
    inputVisible: false,
    interests: [...interestsData],
    inputValue: '',
  }

  showInput = () => {
    this.setState({
      inputVisible: true,
    });
  }

  handleInputConfirm = () => {
    const { inputValue } = this.state;
    this.props.toggleInterest(inputValue);

    if (inputValue && !this.state.interests.includes(inputValue)) {
      this.setState((prevState) => ({
        inputVisible: false,
        interests: [...prevState.interests, prevState.inputValue],
      }));
      // this.setState((prevState) => ({
      //   inputVisible: false,
      //   interests: [...prevState.interests, prevState.inputValue],
      // }), {
      //   this.clearInput();
      // });
    } else {
      this.setState({
        inputVisible: false,
      });

      this.clearInput();
    }

  }

  // TODO: fix the function above
  // TODO: add the new word only when it does not exist in the list

  clearInput = () => {
    this.setState({
      inputValue: '',
    });
  }

  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  }

  render() {
    const { selectedInterests, toggleInterest } = this.props;
    const { inputVisible, interests, inputValue } = this.state;

    return (
      <div className="jubilee-interests">
        <h2 className="question-title">Նշված թեմաներից որո՞նք են հոբելյարին հարազատ</h2>

        {interests.map(item => {
          const buttonClass = Array.isArray(selectedInterests) && selectedInterests.includes(item)
            ? 'active-btn'
            : '';

          return (
            <Button
              key={item}
              className={`interest-btn ${buttonClass}`}
              onClick={() => toggleInterest(item)}
            >
              {item}
            </Button>
          );
        })}

        {inputVisible && (
          <Input
            type="text"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && (
          <Button onClick={this.showInput} className="add-btn">
            <Icon type="plus" />
            {' '}
            Այլ
          </Button>
        )}
      </div>
    );
  }
}

export default JubileeInterests;
