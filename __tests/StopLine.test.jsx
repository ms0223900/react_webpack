/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { 
  sepLines,
  MappedRoutesChanHua
} from '../src/svg/StopLine'
import { 
  Route_ChanHua
} from '../src/svg/SingleStopLine'
import { shallow, render } from 'enzyme'
import { Stop, StopWithEng } from '../src/svg/Stop';

describe('test amount of lines when amount of data is different', () => {
  it('when the data is less than 10 and it should be 1 line', () => {
    expect(sepLines(9)).toBe(1)
  })
  it('when the data is more than 10 and less than 40, it should be 2 lines', () => {
    expect(sepLines(25)).toBe(2)
  })
  it('when the data is more than 40 and less than 80(or equal to 80), it should be 3 lines', () => {
    expect(sepLines(80)).toBe(3)
  })
  it('when the data is more than 80, it should be 4 lines', () => {
    expect(sepLines(81)).toBe(4)
  })
})

describe('test HOC', () => {
  it('test ChanHua Route', () => {
    const ChanHuaRoute = shallow(<MappedRoutesChanHua />) 
    expect(ChanHuaRoute.find(Route_ChanHua)).toHaveLength(1)
  })
})


