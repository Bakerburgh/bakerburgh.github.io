import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { LocationToReduxTracker } from './host/LocationToReduxTracker'
import HomeApp from './apps/Home/HomeApp'
import DominoCounter from './apps/DominoCounter/DominoCounter'
import HostWrapper from './host/HostWrapper'

function App() {
  return (
    <Router>
      <LocationToReduxTracker/>
      <Switch>
        <Route exact path="/">
          <HomeApp/>
        </Route>
        <Route exact path="/dom">
          <HostWrapper>
            <DominoCounter/>
          </HostWrapper>
        </Route>
        <Route path="*">
          <p>Page not found. :(</p>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
