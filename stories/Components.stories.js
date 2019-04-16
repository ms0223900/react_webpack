import React from 'react'
import { storiesOf } from '@storybook/react'
import '../styles/style.scss'

import { mockComponentsData } from './mockData'
import { Stop, StopWithEng } from '../src/svg/Stop'
import { QRcode_Yunlin } from '../src/svg/SideInfo'
import { BusSchedule, SingleSchedule } from '../src/svg/BusSchedule'

const { normalStop, nowStop, endStop, hospitalStop, TIME, QRcodeYunlin } = mockComponentsData


storiesOf('BusStop Components', module)
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
    <svg width='720' height='900'>
      <text x={10} y={400}>complete bus schedule</text>
      <BusSchedule time={TIME} forDemo={true} y={100} />

      <text x={10} y={120}>single bus schedule time (when it's id is odd)</text>
      <SingleSchedule objArr={{
        id: 3,
        data: ['02', ['11', '22', '44', '60'], ['33']]
      }} y={0} />
    </svg>
  )
  .add('QRcode for Yunlin', () => (
    <svg width='720' height='720'>
      <QRcode_Yunlin {...QRcodeYunlin} />
    </svg>
  ))