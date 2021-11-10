import { HashRouter as Router, Switch, Route } from "react-router-dom"

import FavoritesPage from "./pages/Favorites"
import LandingPage from "./pages/Landing"
import OrderPaymentPage from "./pages/OrderPayment"
import PostPage from "./pages/Post"
import PostsPage from "./pages/Posts"
import SearchPage from "./pages/Search"
import SearchResultPage from "./pages/SearchResult"
// eslint-disable-next-line no-unused-vars
import TourPageSingle from "./pages/TourPageSingle"
import ToursPage from "./pages/ToursPage"

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
        <Route path='/search-result'>
          <SearchResultPage />
        </Route>
        <Route path='/orderPayment'>
          <OrderPaymentPage />
        </Route>
        <Route path='/blog/:id' render={PostPage} />
        <Route path='/blog'>
          <PostsPage />
        </Route>
        {/* <Route path='/tours/:id' render={({ match }) => <TourPageSingle tourId={match.params.id} />} /> */}
        <Route path='/tours'>
          <ToursPage />
        </Route>
        <Route path='*'>
          <div>THIS PAGE NOT EXIST</div>
        </Route>
      </Switch>
    </Router>
  )
}

export default App
