import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import '../styles/style.scss'

// import Header from './components/Header'
import Timer from './components/Timer'
import Game from './components/Game'



class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
      color: '',
      count: 0,
      isStart: false,
      snakePos: [41, 40],
      posNext: 42,
      posPrev: 40,
      direction: 1, //1: right
      food: 50,
    }
    this._onChangeColor = this._onChangeColor.bind(this)
  }

  checkCollide = () => {
    const { posNext, snakePos, direction } = this.state;
    const next = posNext + direction;
    if(next % 36 === 0 | next < 0 | next > 36 * 24 | snakePos.indexOf(next) >= 0) {
      this._onhandleClickTimer();
      return true;
    }
  }
  updateFrame = () => {
    const { posNext, food, snakePos } = this.state;
    if(!this.checkCollide()) {
      let newSnake = [posNext, ...snakePos], newFood = food;
      if(posNext === food) {
        while(newSnake.indexOf(newFood = ~~(Math.random() * 36 * 24)) >= 0);
      } else {
        newSnake = newSnake.slice(0, -1);
      }

      this.setState(({ count, snakePos, direction }) => ({
        count: count + 0.1,
        snakePos: newSnake,
        posNext: posNext + direction, 
        posPrev: snakePos[snakePos.length - 1],
        food: newFood,
      }));
    }
    
    
    // console.log(snakePos);
    // console.log(posNext);
  }
  _onhandleKeydown = (e) => {
    console.log(e.keyCode);
    const { snakePos, direction } = this.state;
    let n;
    const newDir = snakePos[0] - snakePos[1] === 
    ( n = [-1, -36, 1, 36][e.keyCode - 37] || direction) ? direction : n;
    this.setState({
      direction: newDir, 
    })
  }
  _onChangeColor(e) {
    console.log(e.target.name)
    this.setState({
      color: e.target.name,
    })
    this.timer
  }
  _onhandleClickTimer = () => {
    const { isStart } = this.state;
    this.state.isStart ? 
      (clearInterval(this.timer)) :
      (this.timer = setInterval(this.updateFrame, 100))
    this.setState({
      isStart: isStart ? false : true,
    })
  }
  _onhandleReset = () => {
    if(!this.state.isStart) {
      this.setState({
        count: 0,
        snakePos: [41, 40],
        posNext: 42,
        posPrev: 40,
        direction: 1,
      })
    }
  }
  _onGetCtxPos = (e) => {
    const mouse = {
      x: e.pageX,
      y: e.pageY,
    }
    const ctxInfo = ReactDOM.findDOMNode(this.refs.canvas).getBoundingClientRect();
    const centerPoint = {
      x: ctxInfo.x + ctxInfo.width / 2,
      y: ctxInfo.y + ctxInfo.height / 2,
    }
    
    let newDir;
    if(mouse.x > centerPoint.x && Math.abs(mouse.y - centerPoint.y) < ctxInfo.height / 3 ) {
      newDir = 1
    } else if(mouse.x < centerPoint.x && Math.abs(mouse.y - centerPoint.y) < ctxInfo.height / 3 ) {
      newDir = -1;
    } else if(mouse.y > centerPoint.y && Math.abs(mouse.y - centerPoint.y) >= ctxInfo.height / 3 ) {
      newDir = 36;
    } else {
      newDir = -36;
    }
    if(this.state.direction !== newDir) {
      this.setState({
        direction: newDir,
      })
    }
    // console.log(e.pageX, e.pageY);
    // console.log(centerPoint);
  }


  componentDidMount = () => {
    document.addEventListener('keydown', this._onhandleKeydown)
  }
	render() {
    const {  count, isStart, posPrev, posNext, food } = this.state
    const min = ~~(count / 60);
    const sec = ~~(count % 60);
		return (
			<Fragment>
        <Timer
          count={
            (min < 10 ? '0' + min : min) 
            + ':' 
            + (sec < 10 ? '0' + sec : sec)}
          isStart={isStart}
          handleClickTimer={this._onhandleClickTimer} 
          handleReset={this._onhandleReset}
        />
        <Game
          ref='canvas'
          posPrev={posPrev}
          posNext={posNext} 
          count={count}
          food={food}
          getCtxPos={this._onGetCtxPos}
        />
			</Fragment>
		)
	}
}

export default App

console.log('app12221.jsx')