// Write your code here

import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangocount: 0, bananacount: 0}

  incrMango = () => {
    this.setState(prevState => ({mangocount: prevState.mangocount + 1}))
  }

  incrbanana = () => {
    this.setState(prevState => ({bananacount: prevState.bananacount + 1}))
  }

  render() {
    const {mangocount} = this.state
    const {bananacount} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>
            Bob ate <span className="count">{mangocount}</span> mangoes
            <span className="count"> {bananacount}</span> bananas
          </h1>
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="image"
              alt="Mangoes"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="image"
              alt="Bananas"
            />
          </div>
          <div>
            <button className="button" onClick={this.incrMango} type="submit">
              Eat Mango
            </button>
            <button className="button" onClick={this.incrbanana} type="submit">
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
