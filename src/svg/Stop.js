import React, {  } from 'react'
import nowStopArrow from '../images/nowStop-arrow.svg'
// import PropTypes from 'prop-types'

const styles = {
  stopWithEng: {
    fontSize: {
      stopName_fs: 18,
      stopNameEng_fs: 9,
    }
  }
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
        y={ circleR * 2 + 8 }
        className={ stopType === 'normal' ? ('stopName-normal') : (stopType === 'passed' ? 'stopName-passed' : 'stopName-now') } >
        {stopName}
      </text>
    </g>
  )
}

export const Stop_WithEng = (props) => {
  const { x=0, y=0, stopType='normal', stopName='車站', stopNameEng='station', circleR=6, fontSize=18, direction='left'  } = props
  const { stopNameEng_fs } = styles.stopWithEng.fontSize
  
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
        x={ circleR - 2 } 
        y={ - circleR * 2 - stopName.length * (fontSize + 2) + 2 }
        className={ 
          stopType === 'normal' ? 
          ('stopName-withEng stopName-withEng-normal') : 
          (stopType === 'end' ? 
          'stopName-withEng stopName-withEng-end' : 
          'stopName-withEng stopName-withEng-now') 
        } 
      >
        {stopName}
      </text>

      <text 
        x={ circleR - 1 + 15 } 
        y={ -circleR * 2 - stopNameEng.length * stopNameEng_fs / 2.2 }
        className={ 
          stopType === 'normal' ? 
          ('stopNameEng-withEng stopNameEng-withEng-normal') : 
          (stopType === 'end' ? 
          'stopNameEng-withEng stopNameEng-withEng-end' : 
          'stopNameEng-withEng stopNameEng-withEng-now') 
        } 
        style={{fontSize: stopNameEng_fs}}
      >
        {stopNameEng}
      </text>
    </g>
  )
}
