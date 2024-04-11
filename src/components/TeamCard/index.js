// Write your code here
import './index.css'
import {Link} from 'react-router-dom'

const GetTeamCard = props => {
  const {cardDetails} = props
  const {name, id, teamImageUrl} = cardDetails

  return (
    <li className="card1">
      <Link className="link" to={`/team-matches/${id}`}>
        <img className="image1" src={teamImageUrl} alt={name} />
        <p className="p1">{name}</p>
      </Link>
    </li>
  )
}

export default GetTeamCard
