import React, {  } from 'react'
// import PropTypes from 'prop-types'


export default class Stop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { x=0, y=0, stopType='normal', stopName='車站', circleR=6,  } = this.props;
    return (
      <g transform={`translate(${x}, ${y})`}>
        <circle 
          cx={ circleR } 
          cy={ circleR } 
          r={ circleR } 
          className={ stopType === 'normal' ? ('stop-normal') : (stopType === 'passed' ? 'stop-passed' : 'stop-now') } 
        />
        <text 
          x={ circleR - 1 } 
          y={ circleR * 2 + 8 }
          className={ stopType === 'normal' ? ('stopName-normal') : (stopType === 'passed' ? 'stopName-passed' : 'stopName-now') } >
          {stopName}
        </text>
      </g>
    );
  }
}
