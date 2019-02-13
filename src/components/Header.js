/* eslint-disable no-unused-vars */
import React from 'react'
import '../../styles/style.scss';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      timerSwitch: false,
    };
    this.timer;
  }
  _count = () => {
    this.setState({
      count: this.state.count + 1,
    })
  }
  _setTimer = () => {
    const { timerSwitch } = this.state;
    this.setState({
      timerSwitch: this.state.timerSwitch === false ? true : false,
    });
    timerSwitch ? 
      (clearInterval(this.timer)) :
      (this.timer = setInterval(this._count, 1000));
    
  }
  render() {
    const { count, timerSwitch } = this.state;
    return (
      <div className={'header'}>
        <h1>
          This is a header.
        </h1>
        <hr /> 
        <div>timer: {count}</div>
        <button 
          onClick={this._setTimer}
          className={timerSwitch ? 'button2' : 'button3'}
        >
          {timerSwitch ? 'Stop' : 'Start'}
        </button>
      </div>
    );
  }
}

