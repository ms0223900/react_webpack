
/* eslint-disable no-undef */
const nock = require('nock')

import React from 'react'
import App, { 
  SvgUI,
  getBusProviderId,
  getBusProviderInfo,
  LocationButton,
  locationButtonArr,
  routeLocations,
  fetchRouteJSON,
 } from '../src/svg/app'
 import { shallow } from 'enzyme'

describe('test data handling function', () => {
  const mockRouteJSON = [
    { number: '1111', },
    { number: '2222', },
  ]
  const mockRouteJSON2 = [
    { number: '1111', },
    { number: '2222', },
    { number: '3333', } 
  ]
  const mockRoutesInfo = [ 
    { NameZh: '2222', ProviderId: '1234', }, 
    { NameZh: '1111', ProviderId: '5678', }, 
    { NameZh: '3333', ProviderId: '9012', }, 
  ]
  const mockProviderInfo = [
    { Id: '1234', NameZh: 'ABCD', telephone: '04-1234' },
    { Id: '5678', NameZh: 'EFGH', telephone: '04-5678' },
    { Id: '9012', NameZh: 'IJKL(鼠?)', telephone: '04-0022' },
  ]
  const mockProviderId = [['5678'], ['1234']]
  const mockRouteJSON_withProviderInfo = [
    { number: '1111', companyService: ['EFGH: 04-5678'], },
    { number: '2222', companyService: ['ABCD: 04-1234'], },
  ]
  const mockRouteJSON_withProviderInfo2 = [
    { number: '1111', companyService: ['EFGH: 04-5678'], },
    { number: '2222', companyService: ['ABCD: 04-1234'], },
    { number: '3333', companyService: ['IJKL(公總): 04-0022'], },
  ]
  it('get bus provider id from the fetch route information and it should return provider id array', () => {
    expect(getBusProviderId(mockRouteJSON, mockRoutesInfo)).toEqual(mockProviderId)
  })
  it('get the bus provider information from fetch provider info and it should return the final routeJSON array', () => {
    expect(getBusProviderInfo(mockRouteJSON, mockProviderId, mockProviderInfo)).toEqual(mockRouteJSON_withProviderInfo)
  })
  it('get the bus provider information from fetch provider info and it should fix the chinese problem return the final routeJSON array', () => {
    const providerId2 = getBusProviderId(mockRouteJSON2, mockRoutesInfo)
    expect(getBusProviderInfo(mockRouteJSON2, providerId2, mockProviderInfo)).toEqual(mockRouteJSON_withProviderInfo2)
  })
  
})
describe('test app buttons', () => {
  it('test changing location button component, and the click action', () => {
    const fn = jest.fn()
    const locationButton = shallow(<LocationButton onClickFn={fn} />)
    locationButton.simulate('click')
    expect(fn).toBeCalled()
  })
  it('test changing location button component, its className should be differ by id property', () => {
    const locationButton1 = shallow(<LocationButton id='ChiaYi' location={'ChiaYi'} />)
    const locationButton2 = shallow(<LocationButton id='ChiaYi' location={'Yunlin'} />)
    expect(locationButton1.props().className).toBe('location-button active')
    expect(locationButton2.props().className).toBe('location-button')
  })
  it('test buttons for changing view mode in svgUI', () => {
    const fn = jest.fn()
    const svgUI = shallow(<SvgUI location={'ChiaYi'} changeViewModeFn={fn} />)
    svgUI.find('#preview').simulate('click')
    expect(fn).toBeCalled()
    svgUI.find('#all').simulate('click')
    expect(fn).toBeCalled()
  })
  it('test buttons for changing locations in svgUI', () => {
    const fn = jest.fn()
    const svgUI = shallow(<SvgUI location={'ChiaYi'} changeLocationFn={fn} />)
    for (let i = 0; i < locationButtonArr.length; i++) {
      const locationButton = svgUI.find('#' + locationButtonArr[i].id)
      expect(locationButton).toHaveLength(1)
    }
  })
})
describe('test component properties in the svgUI component', () => {
  it('test loading area style, it should be none when the loadComplete is fulfilled', () => {
    const svgUI = shallow(<SvgUI loadComplete={routeLocations.length} />)
    expect(svgUI.find('#loadingArea').props().style).toEqual({
      'display': 'none',
    })
    const svgUI2 = shallow(<SvgUI loadComplete={1} />)
    expect(svgUI2.find('#loadingArea').props().style).toEqual({
      'display': 'block',
    })
  })
  it('test preview and show all buttons, it should be differ by isPreview property(default value of isPreview is true', () => {
    const svgUI = shallow(<SvgUI />)
    expect(svgUI.find('#all').props().className).toBe('location-button')
    expect(svgUI.find('#preview').props().className).toBe('location-button active')

    svgUI.setProps({ isPreview: false })
    expect(svgUI.find('#all').props().className).toBe('location-button active')
    expect(svgUI.find('#preview').props().className).toBe('location-button')

    svgUI.setProps({ isPreview: true })
    expect(svgUI.find('#all').props().className).toBe('location-button')
    expect(svgUI.find('#preview').props().className).toBe('location-button active')
  })
})

describe('test functions of app', () => {
  
  it('when the route of state is changed, it should be add the loadComplete', () => {
    const route1 = Array(1)
    const route2 = Array(2)
    const app = shallow(<App />)

    app.instance().state.routes = route1
    expect(app.instance().state.loadComplete).toBe(0)
    app.setState({ routes: route2 })
    expect(app.instance().state.loadComplete).toBe(1)
  })
  it('test change view mode function', () => {
    const mockEventPreview = { target: { id: 'preview', } }
    const mockEventAll = { target: { id: 'all', } }
    const app = shallow(<App />)

    app.instance().changeViewMode(mockEventPreview)
    expect(app.instance().state.isPreview).toBeTruthy()
    app.instance().changeViewMode(mockEventAll)
    expect(app.instance().state.isPreview).toBeFalsy()
  })
  it('test change location function', () => {
    const mockEventLocation = { target: { id: 'ChiaYi', } }
    const mockEventLocation2 = { target: { id: 'Yunlin', } }
    const app = shallow(<App />)
    app.instance().changeLocation(mockEventLocation)
    expect(app.instance().state.location).toBe('ChiaYi')
    app.instance().changeLocation(mockEventLocation2)
    expect(app.instance().state.location).toBe('Yunlin')
  })
})
describe('test fetch', () => {
  it('test fetch route json file', () => {
    nock('allRoutes_ChiaYi.json')
      .get('')
      .reply(200, {
        result: [{ number: '7202' }]
      })
    return fetchRouteJSON('ChiaYi')
        .then(res => res.result[0].number)
        .then(res => expect(res).toEqual('7202'))
  })
})




 
 