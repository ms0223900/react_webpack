import React, { Fragment } from 'react'
import { BigArrow } from './SVGComponents'
import { calTextY, textAlignCenter, splitBrackets } from './svgFunctions'
import backgroudImage from '../images/Head_background.png'

import { styles } from '../../config'
const { ChiaYi, Yunlin, ChanHua } = styles.head

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

const getBBox_Width = (el) => el.getBBox().width
const stopWidthSetting = (fromTo='') => (
  layOut.stop.x + 
  fromTo.length * ChiaYi.fontSize.stop + 
  layOut.bigArrow.width + 
  layOut.bigArrow.spacting * 2
)

export const SplitBracketsText = ({splitText=''}) => (
  <tspan className={'fromTo-small-description'}>
    { splitBrackets(splitText).length > 1 ? 
    splitBrackets(splitText)[1] : '' }
  </tspan>
)
export const getPassText = (passText=['']) => (
  passText.length > 1 ?
  [`(${passText[0]})`, `經${passText[1]}`] :
  ['', '']
)
export const RouteNumber = ({ number='0000', className='ChiaYi', x=0, y=0, fontSize=12 }) => (
  <text
    x={x}
    y={ y }
    className={`routeNumber routeNumber-${className}`}
    style={{ fontSize: fontSize }} 
  >
    {number}
  </text>
)
export const StopFromTo_ChiaYi = ({ fromTo1='', fromTo2='', className='stop', fontSize=12, y=0 }) => (
  <g style={{ fontSize: fontSize }}>
    <text
      x={ layOut.stop.x }
      y={ y }
      className={className}
    >
      {fromTo1}
    </text>
    <text 
      x={ stopWidthSetting(fromTo1) }
      y={ y }
      className={className}
    >
      {fromTo2}
    </text>
  </g>
)
export const StopFromTo_Yunlin = ({ className='fromTo-Yunlin', x=0, y=0, fontSize=12, fromTo=[], pass=[], passFontSize=10 }) => (
  <g className={className} style={{ fontSize: fontSize }}>
    <text 
      x={x}
      y={y} 
    >
      { fromTo[0] + ' → ' + fromTo[1] }
      <tspan
        style={{ fontSize: passFontSize }}
      >
        { getPassText(pass)[0] }
      </tspan>
    </text>
  </g>
)
export const StopFromTo_ChanHua = ({ className='fromTo-ChanHua', y=12, fromTo1='', fromTo1W=0, fromTo2='', fromTo2W=0, fontSize=10, refFn1, refFn2 }) => (
  <g className={className} style={{ fontSize: fontSize }}>
    <text 
      x={textAlignCenter(182, fromTo1W, 305)}
      y={calTextY(y, fontSize)}
      ref={refFn1}
    >
      {fromTo1}
    </text>
    <text 
      x={textAlignCenter(520, fromTo2W, 305)}
      y={calTextY(y, fontSize)}
      ref={refFn2}
    >
      {fromTo2}
    </text>
  </g>
)
export const ByPass_Yunlin = ({ passStopXY={ x:0, y:0 }, chargeXY={ x:0, y:0 }, passText='', chargeText='', fontSize=10 }) => (
  <g className={'by-pass-Yunlin'} style={{ fontSize: fontSize }}>
    <text
      x={passStopXY.x}
      y={passStopXY.y}>
      { getPassText(passText)[1] }
    </text>
    <text
      x={chargeXY.x}
      y={chargeXY.y}>
      {chargeText}
    </text> 
  </g>
)
//------------------------------------

