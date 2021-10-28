import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import FavoritesPage from "./pages/Favorites"
import LandingPage from "./pages/Landing"
import SearchPage from "./pages/Search"

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path='/' exact>
          <SearchPage />
        </Route>
        <Route path='/landing'>
          <LandingPage />
        </Route>
        <Route path='/favorites'>
          <FavoritesPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
