import styled from "styled-components"

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
`

const Layout = ({ children }) => {
  return (
    <>
      <header>header</header>
      <StyledMain>{children}</StyledMain>
      <footer>footer</footer>
    </>
  )
}

export default Layout
