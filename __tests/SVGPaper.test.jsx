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
 import { shallow, render } from 'enzyme'

describe('test load location svg function', () => {
  const route1 = Array(9)
  const route2 = Array(20) 
  const mockRoute = [
    { location: 'ChiaYi', routeData: Array(5) },
    { location: 'Yunlin', routeData: Array(20) }
  ]
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
  it('it should filter the location of data', () => {
    const locationRoute1 = getLocationRouteData('ChiaYi', mockRoute, false)
    const locationRoute2 = getLocationRouteData('Yunlin', mockRoute, false)
    expect(locationRoute1).toHaveLength(5)
    expect(locationRoute2).toHaveLength(20)
  })
  it('test it should be return correct SVGPaper components by different location argument', () => {
    const SVGTainan = loadLocationSVGPaper('Tainan', [])
    expect(SVGTainan).toEqual('')
    const SVGChiaYi = loadLocationSVGPaper('ChiaYi', [])
    expect(SVGChiaYi).toEqual(<SVGPaper_ChiaYi routes={[]} />)
    const SVGYunlin = loadLocationSVGPaper('Yunlin', [])
    expect(SVGYunlin).toEqual(<SVGPaper_Yunlin routes={[]} />)
    const SVGChanHua = loadLocationSVGPaper('ChanHua', [])
    expect(SVGChanHua).toEqual(<SVGPaper_ChanHua routes={[]} />)
  })
  it('test SVGPaper component', () => {
    const svgPaper = shallow(
      <SVGPaper 
        location={'ChiaYi'}
        routes={[1, 2, 3, 4]}
        isPreview={true}
        loadCompleteCount={AllSVGPaper.length}
      />
    )
    expect(svgPaper.find(SVGPaper_ChiaYi)).toHaveLength(4)
    const svgPaper2 = shallow(<SVGPaper />)
    expect(svgPaper2.find(SVGPaper_ChiaYi)).toHaveLength(0)
    expect(svgPaper2.text()).toBe('please wait')
  })
})

 
 