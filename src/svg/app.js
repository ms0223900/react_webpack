
import React from 'react'
import '../../styles/style.scss'

import { GridLayout } from './GridLayout'
import StopLine from './StopLine'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      routeData: [],
    };
  }

  convertToOBj = () => {
    const { text } = this.state;
    const newText = () => {
      let arr = [];
      for(let i in text.split('\n')) {
        arr[i] = text.split('\n')[i].split('	'); //是大空格
      }
      let dataArr = [];
      for (let i = 0; i < arr[0].length; i++) {
        dataArr = [...dataArr, {
          id: i,
          stopName: arr[0][i],
          stopType: arr[1][i],
        }]
      }
      return dataArr;
    };
    this.setState({
      routeData: newText(),
    })
  }
  render() {
    const { routeData } = this.state;
    return (
      <div>
        <h2>SVG</h2>
        <svg id='paper' xmlns='http://www.w3.org/2000/svg'>
          <GridLayout w={840} h={600}/>

          <StopLine routeData={routeData} />
          {/* <RoundedCorner x1='100' y1='200' h='30' v='30' r='20' />
          <path d={'M60 20 Q70 20, 70 30 v100 q0 10, -10 10 h-20'} stroke="black" fill="transparent" /> */}
        </svg>
        
        <textarea onChange={ e => this.setState({ text: e.target.value, })} style={{ height: '300px', }} />
        <button onClick={this.convertToOBj} >
          Convert
        </button>
        {/* <svg width='720' height='480' className='withShadow'>
          <Circle cx='400' cy='400' />
        </svg> */}
      </div>
    );
  }
}

{/* <path d="
        M cx - r, cy
        a r,r 0 1,0 (r * 2),0
        a r,r 0 1,0 -(r * 2),0
    "/> */}

