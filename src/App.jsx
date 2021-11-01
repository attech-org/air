import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import FavoritesPage from "./pages/Favorites"
import LandingPage from "./pages/Landing"
import PostPage from "./pages/Post"
import PostsPage from "./pages/Posts"
import SearchPage from "./pages/Search"

import "./reset.css"

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
        <Route path='/blog/:id' render={PostPage} />
        <Route path='/blog'>
          <PostsPage />
        </Route>
        <Route path='*'>
          <div>THIS PAGE NOT EXIST</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
