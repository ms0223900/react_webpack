import React from 'react'
import { styles } from '../../config'
import nowStopArrow from '../images/nowStop-arrow.svg'
import hospital from '../images/hospital.svg'
// import PropTypes from 'prop-types'
const { stopWithEng } = styles

export const setStopClassName = (stopType='normal', stopClassName='stop', withPassedType=false) => {
  if(withPassedType) {
    return stopType === 'normal' ? 
      (`${stopClassName} ${stopClassName}-normal`) : 
      (stopType === 'passed' ? 
        `${stopClassName} ${stopClassName}-passed` : 
        `${stopClassName} ${stopClassName}-now`)
  } else {
    return stopType === 'normal' ? 
      (`${stopClassName} ${stopClassName}-normal`) : 
      (stopType === 'end' ? 
      `${stopClassName} ${stopClassName}-end` : 
      `${stopClassName} ${stopClassName}-now`) 
  }
}
export const HospitalIcon = ({r, stopNameH}) => (
  <image
    width={18}
    height={18}
    x={ -3 }
    y={ - r * 1.5 - stopNameH - 18 } 
    xlinkHref={hospital}
  />
)
export const IconNow = ({direction}) => (
  <image 
    width={13}
    height={13}
    transform={ direction === 'left' ? 'rotate(180, 6.5, 6.5)' : ''}
    xlinkHref={nowStopArrow}
  />
)
export const StopCircle = ({r, stopType, stopClassName}) => (
  <circle 
    cx={ r } 
    cy={ r } 
    r={ r } 
    className={ setStopClassName(stopType, stopClassName) } 
  />
)

export const setTextY = (ChiOrEng='Chi', r=6, UpOrDown='Up', stopNameH=0, stopNameEngH=0) => {
  if(UpOrDown === 'Up') {
    return ChiOrEng === 'Chi' ? 
      (- r * 1.5 - stopNameH + 2) :
      (- r * 1.5 - stopNameEngH)
  } else if(UpOrDown === 'Down') {
    return (r * 1.5 + 8)
  }
}
export const SpecialIcon = ({stopName='', stopNameH=0, stopType='normal', direction='left', circleR=6, UpOrDown='Up'}) => {

  const hospIcon = stopName.indexOf('醫院') !== -1 ? 
    <HospitalIcon 
      r={circleR}
      stopNameH={stopNameH}
    /> : 
    ''
  const stopIcon = stopType === 'now' ? 
    <IconNow direction={direction} /> :
    <StopCircle
      r={circleR}
      stopType={stopType}
      stopClassName={'stop-withEng'}
    />
  
  return (
    <React.Fragment>
      {UpOrDown === 'Up' ? hospIcon : ''}
      {stopIcon}
    </React.Fragment>
  )
}
// export const getStopUpOrDown = (UpOrDown='Up') => {
//   switch (UpOrDown) {
//     case 'Up':
//       return <StopWithEng {...props} UpOrDown='Up'/>
//     case 'Down':
//       return <StopWithEng {...props} UpOrDown='Down'/>
//     default:
//       return <StopWithEng {...props} UpOrDown='Up'/>
//   }
// }

export const Stop = (props) => {
  const { x=0, y=0, stopType='normal', stopName='車站', circleR=6,  } = props

  return (
    <g transform={`translate(${x}, ${y})`}>
      <circle 
        cx={ circleR } 
        cy={ circleR } 
        r={ circleR } 
        className={ stopType === 'normal' ? ('stop-normal') : (stopType === 'passed' ? 'stop-passed' : 'stop-now') } 
      />
      {stopType === 'now' ? 
        <circle 
          cx={ circleR }
          cy={ circleR }
          r={ 3 }
          className={ 'stop-now-center' }
        /> : ''}
      <text 
        x={ circleR - 1 } 
        y={ circleR * 1.5 + 8 }
        className={ stopType === 'normal' ? ('stopName-normal') : (stopType === 'passed' ? 'stopName-passed' : 'stopName-now') } >
        {stopName}
      </text>
    </g>
  )
}


