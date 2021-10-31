import { Link } from "react-router-dom"
import styled from "styled-components"

const Bg = styled.div`
  background-image: ${(props) => `url(${props.bgSrc})`};
  background-size: cover;
  background-repeat: no-repeat;
`

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

const Layout = ({ children, bgSrc }) => {
  return (
    <Bg bgSrc={bgSrc}>
      <header>
        <Link to='/'>SearchPage</Link>
        <Link to='/landing'>LandingPage</Link>
        <Link to='/favorites'>FavoritesPage</Link>
        <Link to='/blog'>Blog</Link>

        {/* <a href='/search'>Search</a>
          <a href='/landing'>Landing</a>
          <a href='/favorites'>Favorites</a> */}
      </header>
      <StyledMain>{children}</StyledMain>
      <footer>footer</footer>
    </Bg>
  )
}

export default Layout
