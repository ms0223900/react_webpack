import React from 'react'

import { GridLayout } from './GridLayout'
import StopLine from './StopLine'
import { Head_ChiaYi, Head_Yunlin } from './Head'
import { SideInfo, QRcode_Yunlin } from './SideInfo'

import YunlinBG from '../images/Yunlin_BG-02.svg'
import { BusSchedule } from './BusSchedule';


export class SVGPaper_ChiaYi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    // const { routes } = this.props
    console.log('SVGPaper load success')
  }
  
  render() {
    const { routes, location, loadingStatus } = this.props
    return (
      <div>
        <svg id='paper' xmlns='http://www.w3.org/2000/svg'>
          <GridLayout w={840} h={600}/>
          <Head_ChiaYi 
            number={routes.number}
            fromTo={routes.fromTo}
            fromToEng={routes.fromToEng}
          />
          <SideInfo />
          <StopLine 
            routeData={routes.data}  
            location={location}
            onLoad={loadingStatus} 
          />
          
        </svg>
      </div>
    );
  }
}

export class SVGPaper_Yunlin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount = () => {
    // const { routes } = this.props
    console.log('SVGPaper load success')
  }
  
  render() {
    const { routes, location } = this.props
    return (
      <div>
        <svg id='paper' xmlns='http://www.w3.org/2000/svg'>
        <image 
          width='840'
          xlinkHref={YunlinBG}
        />
          {/* <GridLayout w={840} h={600}/> */}
          <Head_Yunlin
            number={routes.number}
            fromTo={routes.fromTo}
            fromToEng={routes.fromToEng}
            pass={routes.pass}
            charge={routes.charge}
          />
          <BusSchedule 
            time={routes.time}
          />
          <StopLine 
            routeData={routes.data}
            location={location} />
          <QRcode_Yunlin 
            x={0}
            y={470}
            width={90}
            imsi={routes.stopNow[0].trim()}
            nowStop={routes.stopNow[1]}
          />
          <g>
            <text
              x={132}
              y={580 + 6}
              className={'bottom-info'}
            >
              {routes.companyService[0]}
            </text>
            <text
              x={494}
              y={580 + 6}
              className={'bottom-info'}
            >
              {routes.companyService[1]}
            </text>
          </g>
        </svg>
      </div>
    );
  }
}