export class Stop_WithEng_Up extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopNameH: 0,
      stopNameW: 0,
      stopNameEngH: 0,
    };
  }

  componentDidMount = () => {
    const stopNameHeight = this.stopNameEl.getBBox().height
    const stopNameWidth = this.stopNameEl.getBBox().width
    const stopNameEngHeight = this.stopNameEngEl.getBBox().height
    this.setState({
      stopNameH: stopNameHeight,
      stopNameW: stopNameWidth,
      stopNameEngH: stopNameEngHeight,
    })
  }
  
  render() {
    const { x=0, y=0, stopType='normal', stopName='車站', stopNameEng='station', circleR=6, direction='left' } = this.props
    const { stopNameH, stopNameW, stopNameEngH } = this.state
    const { stopNameEng_fs } = stopWithEng.fontSize
    
    return (
      <g transform={`translate(${x}, ${y})`}>
        {stopName.indexOf('醫院') !== -1 ? 
          <image
            width={18}
            height={18}
            x={ -3 }
            y={ - circleR * 1.5 - stopNameH - 18 } 
            xlinkHref={hospital}
          /> : ''
        }
        {
          stopType === 'now' ? (
            <image 
              width={13}
              height={13}
              transform={ direction === 'left' ? 'rotate(180, 6.5, 6.5)' : ''}
              xlinkHref={nowStopArrow}
            />
          ) :
          (
            <circle 
              cx={ circleR } 
              cy={ circleR } 
              r={ circleR } 
              className={ setStopClassName(stopType, 'stop-withEng') } 
            />
          )
        }
        
        <text 
          x={ circleR } 
          y={ - circleR * 1.5 - stopNameH + 2 }
          className={ setStopClassName(stopType, 'stopName-withEng') }
          ref={(e) => this.stopNameEl = e}
        >
          {stopName}
        </text>

        <text 
          x={ stopNameW + 1.5 } 
          y={ -circleR * 1.5 - stopNameEngH }
          className={ setStopClassName(stopType, 'stopNameEng-withEng') } 
          style={{fontSize: stopNameEng_fs}}
          ref={(e) => this.stopNameEngEl = e}
        >
          {stopNameEng}
        </text>
      </g>
    )
  }
}

export class Stop_WithEng_Down extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopNameW: 0,

    };
  }

  componentDidMount = () => {
    const stopNameWidth = this.stopNameEl.getBBox().width
    this.setState({
      stopNameW: stopNameWidth,
    })
  }
  
  render() {
    const { x=0, y=0, stopType='normal', stopName='車站', stopNameEng='station', circleR=6, direction='left' } = this.props
    const { stopNameW } = this.state
    const { stopNameEng_fs } = stopWithEng.fontSize
    return (
      <g transform={`translate(${x}, ${y})`}>
        {
          stopType === 'now' ? (
            <image 
              width={13}
              height={13}
              transform={ direction === 'left' ? 'rotate(180, 6.5, 6.5)' : ''}
              xlinkHref={nowStopArrow}
            />
          ) :
          (
            <circle 
              cx={ circleR } 
              cy={ circleR } 
              r={ circleR } 
              className={ 
                stopType === 'normal' ? 
                ('stop-withEng stop-normal') : 
                (stopType === 'end' ? 
                'stop-withEng stop-end' : 
                'stop-withEng stop-now') 
              }
            />
          )
        }
        
        <text 
          x={ circleR - 3 } 
          y={ circleR * 1.5 + 8 }
          className={'stopName-withEng-down stop-withEng-normal'} 
          ref={(e) => this.stopNameEl = e}
        >
          {stopName}
        </text>

        <text 
          x={ stopNameW + 1.5 - 3 } 
          y={ circleR * 1.5 + 8 }
          className={'stopNameEng-withEng-down stopNameEng-withEng-normal'}
          style={{fontSize: stopNameEng_fs}}
          ref={(e) => this.stopNameEngEl = e}
        >
          {stopNameEng}
        </text>
      </g>
    )
  }
}
export class StopWithEng extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopNameH: 0,
      stopNameW: 0,
      stopNameEngH: 0,
    };
  }

  componentDidMount = () => {
    const stopNameHeight = this.stopNameEl.getBBox().height
    const stopNameWidth = this.stopNameEl.getBBox().width
    const stopNameEngHeight = this.stopNameEngEl.getBBox().height
    this.setState({
      stopNameH: stopNameHeight,
      stopNameW: stopNameWidth,
      stopNameEngH: stopNameEngHeight,
    })
  }
 
  render() {
    const { x=0, y=0, stopType='normal', stopName='車站', stopNameEng='station', circleR=6, UpOrDown, direction } = this.props
    const { stopNameH, stopNameW, stopNameEngH } = this.state
    const { stopNameEng_fs } = stopWithEng.fontSize

    return (
      <g transform={`translate(${x}, ${y})`}>
         <SpecialIcon stopName={stopName} stopNameH={stopNameH} stopType={stopType} direction={direction} circleR={circleR} UpOrDown={UpOrDown} /> 
        <text 
          x={ circleR } 
          y={ setTextY('Chi', circleR, UpOrDown, stopNameH, stopNameEngH) }
          className={ setStopClassName(stopType, 'stopName-withEng') }
          ref={(e) => this.stopNameEl = e}
        >
          {stopName}
        </text>

        <text 
          x={ stopNameW + 1.5 } 
          y={ setTextY('Eng', circleR, UpOrDown, stopNameH, stopNameEngH) }
          className={ setStopClassName(stopType, 'stopNameEng-withEng') } 
          style={{fontSize: stopNameEng_fs}}
          ref={(e) => this.stopNameEngEl = e}
        >
          {stopNameEng}
        </text>
      </g>
    );
  }
}






// HOC
// withEng(withSpot(<Stop />))

// connect(<Stop />)
// withTheme()