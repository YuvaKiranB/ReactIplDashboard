import {Route, Switch} from 'react-router-dom'

import Home from './components/Home'

import GetTeamMatches from './components/TeamMatches'

import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="main">
    <div className="content">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/team-matches/:id" component={GetTeamMatches} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </div>
)

export default App
