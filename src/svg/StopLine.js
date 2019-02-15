import React from 'react'

// import { HalfCircle } from './SVGComponents'
import { Arrow } from './SVGComponents'
import Stop from './Stop'
import { RoundedCorner } from './SVGComponents'


export default class StopLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { routeData=[] } = this.props;
    const route1 = routeData.length > 16 ? routeData.filter(data => data.id < 16) : routeData;
    const route2 = routeData.length > 16 ? routeData.filter(data => data.id >= 16) : [];
    return (
      <g id={'route1'}>
      { routeData.length > 0 ? routeToRight(route1): <g /> }
      { routeData.length > 16 ? routeToLeft(route2): <g /> }
    </g>
    )
  }
}

function routeToRight(route=[]) {
  return (
    <g>
      <Arrow x={100 + 18} y={200} />
      <path d={`M 100 206 l ${ (route.length - 1) * 36 } 0` } stroke={'#000'} strokeWidth={3} />
      {
        route.map(ls => (
          <Stop 
            x={ 100 + ls.id * 36 }
            y={ 200 }
            stopName={ ls.stopName }
            stopType={ ls.stopType === '1' ? 'normal' : 'now' }
          />
        ))
      }
    </g>
    
  )
}

function routeToLeft(route, xInit=( 100 + 36*15 ), yInit=400) {
  return (
    <g>
      {/* <path 
        d={`M ${xInit} ${xInit + 6} h 36 v -200 h -24 `} 
        stroke={'#000'} 
        strokeWidth={3} 
        fill={'none'} /> */}
      <RoundedCorner
        x1={xInit + 12} y1={yInit + 6}
        h={36} v={-100}
        r={6} />
      <RoundedCorner
        x1={xInit + 12 + 6} y1={yInit + 6 + 6 -100}
        v={-100} h={-36}
        r={6} />
      <Arrow 
        x={ xInit - 18 } 
        y={ yInit } 
        rotate={ '180, 6, 6' } />
      <path 
        d={`M ${xInit} ${yInit + 6} l ${ -(route.length - 1) * 36 } 0` } 
        stroke={'#000'} 
        strokeWidth={3} />
      {
        route.map(ls => (
          <Stop 
            x={ xInit - ((ls.id - (16 * 1)) * 36) }
            y={ yInit }
            stopName={ ls.stopName }
            stopType={ ls.stopType === '1' ? 'normal' : 'now' }
          />
        ))
      }
    </g>
  )  
}