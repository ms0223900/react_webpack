import React from 'react'
import { storiesOf } from '@storybook/react'
import { mockChiaYiFile, mockYunlinFile } from './mockData'

import { Route, Route_ChiaYi } from '../src/svg/SingleStopLine'






storiesOf('Single Stop Line', module)
  .add('normal Route with 1 line', () => (
    <svg width='800' height='720'>
      <Route_ChiaYi route={mockChiaYiFile['1Line']} />
    </svg>
  ))
  .add('normal Route with 1 line (stops up)', () => (
    <svg width='800' height='720'>
      <Route 
        route={mockYunlinFile['1Line']} 
        endID={[0, mockYunlinFile['1Line'].length - 1]}
        UpOrDown='Up' />
    </svg>
  ))
  .add('normal Route with 1 line (stops down)', () => (
    <svg width='800' height='720'>
      <Route 
        route={mockYunlinFile['1Line']} 
        endID={[0, mockYunlinFile['1Line'].length - 1]}
        UpOrDown='Down' />
    </svg>
  ))