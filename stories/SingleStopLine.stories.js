import React from 'react'
import { storiesOf } from '@storybook/react'
import { mockChiaYiFile, mockYunlinFile } from './mockData'

import { Route, RouteWithEngStops } from '../src/svg/SingleStopLine'






storiesOf('Single Stop Line', module)
  .add('normal Route with 1 line', () => (
    <svg width='800' height='720'>
      <Route route={mockChiaYiFile['1Line']} />
    </svg>
  ))
  .add('normal RouteWithEngStops with 1 line (stops up)', () => (
    <svg width='800' height='720'>
      <RouteWithEngStops 
        route={mockYunlinFile['1Line']} 
        endID={[0, mockYunlinFile['1Line'].length - 1]}
        UpOrDown='Up' />
    </svg>
  ))
  .add('normal RouteWithEngStops with 1 line (stops down)', () => (
    <svg width='800' height='720'>
      <RouteWithEngStops 
        route={mockYunlinFile['1Line']} 
        endID={[0, mockYunlinFile['1Line'].length - 1]}
        UpOrDown='Down' />
    </svg>
  ))
  // .add('normal Route with 2 lines', () => (
  //   <svg width='800' height='720'>
  //     <Route route={mockChiaYiFile['2Lines']} />
  //   </svg>
  // ))
  // .add('normal Route with 3 lines', () => (
  //   <svg width='800' height='720'>
  //     <Route route={mockChiaYiFile['3Lines']} />
  //   </svg>
  // ))
  // .add('normal Route with 4 lines', () => (
  //   <svg width='800' height='720'>
  //     <Route route={mockChiaYiFile['4Lines']} />
  //   </svg>
  // ))