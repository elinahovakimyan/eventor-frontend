import React from 'react';
import { Input, Button, Icon } from 'antd';

class JubileeName extends React.PureComponent {
  state = {
    numOfJubilees: [0],

  }

  addJubilee = () => {
    this.setState((prevState) => {
      const { numOfJubilees } = prevState;
      const jubN = numOfJubilees.length;

      return ({
        numOfJubilees: [...numOfJubilees, numOfJubilees[jubN - 1] + 1],
      });
    });
  }

  removeJubilee = (a) => {
    this.setState((prevState) => ({
      numOfJubilees: prevState.numOfJubilees.filter(curItem => curItem !== a),
    }));
  }

  render() {
    const { numOfJubilees } = this.state;

    return (
      <div className="jubilee-name">
        <h2 className="question-title">Նշե՛ք հոբելյարի անունը</h2>

        {numOfJubilees.map((a, i) => (
          <div key={a} className="jubilee-name-input">
            <Input
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="Մուտքագրե՛ք հոբելյարի անունը"
            />
            {i > 0
              ? <Icon type="delete" onClick={() => this.removeJubilee(a)} />
              : null}
          </div>
        ))}

        <Button type="primary" onClick={this.addJubilee}>
          <Icon type="plus" />
          Ավելացնել ևս մեկ հոբելյար
        </Button>
      </div>
    );
  }
}

export default JubileeName;