export const Head_ChiaYi = (props) => {
  const { number='0000', fromTo=['a', 'b'], fromToEng=['', ''] } = props
  return (
    <g>
      <image 
        xlinkHref={backgroudImage}
        width={'840'} 
      />
      <RouteNumber 
        x={10} 
        y={calTextY(layOut.topLine, ChiaYi.fontSize.routeNumber)} 
        number={number} 
        className={'ChiaYi'}
        fontSize={ChiaYi.fontSize.routeNumber} />
      <g 
        className={'fromTo'} 
        transform={ fromToEng[0].length === 0 ? 'translate(0, 8)' : 'translate(0, 0)' }
      >
        <StopFromTo_ChiaYi 
          y={ calTextY(layOut.topLine, ChiaYi.fontSize.stop) }
          fromTo1={fromTo[0]} 
          fromTo2={
            <Fragment>
              {splitBrackets(fromTo[1])[0]} 
              <SplitBracketsText splitText={ fromTo[1] } />
            </Fragment>
          }
          className='stop'
          fontSize={ ChiaYi.fontSize.stop } 
        /> 
        <BigArrow 
          x={ layOut.stop.x + 
            fromTo[0].length * ChiaYi.fontSize.stop + layOut.bigArrow.spacting }
          y={layOut.topLine + 2}
          width={40}
          rotate={0}
          fill={'#000'}
        />
        <StopFromTo_ChiaYi 
          y={ calTextY(layOut.topLine, ChiaYi.fontSize.stopEng) + 30 }
          fromTo1={fromToEng[0]} 
          fromTo2={fromToEng[1]}
          className='stop-eng'
          fontSize={ChiaYi.fontSize.stopEng} 
        />
      </g>
    </g>
  )
}
export const Head_Yunlin = (props) => {
  const { number='0000', fromTo=['a', 'b'], fromToEng=['', ''], pass='', charge='' } = props
  const { fontSize } = Yunlin
  return (
    <g className={'head-Yunlin'}>
      <RouteNumber 
        x={14} 
        y={ calTextY(24, 60) - 7 } 
        number={number} 
        className={'Yunlin'}
        fontSize={number.trim().length > 4 ? '48' : fontSize.routeNumber}
      />
      <StopFromTo_Yunlin 
        x={ Yunlin.layOut.stopName.x } 
        y={ Yunlin.layOut.stopName.y } 
        fontSize={fontSize.stop} 
        fromTo={fromTo} 
        pass={pass}  />
      <StopFromTo_Yunlin
        x={ Yunlin.layOut.stopNameEng.x } 
        y={ Yunlin.layOut.stopNameEng.y } 
        fontSize={fontSize.stopEng} 
        fromTo={fromToEng} />
      <ByPass_Yunlin
        passStopXY={ Yunlin.layOut.byPassStop }
        chargeXY={ Yunlin.layOut.charge }
        passText={pass}
        chargeText={charge}
        fontSize={ Yunlin.fontSize.pass }
      />
    </g>
  )
}  
export class Head_ChanHua extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fromTo1_W: 0,
      fromTo2_W: 0,
      fromTo1Eng_W: 0,
      fromTo2Eng_W: 0,
    };
    this.setFromTo1 = el => this.fromTo1 = el
    this.setFromTo2 = el => this.fromTo2 = el
    this.setFromToEng1 = el => this.fromToEng1 = el
    this.setFromToEng2 = el => this.fromToEng2 = el
  }

  componentDidMount = () => {
    this.setState({
      fromTo1_W: getBBox_Width(this.fromTo1),
      fromTo2_W: getBBox_Width(this.fromTo2),
      fromTo1Eng_W: getBBox_Width(this.fromToEng1),
      fromTo2Eng_W: getBBox_Width(this.fromToEng2),
    })
  }
  
  render() {
    const { routeNumber, stop, stopEng } = ChanHua.fontSize
    const { number='0000', fromTo=['a', 'b'], fromToEng=['', ''] } = this.props
    const { fromTo1_W, fromTo2_W, fromTo1Eng_W, fromTo2Eng_W } = this.state
    console.log(splitBrackets(fromTo[1]))
    return (
      <g className={'head-ChanHua'}>
        <RouteNumber 
          x={13} 
          y={ calTextY(24, routeNumber) } 
          number={number} 
          className={'ChanHua'}
          fontSize={ChanHua.fontSize.routeNumber}
        />
        <StopFromTo_ChanHua
          fromTo1={fromTo[0]}
          fromTo2={
            <tspan>
              {splitBrackets(fromTo[1])[0]} 
              <SplitBracketsText splitText={ fromTo[1] } />
            </tspan>}
          fromTo1W={fromTo1_W}
          fromTo2W={fromTo2_W}
          fontSize={stop}
          refFn1={this.setFromTo1}
          refFn2={this.setFromTo2}
        />
        <text className='arrow-text-ChanHua'>
          {' → '}
        </text>
        <StopFromTo_ChanHua
          y={48}
          fromTo1={fromToEng[0]}
          fromTo2={fromToEng[1]}
          fromTo1W={fromTo1Eng_W}
          fromTo2W={fromTo2Eng_W}
          fontSize={stopEng}
          refFn1={this.setFromToEng1}
          refFn2={this.setFromToEng2}
        />
      </g>
    )
  }
}
