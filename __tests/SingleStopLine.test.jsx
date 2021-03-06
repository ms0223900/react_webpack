/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { 
  getStopType,
  getBetweenStopDistance,
  Route,
  RouteWithEngStops,
  Route_Yunlin,
  Route_ChanHua,
} from '../src/svg/SingleStopLine'
import { shallow, render } from 'enzyme'
import { Stop, StopWithEng } from '../src/svg/Stop';


describe('Test different stop type(getStopType function)', () => {
  it('Test stop type when stopTypeNo is 0, id is 10 and it should be "now"', () => {
    expect(getStopType(0, 10)).toBe('now') 
  })
  it('Test stop type when stopTypeNo is 1, id is 10 and it should be "normal"', () => {
    expect(getStopType(1, 10)).toBe('normal')
  })
  it('Test stop type when stopTypeNo is -1, id is 10 and it should be "passed"', () => {
    expect(getStopType(-1, 10)).toBe('passed') 
  })
  it('Test stop type when stopTypeNo is 0, id is 10, endIDs is [0, 40] and it should be "normal"', () => {
    expect( getStopType(0, 10, [0, 40]) ).toBe('now')
  })
  it('Test stop type when stopTypeNo is -1, id is 10, endIDs is [0, 40] and it should be "normal"', () => {
    expect(getStopType(-1, 10, [0, 40])).toBe('normal')
  })
  it('Test stop type when stopTypeNo is 1, id is 1, endIDs is [0, 10] and it should be "end"', () => {
    expect( getStopType(1, 0, [0, 40]) ).toBe('end')
  })
  it('Test stop type when there is no arguments(default) or not 0, 1 or -1 and it should be normal', () => {
    expect( getStopType() ).toBe('normal')
    expect( getStopType(111) ).toBe('normal')
  })
})

describe('test stop distance on the line', () => {
  it('get distance between stop when it is right it should be more', () => {
    //if right, it is true
    expect(getBetweenStopDistance(true, 10, 2, 20, 20)).toBe(10 + 2 * 20)
  })
  it('get distance between stop when it is right it should be more', () => {
    expect(getBetweenStopDistance(false, 10, 2, 20, 20)).toBe(10 - 2 * 20)
  })
  it('get distance between stop when it is exceed amount of lastStop it should be recalculate from 0', () => {
    //if right it is true
    expect(getBetweenStopDistance(true, 10, 20, 20, 20)).toBe(10 + 0 * 20)
  })
})

describe('test single stop line (Route)', () => {
  const routeData = {
    direction: 'right',
    route: [
      {id: 0, stopName: 'aa', stopType: 1}, 
      {id: 1, stopName: 'bb', stopType: 1}, ],
  }
  const routeData2 = {
    direction: 'left',
    route: [
      {id: 0, stopName: 'aa', stopType: 1}, 
      {id: 1, stopName: 'bb', stopType: 0},
      {id: 2, stopName: 'cc', stopType: 1} ],
  }
  const routeData3 = {
    direction: 'left',
    route: [ 
      {id: 3, stopName: 'dd', stopType: 0},
      {id: 4, stopName: 'ee', stopType: 1} ],
  }
  it('test amount of Stops (Route)', () => {
    const { direction, route } = routeData
    const ROUTE = shallow(<Route 
      direction={direction} 
      route={route}
      StopComponentType={'Stop'} />)
    expect(ROUTE.find(Stop)).toHaveLength(2)
  })
  it('test position of Stops (Route) when the direction is right', () => {
    const { direction, route } = routeData
    const ROUTE = shallow(<Route direction={direction} route={route} />)
    expect(ROUTE.find(StopWithEng).get(0).props.x).toBe(100)
    expect(ROUTE.find(StopWithEng).get(1).props.x).toBe(714)
  })
  it('test position of Stops (Route) when the direction is left', () => {
    const { direction, route } = routeData2
    const ROUTE = shallow(<Route x={714} direction={direction} route={route} />)
    expect(ROUTE.find(StopWithEng).get(0).props.x).toBe(714)
    expect(ROUTE.find(StopWithEng).get(2).props.x).toBe(100)
  })

  it('test Yunlin prop of UpOrDown should be "Up"', () => {
    const Yunlin = shallow(<Route_Yunlin />)
    expect(Yunlin.find(Route).props().UpOrDown).toBe('Up')
  })
  it('test ChanHua prop of UpOrDown should be "Up"', () => {
    const ChanHua = shallow(<Route_ChanHua />)
    expect(ChanHua.find(Route).props().UpOrDown).toBe('Down')
  })
  it('test x of stops when the amount of last stops is not 0', () => {
    const { direction, route } = routeData3
    const ROUTE = shallow(<Route lastStopAmount={3} x={714} direction={direction} route={route} />)
    expect(ROUTE.find(StopWithEng).get(0).props.x).toBe(714)
    expect(ROUTE.find(StopWithEng).get(1).props.x).toBe(100)
    
  })
})


