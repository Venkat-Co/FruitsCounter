// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {count: 0, count2: 0}

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  onIncrease = () => {
    this.setState(prevState => ({count2: prevState.count2 + 1}))
  }

  render() {
    const {count, count2} = this.state
    return (
      <div className="main">
        <div className="container">
          <h1 className="heading">
            Bob ate <span className="count1">{count}</span> mangoes{' '}
            <span className="count1">{count2}</span> bananas
          </h1>
          <div className="card-container">
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="img"
                alt="mango"
              />
              <button
                className="button"
                onClick={this.onIncrement}
                type="submit"
              >
                Eat Mango
              </button>
            </div>
            <div className="card">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="img"
                alt="banana"
              />
              <button
                className="button"
                onClick={this.onIncrease}
                type="submit"
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
