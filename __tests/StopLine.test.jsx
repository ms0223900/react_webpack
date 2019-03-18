/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React from 'react'
import StopLine, { 
  sepLines,
  MappedRoutesDefault,
  MappedRoutesChanHua,
  MappedRoutesYunlin,
  setPosOfLinesY,
  RouteRoundedCorner,
  getRouteByLocation,
  genarateRoutes,
  genarateRoutes_Yunlin,
  genarateRoutes_ChanHua,
} from '../src/svg/StopLine'
import { 
  Route,
  Route_ChanHua,
  Route_Yunlin
} from '../src/svg/SingleStopLine'
import { shallow } from 'enzyme'

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

describe('test HOC and amount of routes, amount of stops', () => {
  //the rule of line's amount is based on the previous test
  const routeData1 = Array(9)
  const routeData2 = Array(29)
  const routeData3 = Array(77)
  const routeData4 = Array(103)
  it('test deafult Route', () => {
    const DefaultRoute = shallow(<MappedRoutesDefault routeData={routeData1} />)
    expect(DefaultRoute.find(Route)).toHaveLength(1)
    expect(DefaultRoute.find(RouteRoundedCorner)).toHaveLength(0)
  })
  it('test deafult Route', () => {
    const DefaultRoute = shallow(<MappedRoutesDefault routeData={routeData3} />)
    expect(DefaultRoute.find(Route)).toHaveLength(3)
    expect(DefaultRoute.find(RouteRoundedCorner)).toHaveLength(2)
  })

  it('test ChanHua Route', () => {
    const ChanHuaRoute = shallow(<MappedRoutesChanHua routeData={routeData1} />) 
    expect(ChanHuaRoute.find(Route_ChanHua)).toHaveLength(1)
    expect(ChanHuaRoute.find(RouteRoundedCorner)).toHaveLength(0)
  })
  it('test Yunlin Route', () => {
    const YunlinRoute = shallow(<MappedRoutesYunlin routeData={routeData1} />) 
    expect(YunlinRoute.find(Route_Yunlin)).toHaveLength(1)
    expect(YunlinRoute.find(RouteRoundedCorner)).toHaveLength(0)
  })
  it('test amount of single route', () => {
    const YunlinRoute = shallow(<MappedRoutesYunlin routeData={routeData2} />)
    expect(YunlinRoute.find(Route_Yunlin)).toHaveLength(2)
    expect(YunlinRoute.find(RouteRoundedCorner)).toHaveLength(1)
  })
  it('test amount of single route', () => {
    const YunlinRoute = shallow(<MappedRoutesYunlin routeData={routeData3} />)
    expect(YunlinRoute.find(Route_Yunlin)).toHaveLength(3)
    expect(YunlinRoute.find(RouteRoundedCorner)).toHaveLength(2)
  })
  it('test amount of single route', () => {
    const YunlinRoute = shallow(<MappedRoutesYunlin routeData={routeData4} />)
    expect(YunlinRoute.find(Route_Yunlin)).toHaveLength(4)
    expect(YunlinRoute.find(RouteRoundedCorner)).toHaveLength(3)
  })
  it('Amount of last routes stops should be less than or equal to other routes.Expect the last routes , other stops amount of routes should be the same.', () => {
    const DefaultRoute = shallow(<MappedRoutesDefault routeData={routeData3} />)
    const route1Stops = DefaultRoute.find(Route).get(0).props.route.length
    const route2Stops = DefaultRoute.find(Route).get(1).props.route.length
    const route3Stops = DefaultRoute.find(Route).get(2).props.route.length
    expect(route1Stops > 0).toBeTruthy()
    expect(route1Stops >= route3Stops && route2Stops >= route3Stops).toBeTruthy()
    expect(route1Stops === route2Stops).toBeTruthy()
  })
})

describe('test position of lines when it is up or down', () => {
  it('it should be 300 when line is only one and it is Up', () => {
    expect(setPosOfLinesY(1, 100, 200, 1, 'Up')).toBe(100 + 200 / 1 * 1)
  })
  it('it should be 200 when lines is 4, it is second and it is Up', () => {
    expect(setPosOfLinesY(4, 100, 200, 2, 'Up')).toBe(100 + 200 / 4 * 2)
  })
  it('it should be 200 when line is only one and it is Down', () => {
    expect(setPosOfLinesY(1, 200, 200, 1, 'Down')).toBe(200 + 200 / 2 - 100)
  })
  it('it should be ... when line is Down', () => {
    expect(setPosOfLinesY(2, 200, 200, 2, 'Down')).toBe(200 + 200 / 2 * (2 - 1))
  })
})

describe('test getRouteByLocation function', () => {
  it('', () => {
    const ChiaYiRoute = getRouteByLocation('ChiaYi', [])
    expect(ChiaYiRoute).toEqual(genarateRoutes([]))
  })
  it('', () => {
    const YunlinRoute = getRouteByLocation('Yunlin', [])
    expect(YunlinRoute).toEqual(genarateRoutes_Yunlin([]))
  })
  it('', () => {
    const ChanHuaRoute = getRouteByLocation('ChanHua', [])
    expect(ChanHuaRoute).toEqual(genarateRoutes_ChanHua([]))
  })
  it('test StopLine component', () => {
    const FN = jest.fn()
    const ChiaYiStopLine = shallow(<StopLine routeData={[]} location={'ChiaYi'} generateRouteFn={FN} />)
    expect(FN).toHaveBeenCalled()
  })
  
})




