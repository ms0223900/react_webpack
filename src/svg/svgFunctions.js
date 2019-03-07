export const calTextY = (y, fontSize) => {
  const fontSpacing = (1.175 - 1) * fontSize
  return y - fontSpacing + fontSize
}

export const textAlignCenter = (textFrmaeX, fontWidth, textFrameWidth) => {
  return textFrmaeX + (textFrameWidth - fontWidth) / 2
}

export const genObjArr = (arr) => {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr[i] = {
      id: i,
      data: arr[i]
    }
  }
  return newArr
}

export const splitBrackets = (str) => {
  if(str.indexOf('(') !== -1) {
    return str.split(/[(]/).map(t => t = t.indexOf(')') !== -1 ? '(' + t : t  )
  } else if(str.indexOf('[') !== -1) {
    return str.split(/\[/).map(t => t = t.indexOf(']') !== -1 ? '[' + t : t  )
  } else {
    return [str]
  }
}
