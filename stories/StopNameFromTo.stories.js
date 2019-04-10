import React from 'react'
import { storiesOf } from '@storybook/react'

import { StopFromTo_ChiaYi, StopFromTo_Yunlin, StopFromTo_ChanHua, SplitBracketsText } from '../src/svg/Head'
import { splitBrackets } from '../src/svg/svgFunctions'
import { styles } from '../config'
const { ChanHua, Yunlin } = styles.head
import { mockFromToData } from './mockData'

storiesOf('StopName FromTo', module)
  .add('StopName FromTo - ChiaYi (no arrow)', () => (
    <svg width='1000' height='720'>
      <StopFromTo_ChiaYi {...mockFromToData.ChiaYi}/>
    </svg>
  ))
  
  .add('StopName FromTo - Yunlin', () => (
    <svg width='1000' height='720'>
      <StopFromTo_Yunlin 
        {...mockFromToData.Yunlin}
        x={ Yunlin.layOut.stopName.x } 
        y={ Yunlin.layOut.stopName.y } />
      <StopFromTo_Yunlin 
        {...mockFromToData.Yunlin} 
        x={ Yunlin.layOut.stopNameEng.x } 
        y={ Yunlin.layOut.stopNameEng.y } 
        fromTo={mockFromToData.Yunlin.fromToEng}
        fontSize={10}
        pass={''} />
    </svg>
  ))

  .add('StopName FromTo - ChanHua (no arrow)', () => (
    <svg width='1000' height='720'>
      <StopFromTo_ChanHua 
        {...mockFromToData.ChanHua} 
        fromTo2={
          <tspan>
            {splitBrackets(mockFromToData.ChanHua.fromTo2Text)[0]} 
            <SplitBracketsText splitText={ mockFromToData.ChanHua.fromTo2Text } />
          </tspan>
        }
      />
      <StopFromTo_ChanHua 
        {...mockFromToData.ChanHua} 
        y={48}
        fromTo1={mockFromToData.ChanHua.fromToEng1}
        fromTo2={mockFromToData.ChanHua.fromToEng2}
        fontSize={ChanHua.stopEng}
      />
    </svg>
  ))