import { slide } from "react-burger-menu"
import { Link } from "react-router-dom"
import styled, { css } from "styled-components"

import logo from "../assets/icons/logo.jpg"

const responsiveCSS = css`
  .bm-burger-button {
    display: none;
    @media (max-width: 1080px) {
      display: initial;
    }
  }
`
const Bg = styled.div`
  ${responsiveCSS}
  background-image: ${(props) => `url(${props.bgSrc})`};
  background-size: cover;
  background-repeat: no-repeat;
`

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #000000;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100vh - 100px);
`
const StyledMenu = styled(slide)``
const StyledLink = styled(Link)`
  text-decoration: none;
  margin-left: 9vh;
  font-size: 16px;
  color: white;
  font-weight: bold;
  &:hover {
    color: #d80505;
  }
`
const StyledLinkLogo = styled(Link)``
const StyledHeader = styled.header`
  height: 100px;
  padding: 0 80px 0 80px;
  display: flex;
  align-items: center;
  background-color: black;
  @media (max-width: 1080px) {
    padding-left: 36px;
  }
`
const StyledImg = styled.img`
  width: 140px;
  height: 60px;
`
const Nav = styled.nav`
  @media (max-width: 1080px) {
    display: none;
  }
`
var styles = {
  bmBurgerButton: {
    position: "absolute",
    width: "36px",
    height: "30px",
    right: "36px",
    top: "36px",
  },
  bmBurgerBars: {
    background: "#cacaca",
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    height: "100%",

    top: 0,
  },
  bmMenu: {
    background: "#000000",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
    height: "calc(100% - 0.8em * 2)",
    display: "flex",
    flexDirection: "column",
  },
  bmItem: {
    display: "inline-block",
    textDecoration: "none",
    color: "white",
    fontSize: "36px",
    lineHeight: "1.6em",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.664)",
    right: 0,
    top: 0,
    backdropFilter: "blur(4px)",
  },
}

const Layout = ({ children, bgSrc }) => {
  return (
    <Bg bgSrc={bgSrc}>
      <StyledHeader>
        <StyledLinkLogo to='/'>
          <StyledImg src={logo} alt='Logo' />
        </StyledLinkLogo>
        <Nav>
          <StyledLink to='/'>Search tickets</StyledLink>
          <StyledLink to='/blog'>Blog</StyledLink>

          <StyledLink to='/tours'>Tours</StyledLink>
        </Nav>
        <StyledMenu right styles={styles} width={"50%"}>
          <Link id='home' className='menu-item' to='/'>
            Search
          </Link>
          <Link id='about' className='menu-item' to='/blog'>
            Blog
          </Link>
          <Link id='contact' className='menu-item' to='/tours'>
            Tours
          </Link>
        </StyledMenu>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
    </Bg>
  )
}

export default Layout
