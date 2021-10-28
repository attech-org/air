import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Layout = ({ children }) => {
  return (
    <>
      <header>
        <Link to='/'>SearchPage</Link>
        <Link to='/landing'>LandingPage</Link>
        <Link to='/favorites'>FavoritesPage</Link>

        {/* <a href='/search'>Search</a>
          <a href='/landing'>Landing</a>
          <a href='/favorites'>Favorites</a> */}
      </header>
      <StyledMain>{children}</StyledMain>
      <footer>footer</footer>
    </>
  )
}

export default Layout
