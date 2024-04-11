// Write your code here
import './index.css'

const GetLatestMatch = props => {
  const {latestMatchData} = props
  const updatedLatestMatchData = {
    umpires: latestMatchData.umpires,
    result: latestMatchData.result,
    manOfTheMatch: latestMatchData.man_of_the_match,
    id: latestMatchData.id,
    date: latestMatchData.date,
    venue: latestMatchData.venue,
    competingTeam: latestMatchData.competing_team,
    competingTeamLogo: latestMatchData.competing_team_logo,
    firstInnings: latestMatchData.first_innings,
    secondInnings: latestMatchData.second_innings,
    matchStatus: latestMatchData.match_status,
  }
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = updatedLatestMatchData
  return (
    <div className="latestMatchCard">
      <div className="latestMatchPart1">
        <div className="latestMatchPart1Details">
          <p className="competingTeamNameAndDate">{competingTeam}</p>
          <p className="competingTeamNameAndDate">{date}</p>
          <p className="p2">{venue}</p>
          <p className="p3">{result}</p>
        </div>
        <img
          className="image3"
          key={competingTeam}
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
        />
      </div>
      <hr className="hr" />

      <div className="latestMatchPart2">
        <p className="p4">First Innings</p>
        <p className="p5">{firstInnings}</p>
        <p className="p4">Second Innings</p>
        <p className="p5">{secondInnings}</p>
        <p className="p4">Man Of The Match</p>
        <p className="p5">{manOfTheMatch}</p>
        <p className="p4">Umpires</p>
        <p className="p5">{umpires}</p>
      </div>
    </div>
  )
}

export default GetLatestMatch
