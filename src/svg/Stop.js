import React, {  } from 'react'
import nowStopArrow from '../images/nowStop-arrow.svg'
import hospital from '../images/hospital.svg'
// import PropTypes from 'prop-types'

const styles = {
  stopWithEng_Up: {
    fontSize: {
      stopName_fs: 18,
      stopNameEng_fs: 9,
    }
  }, 
  stopWithEng_Down: {
    fontSize: {
      stopName_fs: 18,
      stopNameEng_fs: 9,
    }
  }, 
}


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
    const { stopNameEng_fs } = styles.stopWithEng_Up.fontSize
    
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
          x={ circleR } 
          y={ - circleR * 1.5 - stopNameH + 2 }
          className={ 
            stopType === 'normal' ? 
            ('stopName-withEng stopName-withEng-normal') : 
            (stopType === 'end' ? 
            'stopName-withEng stopName-withEng-end' : 
            'stopName-withEng stopName-withEng-now') 
          } 
          ref={(e) => this.stopNameEl = e}
        >
          {stopName}
        </text>

        <text 
          x={ stopNameW + 1.5 } 
          y={ -circleR * 1.5 - stopNameEngH }
          className={ 
            stopType === 'normal' ? 
            ('stopNameEng-withEng stopNameEng-withEng-normal') : 
            (stopType === 'end' ? 
            'stopNameEng-withEng stopNameEng-withEng-end' : 
            'stopNameEng-withEng stopNameEng-withEng-now') 
          } 
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
    const { stopNameEng_fs } = styles.stopWithEng_Down.fontSize
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
