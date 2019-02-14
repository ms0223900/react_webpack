
import React from 'react'
import '../../styles/style.scss'

import { GridLayout } from './GridLayout'
import { Line, Text, Circle, HalfCircle, LinearGradient } from './SVGComponents'


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <h2>SVG</h2>
        <svg width='720' height='480' xmlns='http://www.w3.org/2000/svg'>
          <GridLayout w={720} h={480}/>
          <LinearGradient id={'LG1'} color1='#a00' color2='#a90'/>
          {/* <Circle fill='url(#LG1)' /> */}
          {/* <Line />
          <Text />
          <Rect /> */}
          {/* <path d={'M20 20 V 90 H 90 V 20 Z'} />  */}
          {/* <path d={'M240 240 A 60 40, 0, 0 1, 240 0'} /> */}
          <Line x1={80} y1={80} x2={20} y2={80}/>
          <HalfCircle pos1={[80, 80]} fill='none' stroke='#000' strokeWidth={2}/>
          <Text text='Hello world' x='400' y='200' className='title' />
        </svg>
        <svg width='720' height='480' className='withShadow'>
          <Circle cx='400' cy='400' />
        </svg>
      </div>
    );
  }
}

{/* <path d="
        M cx - r, cy
        a r,r 0 1,0 (r * 2),0
        a r,r 0 1,0 -(r * 2),0
    "/> */}

