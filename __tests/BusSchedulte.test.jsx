/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react'
import { 
  removeDupliArr,
  sepTimeToHourMin,
  mergeTimeByHour,
  merge2Time_ByHour,
  SingleSchedule,
  BusSchedule
} from '../src/svg/BusSchedule'
import { Rect } from '../src/svg/SVGComponents'
import { genObjArr } from '../src/svg/svgFunctions'
import { shallow, render } from 'enzyme'

describe('test handle time array functions', () => {
  it('test function of removing same value', () => {
    const arr = ['0011', '0022', '0011', '0033']
    const removedArr = ['0011', '0022', '0033']
    expect(removeDupliArr(arr)).toEqual(removedArr)
  })
  it('test time should be seperate to hour and min by sepTimeToHourMin function', () => {
    const arr = [
      ['0011', '0022', '0011', '0033'],
      ['0011', '0022']
    ]
    const sepArr = [
      [['00', '11'], ['00', '22'], ['00', '11'], ['00', '33']],
      [['00','11'], ['00','22']]
    ]
    expect(sepTimeToHourMin(arr)).toEqual(sepArr)
  })
  it('it should merge minutes by per hours by mergeTimeByHour function. ', () => {
    const arr = [['00', '11'], ['00', '22'], ['00', '11'], ['00', '33'], ['11', '22']]
    
    const mergedArr = [
      ['00', '11', '22', '11', '33'], ['11', '22']
    ]
    expect(mergeTimeByHour(arr)).toEqual(mergedArr)
  })
  it('it should merge up to two time array to one time array by merge2Time_ByHour function', () => {
    const mergedArr1 = [
      ['00', '11', '22', '33'], ['11', '22']
    ]
    const mergedArr2 = [
      ['02', '11', '22', '44'], ['11', '33']
    ]
    const mergedByHourArr = [
      ['00', ['11', '22', '33'], ['-']],
      ['02', ['-'], ['11', '22', '44']],
      ['11', ['22'], ['33']],
    ]
    const mergedOnlyOneByHourArr = [
      ['00', ['11', '22', '33']],
      ['11', ['22']],
    ]
    expect(merge2Time_ByHour([mergedArr1, mergedArr2])).toEqual(mergedByHourArr)
    expect(merge2Time_ByHour([mergedArr1])).toEqual(mergedOnlyOneByHourArr)
  })
})
describe('test BusSchedule components', () => {
  // it('the Rect component should be only appear when the id is even', () => {
  //   const mergedOnlyOneByHourArr = genObjArr([
  //     ['00', ['11', '22', '33']],
  //     ['11', ['22']],
  //   ])
  //   const singleSchedule = shallow(<SingleSchedule objArr={mergedOnlyOneByHourArr} />)
  //   expect(singleSchedule.find(Rect)).toHaveLength(1)
  // })
})

