// Write your code here

import './index.css'

const GetRecentMatch = props => {
  const {recentMatch} = props

  const updatedRecentMatchData = {
    umpires: recentMatch.umpires,
    result: recentMatch.result,
    manOfTheMatch: recentMatch.man_of_the_match,
    id: recentMatch.id,
    date: recentMatch.date,
    venue: recentMatch.venue,
    competingTeam: recentMatch.competing_team,
    competingTeamLogo: recentMatch.competing_team_logo,
    firstInnings: recentMatch.first_innings,
    secondInnings: recentMatch.second_innings,
    matchStatus: recentMatch.match_status,
  }
  const {
    result,
    competingTeam,
    competingTeamLogo,
    matchStatus,
  } = updatedRecentMatchData

  const resultClass = matchStatus === 'Won' ? 'green' : 'red'

  return (
    <li className="recentMatchCard">
      <img
        className="image4"
        key={competingTeam}
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
      />
      <p className="competingTeam">{competingTeam}</p>
      <p className="p6">{result}</p>
      <p className={`p7 ${resultClass}`}>{matchStatus}</p>
    </li>
  )
}

export default GetRecentMatch
