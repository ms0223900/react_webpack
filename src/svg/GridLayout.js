import React from 'react'

export const GridLayout = (props) => {
  const { w='400', h='400' } = props
  const gridCountW = w / 20, gridCountH = h / 20;
  let arr = [];
  for (let i = 0; i < gridCountW * gridCountH; i++) {
    arr = [i, ...arr];
  }
  
  return (
    <g>
      <Text x={10} y={h} text={`${w} X ${h}  1 grid = 20px`} className={'grid-text'}/>
      {arr.map(arr => (
        <Rect 
          width={20} height={20} className={'grid'}
          x={ arr % gridCountW * 20 - 0.5 } 
          y={ ~~(arr / gridCountW) * 20 } />
      ))}
    </g>
  )
}

const Rect = (props) => {
  const { x='200', y='200', width='100', height='100', className='svg-rect' } = props
  return (
    <rect x={x} y={y} width={width} height={height} className={className}/>
  )
}

const Text = (props) => {
  const { x='200', y='300', text='A text', className='svg-text' } = props
  return (
    <text x={x} y={y} className={className}>
      {text}
    </text>
  )
}