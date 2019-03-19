/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React from 'react'
 import { 
  AllSVGPaper,
  loadLocationSVGPaper,
  getLocationRouteData,
  SVGPaper,
  SVGPaper_ChiaYi, 
  SVGPaper_Yunlin, 
  SVGPaper_ChanHua } from '../src/svg/SVGPaper'
 import { shallow } from 'enzyme'

describe('test load location svg function', () => {
  const route1 = Array(9)
  const route2 = Array(20) 
  it('when it is preview, it should be only 10 or less components', () => {
    const locationRoute1 = getLocationRouteData('ChiaYi', route1, true)
    const locationRoute2 = getLocationRouteData('ChiaYi', route2, true)
    expect(locationRoute1).toHaveLength(9)
    expect(locationRoute2).toHaveLength(10)
  })
  it('when it is "not" preview, it should be show all components', () => {
    const locationRoute1 = getLocationRouteData('ChiaYi', route1, false)
    const locationRoute2 = getLocationRouteData('ChiaYi', route2, false)
    expect(locationRoute1).toHaveLength(9)
    expect(locationRoute2).toHaveLength(20)
  })
  it('test it should be return correct SVGPaper components by different location argument', () => {
    const SVGChiaYi = loadLocationSVGPaper('ChiaYi', [])
    expect(SVGChiaYi).toEqual(<SVGPaper_ChiaYi routes={[]} />)
    const SVGYunlin = loadLocationSVGPaper('Yunlin', [])
    expect(SVGYunlin).toEqual(<SVGPaper_Yunlin routes={[]} />)
    const SVGChanHua = loadLocationSVGPaper('ChanHua', [])
    expect(SVGChanHua).toEqual(<SVGPaper_ChanHua routes={[]} />)
  })
})

 
 