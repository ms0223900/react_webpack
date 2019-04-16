import React from 'react'
import { storiesOf } from '@storybook/react'
import '../styles/style.scss'

import { mockComponentsData } from './mockData'
import { Stop, StopWithEng } from '../src/svg/Stop'
import { QRcode_Yunlin } from '../src/svg/SideInfo'
import { BusSchedule } from '../src/svg/BusSchedule'

const { normalStop, nowStop, endStop, hospitalStop, TIME, QRcodeYunlin } = mockComponentsData


storiesOf('BusStop', module)
  .add('stop with Chinese', () => 
    <svg width='720' height='720'>
      <Stop {...normalStop} />
      <text x='70' y='300'>normal stop</text>

      <Stop {...nowStop} />
      <text x='220' y='360'>now stop</text>


    </svg>
  )
  .add('stops with Chinese and English', () => 
    <svg width='720' height='720'>
      <StopWithEng {...normalStop} />
      <StopWithEng {...normalStop} y={'330'} UpOrDown={'Down'} />
      <text x='20' y='420'>normal stop with text down</text>
      <text x='70' y='250'>normal stop</text>

      <StopWithEng {...nowStop} />
      <text x='220' y='250'>now stop</text>

      <StopWithEng {...endStop} />
      <text x='370' y='250'>end stop</text>

      <StopWithEng {...hospitalStop} />
      <text x='470' y='250'>hospital stop</text>
    </svg>
  )
  .add('bus schedule', () => 
    <svg width='720' height='720'>
      <BusSchedule time={TIME}/>
    </svg>
  )
  .add('QRcode for Yunlin', () => (
    <svg width='720' height='720'>
      <QRcode_Yunlin {...QRcodeYunlin} />
    </svg>
  ))