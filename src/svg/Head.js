import React from 'react'
import { Text, BigArrow } from './SVGComponents'
import backgroudImage from '../images/Head_background.png'

const styles = {
  fontSize: {
    stop: 24,
    stopEng: 14,
    routeNumber: 60,
  }
}
const layOut = {
  topLine: 16,
  bigArrow: {
    width: 40,
    spacting: 20,
  },
  stop: {
    x: 340,
  },
}

const calTextY = (y, fontSize) => {
  const fontSpacing = (1.175 - 1) * fontSize
  return y - fontSpacing + fontSize
}

export const Head = (props) => {
  const { number, fromTo, fromToEng } = props
  return (
    <g>
      <image 
        xlinkHref={backgroudImage}
        width={'840'} 
      />
      <Text
        x={20}
        y={ calTextY(layOut.topLine, styles.fontSize.routeNumber) }
        text={number}
        className={'routeNumber'}
        style={{ fontSize: styles.fontSize.routeNumber }} 
      />
      <g 
        className={'fromTo'} 
        transform={ fromToEng[0].length === 0 ? 'translate(0, 8)' : 'translate(0, 0)' }>
        <g>
          <Text
            x={ layOut.stop.x }
            y={ calTextY(layOut.topLine, styles.fontSize.stop) } 
            text={fromTo[0]}
            className={'stop'}
            style={{ fontSize: styles.fontSize.stop }} 
          />
          <Text 
            x={ layOut.stop.x }
            y={ calTextY(layOut.topLine, styles.fontSize.stopEng) + 30 }
            text={fromToEng[0]}
            className={'stop-eng'}
            style={{ fontSize: styles.fontSize.stopEng }} 
          />
        </g>
        <g>
          <BigArrow 
            x={ 
              layOut.stop.x + 
              fromTo[0].length * styles.fontSize.stop + layOut.bigArrow.spacting 
            }
            y={layOut.topLine + 2}
            width={40}
            rotate={0}
            fill={'#000'}
          />
        </g>
        <g>
          <Text 
            x={ 
              layOut.stop.x + 
              fromTo[0].length * styles.fontSize.stop + 
              layOut.bigArrow.width + 
              layOut.bigArrow.spacting * 2
            }
            y={ calTextY(layOut.topLine, styles.fontSize.stop) } 
            text={fromTo[1]}
            className={'stop'}
            style={{ fontSize: styles.fontSize.stop }} 
          />
          <Text 
            x={ 
              layOut.stop.x + 
              fromTo[0].length * styles.fontSize.stop + 
              layOut.bigArrow.width + 
              layOut.bigArrow.spacting * 2
            }
            y={ calTextY(layOut.topLine, styles.fontSize.stopEng) + 30 }
            text={fromToEng[1]}
            className={'stop-eng'}
            style={{ fontSize: styles.fontSize.stopEng }} 
          />
        </g>
      </g>
    </g>
  )
}