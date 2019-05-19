import React from 'react';

class JubileeGender extends React.PureComponent {
  render() {
    const { genderSelect } = this.props;

    return (
      <div className="gender-question">
        <div className="gender-option" onClick={() => genderSelect('gender', 'boy')}>
          <img
            src="https://images.unsplash.com/photo-1485546246426-74dc88dec4d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" // eslint-disable-line
            alt="Boy"
          />
          <h2 className="text-center">Տղա</h2>
        </div>
        <div className="gender-option" onClick={() => genderSelect('gender', 'girl')}>
          <img
            src="https://images.unsplash.com/photo-1483193722442-5422d99849bc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" // eslint-disable-line
            alt="Girl"
          />
          <h2 className="text-center">Աղջիկ</h2>
        </div>
      </div>
    );
  }
}

export default JubileeGender;
