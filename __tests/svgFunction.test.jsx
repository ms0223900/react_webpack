/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { 
  calTextY,
  textAlignCenter,
  genObjArr, 
  splitBrackets 
} from '../src/svg/svgFunctions'

describe('test functions', () => {
  it('test calculate text y position function', () => {
    expect(calTextY(20, 24)).toBe(39.8)
  })
  it('test align test to center function', () => {
    expect(textAlignCenter(40, 20, 100)).toBe(80)
  })
  it('test generate obj to arr function', () => {
    const arr = ['a', 'b', 'c']
    const objArr = [
      { id: 0, data: 'a', },
      { id: 1, data: 'b', },
      { id: 2, data: 'c', }
    ]
    expect(genObjArr(arr)).toEqual(objArr)
  })
  it('string is should be split into array by brackets after splitBrackets function', () => {
    const strOrigin1 = 'aaa(bb)'
    const strOrigin2 = 'ccc[dddd]'
    const str3 = 'abcdABCD'
    const strFn1 = ['aaa', '(bb)']
    const strFn2 = ['ccc', '[dddd]']
    expect(splitBrackets(strOrigin1)).toEqual(strFn1)
    expect(splitBrackets(strOrigin2)).toEqual(strFn2)
    expect(splitBrackets(str3)).toEqual([str3])
  })
})
