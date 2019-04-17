import React from 'react'
import { styles } from '../../config'
import nowStopArrow from '../images/nowStop-arrow.svg'
import hospital from '../images/hospital.svg'
// import PropTypes from 'prop-types'
const { stopWithEng } = styles

export const setStopClassName = (stopType='normal', stopClassName='stop') => {
  switch (stopType) {
    case 'passed':
    case 'end':
    case 'now':
      return `${stopClassName} ${stopClassName}-${stopType}`  
    default:
      return `${stopClassName} ${stopClassName}-normal`
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

export const setTextY = (ChiOrEng='Chi', r=6, stopNameH=0, stopNameEngH=0, UpOrDown='Up') => {
  switch (UpOrDown) {
    case 'Up':
      return ChiOrEng === 'Chi' ? 
        (- r * 1.5 - stopNameH + 2) :
        (- r * 1.5 - stopNameEngH)
    case 'Down':
      return (r * 1.5 + 8)
    default:
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


export const Stop = (props) => {
  const { x=0, y=0, stopType='normal', stopName='車站', circleR=6  } = props

  return (
    <g transform={`translate(${x}, ${y})`}  >
      <circle 
        cx={ circleR } 
        cy={ circleR } 
        r={ circleR } 
        className={ setStopClassName(stopType, 'stop') } 
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
        className={ setStopClassName(stopType, 'stopName') } >
        {stopName}
      </text>
    </g>
  )
}
export class StopWithEng extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stopNameH: 0,
      stopNameW: 0,
      stopNameEngH: 0,
    };
    this.setStopNameSpec = this.setStopNameSpec.bind(this)
  }

  setStopNameSpec() {
    if(this.stopNameEl) {
      const stopNameHeight = this.stopNameEl.getBBox().height
      const stopNameWidth = this.stopNameEl.getBBox().width
      const stopNameEngHeight = this.stopNameEngEl.getBBox().height
      this.setState({
        stopNameH: stopNameHeight,
        stopNameW: stopNameWidth,
        stopNameEngH: stopNameEngHeight,
        stopNameSpecSet: true,
      })
    }
  }
  componentDidMount = () => {
    this.setStopNameSpec()
    // this.testSpyOn()
  }
 
  render() {
    const { x=0, y=0, stopType='normal', stopName='車站', stopNameEng='station', circleR=6, UpOrDown, direction } = this.props
    const { stopNameH, stopNameW, stopNameEngH } = this.state
    const { stopNameEng_fs } = stopWithEng.fontSize

    return (
      <g transform={`translate(${x}, ${y})`} >
         <SpecialIcon stopName={stopName} stopNameH={stopNameH} stopType={stopType} direction={direction} circleR={circleR} UpOrDown={UpOrDown} /> 
        <text 
          x={ circleR } 
          y={ setTextY('Chi', circleR, stopNameH, stopNameEngH, UpOrDown) }
          className={ setStopClassName(stopType, 'stopName-withEng') }
          ref={(e) => this.stopNameEl = e}
        >
          {stopName}
        </text>

        <text 
          x={ stopNameW + 1.5 } 
          y={ setTextY('Eng', circleR, stopNameH, stopNameEngH, UpOrDown) }
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