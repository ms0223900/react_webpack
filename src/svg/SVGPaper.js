import React, { Fragment } from 'react'

// import { GridLayout } from './GridLayout'
import StopLine from './StopLine'
import { Head_ChiaYi, Head_Yunlin, Head_ChanHua } from './Head'
import { SideInfo_ChiaYi, QRcode_Yunlin, SideInfo_ChanHua } from './SideInfo'
import { BusSchedule } from './BusSchedule'
import { CompanyInfo } from './CompanyInfo'

import YunlinBG from '../images/Yunlin_BG.svg'
import ChanHuaBG from '../images/ChanHua_BG.svg'



export class SVGPaper_ChiaYi extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { routes, loadingStatus } = this.props
    return (
      <Fragment>
      
        <div>
          <svg id='paper' xmlns='http://www.w3.org/2000/svg'>
            {/* <GridLayout w={840} h={600}/> */}
            <Head_ChiaYi 
              number={routes.number}
              fromTo={routes.fromTo}
              fromToEng={routes.fromToEng}
            />
            <SideInfo_ChiaYi />
            <StopLine 
              routeData={routes.data}  
              location={'ChiaYi'}
              onLoad={loadingStatus} 
            />
            <CompanyInfo 
              x1FromRight={40}
              x2FromRight={40}
              y={100}
              txt1={routes.companyService[0]}
              txt2={routes.companyService.length > 1 ? routes.companyService[1] : ''}
              location={'ChiaYi'}
            />
          </svg>
        </div>
      </Fragment>
    );
  }
}

export class SVGPaper_Yunlin extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount = () => {
    this.props.loaddd()
  }
  
  render() {
    const { routes } = this.props
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
            location={'Yunlin'} />
          <QRcode_Yunlin 
            x={0}
            y={470}
            width={90}
            imsi={routes.stopNow[0].trim()}
            nowStop={routes.stopNow[1]}
          />
          <CompanyInfo 
            x1FromRight={202}
            x2FromRight={74}
            y={580 + 6}
            txt1={routes.companyService[0]}
            txt2={routes.companyService[1]}
            location={'Yunlin'}
          />
        </svg>
      </div>
    );
  }
}

export class SVGPaper_ChanHua extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { routes } = this.props
    return (
      <div>
        <svg id='paper' xmlns='http://www.w3.org/2000/svg'>
          <image 
            width='840'
            xlinkHref={ChanHuaBG}
          />
          {/* <GridLayout w={840} h={600}/> */}
          <Head_ChanHua
            number={routes.number}
            fromTo={routes.fromTo}
            fromToEng={routes.fromToEng}
            pass={routes.pass}
            charge={routes.charge}
          />
          <StopLine 
            routeData={routes.data}
            location={'ChanHua'} />
          <CompanyInfo 
            x1FromRight={202}
            x2FromRight={74}
            y={72 + 14}
            txt1={routes.companyService[0]}
            txt2={routes.companyService[1]}
            location={'ChanHua'}
          />
          <SideInfo_ChanHua
            byPass={routes.byPass}
            time={routes.time}
          />
        </svg>
      </div>
    );
  }
}