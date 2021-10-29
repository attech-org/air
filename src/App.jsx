import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import FavoritesPage from "./pages/Favorites"
import LandingPage from "./pages/Landing"
import SearchPage from "./pages/Search"
import SearchResultPage from "./pages/SearchResult"

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
        <Route path='/search-result'>
          <SearchResultPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
