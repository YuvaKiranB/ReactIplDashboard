// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import GetTeamCard from '../TeamCard'

class Home extends Component {
  state = {isLoading: true, cardsList: []}

  componentDidMount() {
    this.getCardsData()
  }

  getCardsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const {teams} = data

    const updatedData = teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))

    this.setState({isLoading: false, cardsList: updatedData})
  }

  render() {
    const {isLoading, cardsList} = this.state
    return (
      <div className="homeContainer">
        <div className="logoContainer">
          <img
            className="logoImage"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="h1">IPL Dashboard</h1>
        </div>
        <div className="cardsContainer">
          {isLoading ? (
            <div data-testid="loader" className="loader">
              <Loader type="Oval" color="#ffffff" height={50} width={50} />{' '}
            </div>
          ) : (
            <ul className="ul">
              {cardsList.map(eachItem => (
                <GetTeamCard cardDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default Home
