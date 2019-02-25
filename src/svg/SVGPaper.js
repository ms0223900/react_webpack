import React from 'react'

import { GridLayout } from './GridLayout'
import StopLine from './StopLine'


export default class SVGPaper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { routes } = this.props
    return (
      <div>
        <svg id='paper' xmlns='http://www.w3.org/2000/svg'>
          <GridLayout w={840} h={600}/>
          <StopLine routeData={routes.data} />
        </svg>
        
        <button onClick={this.convertExcelToOBj} >
          Convert
        </button>
        {/* <svg width='720' height='480' className='withShadow'>
          <Circle cx='400' cy='400' />
        </svg> */}
      </div>
    );
  }
}