import { Link } from "react-router-dom"
import styled from "styled-components"

import logo from "../assets/icons/logo.jpg"

const Bg = styled.div`
  background-image: ${(props) => `url(${props.bgSrc})`};
  background-size: cover;
  background-repeat: no-repeat;
`

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 20, 1);
  flex-direction: column;
  justify-content: space-between;
`
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
`
const StyledImg = styled.img`
  width: 140px;
  height: 60px;
`
const Layout = ({ children, bgSrc }) => {
  return (
    <Bg bgSrc={bgSrc}>
      <StyledHeader>
        <StyledLinkLogo to='/'>
          <StyledImg src={logo} alt='Logo' />
        </StyledLinkLogo>
        <StyledLink to='/'>Search tickets</StyledLink>
        <StyledLink to='/blog'>Blog</StyledLink>
        <StyledLink to='/tours/0'>Tours</StyledLink>
      </StyledHeader>
      <StyledMain>{children}</StyledMain>
      <footer>footer</footer>
    </Bg>
  )
}

export default Layout
