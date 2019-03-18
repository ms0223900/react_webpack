/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React from 'react'
import { 
  getBusProviderId,
  getBusProviderInfo,
 } from '../src/svg/app'
 import { shallow } from 'enzyme'

 describe('test data handling function', () => {
  const mockRouteJSON = [
    { number: '1111', },
    { number: '2222', } 
  ]
  const mockRoutesInfo = [ 
    { NameZh: '2222', ProviderId: '1234', }, 
    { NameZh: '1111', ProviderId: '5678', } 
  ]
  const mockProviderInfo = [
    { Id: '1234', NameZh: 'ABCD', telephone: '04-1234' },
    { Id: '5678', NameZh: 'EFGH', telephone: '04-5678' },
    { Id: '9012', NameZh: 'IJKL', telephone: '04-0022' },
  ]
  const mockProviderId = [['5678'], ['1234']]
  const mockRouteJSON_withProviderInfo = [
    { number: '1111', companyService: ['EFGH: 04-5678'], },
    { number: '2222', companyService: ['ABCD: 04-1234'], },
  ]
  it('get bus provider id from the fetch route information and it should return provider id array', () => {
    expect(getBusProviderId(mockRouteJSON, mockRoutesInfo)).toEqual(mockProviderId)
  })
  it('get the bus provider information from fetch provider info and it should return the final routeJSON array', () => {
    expect(getBusProviderInfo(mockRouteJSON, mockProviderId, mockProviderInfo)).toEqual(mockRouteJSON_withProviderInfo)
  })
 })
 