/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import { 
  getStopType,
  getBetweenStopDistance,
  Route,
  RouteWithEngStops,
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

  it('test amount of Stops (Route)', () => {
    const { direction, route } = routeData
    const ROUTE = shallow(<Route direction={direction} route={route} />)
    expect(ROUTE.find(Stop)).toHaveLength(2)
  })
  it('test amount of Stops (RouteWithEngStops)', () => {
    const { direction, route } = routeData
    const ROUTE = shallow(<RouteWithEngStops direction={direction} route={route} />)
    expect(ROUTE.find(StopWithEng)).toHaveLength(2)
  })
  it('test position of Stops (RouteWithEngStops)', () => {
    const { direction, route } = routeData
    const ROUTE = shallow(<RouteWithEngStops direction={direction} route={route} />)
    expect(ROUTE.find(StopWithEng).get(0).props.x).toBe(100)
    expect(ROUTE.find(StopWithEng).get(1).props.x).toBe(714)
  })

})


