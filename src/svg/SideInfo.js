/* eslint-disable quotes */
import React from 'react'
import { Text } from './SVGComponents'
import QRcodeBusDynamic from '../images/QRcode-busDynamic.svg'
import QRcodeTicketPrice from '../images/QRcode-ticketPrice.svg'

const layout = {
  padding: {
    top: 328,
    left: 32,
    between: 16,
  },
  fontSize: 16,
}

const calTextY = (y, fontSize) => {
  const fontSpacing = (1.175 - 1) * fontSize
  return y - fontSpacing + fontSize
}

const QRcode = (props) => {
  const { x=0, y=0, width=72, text='text', imgSrc='' } = props
  return (
    <g transform={`translate(${x}, ${y})`}>
      <image 
        xlinkHref={imgSrc}
        width={width} />
      <Text
        x={0}
        y={calTextY(width, layout.fontSize) + 4}
        text={text}
        className={'qrcode-text'} />
    </g>
  )
}

export const SideInfo = () => {
  // const {  } = props
  return (
    <g>
      <g transform={`translate(${layout.padding.left}, 0)`}>
        <QRcode
          x={0}
          y={layout.padding.top}
          width={72}
          text={'公車動態'}
          imgSrc={QRcodeBusDynamic}
        />
        <QRcode
          x={0}
          y={ layout.padding.top + layout.padding.between + 72 + 4 + 10 }
          width={72}
          text={'梯形票價'}
          imgSrc={QRcodeTicketPrice}
        />
      </g>
      
    </g>
  )
}