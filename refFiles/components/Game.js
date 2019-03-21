import React from 'react'


export default class Game extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  componentDidMount = () => {
    this._updateCanvas();
  }
  componentDidUpdate = () => {
    this._updateCanvas();
  }

  _updateCanvas() {
    const ctx = this.refs.canvas.getContext('2d');
    const { posPrev, posNext, count, food, } = this.props;
    
    if(count === 0) {
      ctx.clearRect(0, 0, 720, 480);
    }
    draw({ ctx, pos: posNext, color: 'red'});
    draw({ ctx, pos: posPrev, color: '#ddd222'});
    if(food !== posNext) {
      draw({ ctx, pos: food, color: 'blue'});
    }
  }
  render() {
    
    return (
      <canvas 
        width={720}
        height={480}
        ref='canvas'
        id='canvas'
        onClick={this.props.getCtxPos}
      >
      </canvas>
    );
  }
}

function draw(props) {
  const { ctx, pos, color } = props;
  ctx.fillStyle = color;
  ctx.fillRect( pos % 36 * 20 + 1, ~~(pos / 36) * 20 + 1, 18, 18);
  // console.log(pos);
}