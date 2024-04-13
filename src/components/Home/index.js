import {Component} from 'react'
import axios from 'axios'
import {withRouter} from 'react-router-dom'

import './index.css'

import TodoItem from '../TodoItem'

class Home extends Component {
  state = {dataReview: [], countPage: 1}

  componentDidMount() {
    this.getData()
  }

  getData = async () => {
    try {
      const url = 'https://admin.tomedes.com/api/v1/get-reviews?page=1'
      const response = await axios.get(url)
      const resultantData = response.data.data

      this.setState({dataReview: resultantData})
    } catch (error) {
      console.log(error)
    }
  }

  onClickNextPage = () => {
    const {history} = this.props
    history.push('/page= 2')
    this.setState(prev => ({countPage: prev.countPage + 1}))
  }

  render() {
    const {dataReview, countPage} = this.state
    console.log(countPage)
    return (
      <div className="main-container">
        <button onClick={this.onClickNextPage}>click me</button>
        <h1>What our customers says</h1>
        <ul className="unordered-list-items">
          {dataReview.map(eachData => (
            <TodoItem eachData={eachData} key={eachData.id} />
          ))}
        </ul>
      </div>
    )
  }
}

export default Home
