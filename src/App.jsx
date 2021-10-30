import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import FavoritesPage from "./pages/Favorites"
import LandingPage from "./pages/Landing"
import OrderPaymentPage from "./pages/OrderPayment"
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
        <Route path='/orderPayment'>
          <OrderPaymentPage />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
