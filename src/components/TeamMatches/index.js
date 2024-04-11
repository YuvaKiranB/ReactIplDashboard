// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'
import GetLatestMatch from '../LatestMatch'
import GetRecentMatch from '../MatchCard'

class GetTeamMatches extends Component {
  state = {teamData: {}, isLoading: true, teamId: ''}

  componentDidMount() {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()

    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({isLoading: false, teamData: updatedData, teamId: id})
  }

  render() {
    const {isLoading, teamData, teamId} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamData
    return (
      <div className={`latestMatchesContainer ${teamId}`}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Oval" color="#ffffff" height={50} width={50} />
          </div>
        ) : (
          <div className="teamContainer">
            <img className="image2" src={teamBannerUrl} alt="team banner" />
            <div className="subMain">
              <div className="latestMatchContainer1">
                <h2 className="h2">Latest Matches</h2>
                <GetLatestMatch
                  latestMatchData={latestMatchDetails}
                  key={latestMatchDetails.id}
                />
              </div>
              <ul className="recentMatchesContainer">
                {recentMatches.map(eachItem => (
                  <GetRecentMatch recentMatch={eachItem} key={eachItem.id} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default GetTeamMatches
