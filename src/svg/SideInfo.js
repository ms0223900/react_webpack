/* eslint-disable quotes */
import React from 'react'
import { Text } from './SVGComponents'
import { calTextY, genObjArr } from './svgFunctions'
import { styles } from '../../config'

import QRcodeBusDynamic from '../images/QRcode-busDynamic.svg'
import QRcodeTicketPrice from '../images/QRcode-ticketPrice.svg'
const { ChiaYi, Yunlin } = styles.sideInfo


const layout = {
  padding: {
    top: 328,
    left: 32,
    between: 16,
  },
}

const QRcode = (props) => {
  const { x=0, y=0, width=72, text='text', imgSrc='' } = props
  const { fontSize } = ChiaYi
  return (
    <g transform={`translate(${x}, ${y})`}>
      <image 
        xlinkHref={imgSrc}
        width={width} />
      <Text
        x={0}
        y={calTextY(width, fontSize) + 4}
        text={text}
        className={'qrcode-text'} />
    </g>
  )
}

export const QRcode_Yunlin = (props) => {
  const { x=0, y=0, width=72, imsi='466011200153956', nowStop='頂湳站' } = props
  const { stopFS, stopQueryFS } = Yunlin
  const url = 'http://ebus.yunlin.gov.tw/QRcodeGetBusTime.aspx?imsi=' + imsi

  return (
    <g transform={`translate(${x}, ${y})`}>
      <image 
        xlinkHref={ 'http://chart.apis.google.com/chart?cht=qr&choe=UTF-8&chs=300x300&chl=' + url }
        width={width} />
      <text
        x={90}
        y={calTextY(-8, stopFS) + 4}
        fontSize={stopFS}
        className={'qrcode-nowStop'}
      >
        {`(${nowStop})`}
      </text>
      <text
        x={108}
        y={calTextY(0, stopQueryFS) - 6}
        fontSize={stopQueryFS}
        className={'qrcode-query'}
      >
        {'到站查詢'}
      </text>
    </g>
  )
}


export const SideInfo_ChiaYi = () => {
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
        <g transform={`translate(0, 550)`} >
          <circle 
            cx={ 8 } 
            cy={ 8 } 
            r={ 8 } 
            className={ 'stop-now' } 
          />
          <circle 
            cx={ 8 } 
            cy={ 8 } 
            r={ 4 } 
            className={ 'stop-now-center' } 
          />
          <text
            x={ 18 }
            y={ 13 }
            fontSize={14}
            className={'stop-now-sideInfo'}
          >
            {'現在位置'}
          </text>
        </g>
      </g>
    </g>
  )
}

export const SideInfo_ChanHua = (props) => {
  const { byPass='', time=[''] } = props
  const timeObjArr = genObjArr(time)
  return (
    <g>
      <text 
        x={32} 
        y={150} 
        className={'byPass-ChanHua'}
      >
        {byPass}
      </text>
      {timeObjArr.map(t => (
        <text
          key={t.id}
          x={32}
          y={ 200 + t.id * 18 }
        >
          {t.data}
        </text>
      ))}
    </g>
  )
}
