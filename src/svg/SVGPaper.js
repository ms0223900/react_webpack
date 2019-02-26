import React from 'react'

import { GridLayout } from './GridLayout'
import StopLine from './StopLine'
import { Head } from './Head'
import { SideInfo } from './SideInfo'


export default class SVGPaper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    // const { routes } = this.props
    console.log('SVGPaper load success')
  }
  
  render() {
    const { routes } = this.props
    return (
      <div>
        <svg id='paper' xmlns='http://www.w3.org/2000/svg'>
          <GridLayout w={840} h={600}/>
          <Head 
            number={routes.number}
            fromTo={routes.fromTo}
            fromToEng={routes.fromToEng}
          />
          <SideInfo />
          <StopLine routeData={routes.data} />
        </svg>
        {/* <button onClick={this.convertExcelToOBj} >
          Convert
        </button> */}
        {/* <svg width='720' height='480' className='withShadow'>
          <Circle cx='400' cy='400' />
        </svg> */}
      </div>
    );
  }
}