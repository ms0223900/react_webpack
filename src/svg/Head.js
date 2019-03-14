import React from 'react'
import { Text, BigArrow } from './SVGComponents'
import { calTextY, textAlignCenter, splitBrackets } from './svgFunctions'
import backgroudImage from '../images/Head_background.png'

const styles = {
  ChiaYi: {
    fontSize: {
      stop: 24,
      stopEng: 14,
      routeNumber: 60,
    },
  },
  Yunlin: {
    fontSize: {
      stop: 32,
      stopEng: 11,
      routeNumber: 60,
      pass: 15,
    },
  },
  ChanHua: {
    fontSize: {
      stop: 34,
      stopEng: 11,
      routeNumber: 52,
    },
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

const getBBox_Width = (el) => el.getBBox().width

export const Head_ChiaYi = (props) => {
  const { number, fromTo, fromToEng } = props
  return (
    <g>
      <image 
        xlinkHref={backgroudImage}
        width={'840'} 
      />
      <Text
        x={20}
        y={ calTextY(layOut.topLine, styles.ChiaYi.fontSize.routeNumber) }
        text={number}
        className={'routeNumber'}
        style={{ fontSize: styles.ChiaYi.fontSize.routeNumber }} 
      />
      <g 
        className={'fromTo'} 
        transform={ fromToEng[0].length === 0 ? 'translate(0, 8)' : 'translate(0, 0)' }>
        <g>
          <Text
            x={ layOut.stop.x }
            y={ calTextY(layOut.topLine, styles.ChiaYi.fontSize.stop) } 
            text={fromTo[0]}
            className={'stop'}
            style={{ fontSize: styles.ChiaYi.fontSize.stop }} 
          />
          <Text 
            x={ layOut.stop.x }
            y={ calTextY(layOut.topLine, styles.ChiaYi.fontSize.stopEng) + 30 }
            text={fromToEng[0]}
            className={'stop-eng'}
            style={{ fontSize: styles.ChiaYi.fontSize.stopEng }} 
          />
        </g>
        <g>
          <BigArrow 
            x={ 
              layOut.stop.x + 
              fromTo[0].length * styles.ChiaYi.fontSize.stop + layOut.bigArrow.spacting 
            }
            y={layOut.topLine + 2}
            width={40}
            rotate={0}
            fill={'#000'}
          />
        </g>
        <g>
          <text 
            x={ 
              layOut.stop.x + 
              fromTo[0].length * styles.ChiaYi.fontSize.stop + 
              layOut.bigArrow.width + 
              layOut.bigArrow.spacting * 2
            }
            y={ calTextY(layOut.topLine, styles.ChiaYi.fontSize.stop) }
            className={'stop'}
            style={{ fontSize: styles.ChiaYi.fontSize.stop }} 
          >
            {splitBrackets(fromTo[1])[0]}
              <tspan className={'fromTo-ChanHua-description'}>
                {splitBrackets(fromTo[1]).length > 1 ? splitBrackets(fromTo[1])[1] : ''}
              </tspan>
          </text>
          <Text 
            x={ 
              layOut.stop.x + 
              fromTo[0].length * styles.ChiaYi.fontSize.stop + 
              layOut.bigArrow.width + 
              layOut.bigArrow.spacting * 2
            }
            y={ calTextY(layOut.topLine, styles.ChiaYi.fontSize.stopEng) + 30 }
            text={fromToEng[1]}
            className={'stop-eng'}
            style={{ fontSize: styles.ChiaYi.fontSize.stopEng }} 
          />
        </g>
      </g>
    </g>
  )
}

export const Head_Yunlin = (props) => {
  const { number, fromTo, fromToEng, pass, charge } = props
  const { fontSize } = styles.Yunlin
  return (
    <g className={'head-Yunlin'}>
      <g className={'fromTo-Yunlin'}>
        <Text 
          x={14}
          y={calTextY(24, 60) - 7}
          style={{ fontSize: number.trim().length > 4 ? '48' : fontSize.routeNumber }} 
          text={number}
          className={'routeNumber'}
        />
        <text 
          x={164}
          y={calTextY(24 + 6, 32)} 
          style={{ fontSize: fontSize.stop }}
        >
          { fromTo[0] + ' → ' + fromTo[1] }
          <tspan
            style={{ fontSize: fontSize.pass }}
          >
            {pass.length > 1 ? '(' + pass[0] + ')' : ''}
          </tspan>
        </text>
      </g>
      <g className={'by-pass-Yunlin'}>
        <Text
          x={474}
          y={calTextY(12, 15)}
          text={ pass.length > 1 ? ( '經' + pass[1] ) : '' }
          style={{ fontSize: fontSize.pass }}
        />
        <Text 
          x={570}
          y={calTextY(12, 43
            )}
          text={charge}
          style={{ fontSize: fontSize.pass }}
        />
      </g>
      <g className={'fromToEng-Yunlin'}>
        <Text 
          x={176}
          y={calTextY(72, 11)}
          text={number + ' ' + fromToEng.join('→')}
          style={{ fontSize: fontSize.stopEng }}
        />
      </g>
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
    const { routeNumber, stop, stopEng } = styles.ChanHua.fontSize
    const { number, fromTo, fromToEng } = this.props
    const { fromTo1_W, fromTo2_W, fromTo1Eng_W, fromTo2Eng_W } = this.state
    console.log(splitBrackets(fromTo[1]))
    return (
      <g className={'head-ChanHua'}>
        <Text 
          x={13}
          y={calTextY(24, routeNumber)}
          style={{ fontSize: styles.ChanHua.fontSize.routeNumber }} 
          text={number}
          className={'routeNumber'}
        />
        <g className={'fromTo-ChanHua'}>
          <text 
            x={textAlignCenter(182, fromTo1_W, 305)}
            y={calTextY(12, stop)} 
            style={{ fontSize: styles.ChanHua.fontSize.stop }}
            ref={(e) => this.fromTo1 = e}
          >
            {fromTo[0]}
          </text>
          <text 
            x={textAlignCenter(520, fromTo2_W, 305)}
            y={calTextY(12, stop)} 
            style={{ fontSize: styles.ChanHua.fontSize.stop }}
            ref={(e) => this.fromTo2 = e}
          >
              {splitBrackets(fromTo[1])[0]}
            <tspan className={'fromTo-ChanHua-description'}>
              {splitBrackets(fromTo[1]).length > 1 ? splitBrackets(fromTo[1])[1] : ''}
            </tspan>
          </text>
        </g>
        <text>
          {' → '}
        </text>
        <g className={'fromToEng-ChanHua'}>
          <text
            x={textAlignCenter(182, fromTo1Eng_W, 305)}
            y={calTextY(48, stopEng)}
            style={{ fontSize: styles.ChanHua.fontSize.stopEng }}
            ref={(e) => this.fromToEng1 = e}
          >
            {fromToEng[0]}
          </text>
          <text
            x={textAlignCenter(520, fromTo2Eng_W, 305)}
            y={calTextY(48, stopEng)}
            style={{ fontSize: styles.ChanHua.fontSize.stopEng }}
            ref={(e) => this.fromToEng2 = e}
          >
            {fromToEng[1]}
          </text>
        </g>
      </g>
    )
  }
}
