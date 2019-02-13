import React, { Fragment } from 'react'
// import ReactDOM from 'react-dom'
import '../styles/style.scss'

import List from './components/List'
import Header from './components/Header'

function AA() {
	return (
		<h2>
    this is a AA11sasdask!
		</h2>)
}

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
      color: '',
    }
    this._onChangeColor = this._onChangeColor.bind(this)
  }
  
  _onChangeColor(e) {
    console.log(e.target.name)
    this.setState({
      color: e.target.name,
    })
  }
	render() {
    const { color } = this.state
		return (
			<Fragment>
        <Header color={color}/>
				<h1>Hi App</h1>
				<AA />
				<List />
        <button 
          name={'default'}
          className={'button2'} 
          onClick={this._onChangeColor} 
        >
          button2
				</button>
        <button 
          name={'light'}
          className={'button3'}
          onClick={this._onChangeColor} 
        >
          button3
				</button>
			</Fragment>
		)
	}
}

export default App

console.log('app12221.jsx')