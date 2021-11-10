import { Link } from "react-router-dom"
import styled from "styled-components"

const TitleH1 = styled.h1`
  color: white;
  font-size: 40px;
  margin-bottom: 46px;
`
const LocationP = styled.p`
  color: white;
  margin-bottom: 10px;
  font-size: 18px;
`
const CountryP = styled(LocationP)``

const MainSection = styled.section`
  background-image: ${(props) => `url(${props.bgSrc})`};
  width: 100%;
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
`
const Background = styled.div`
  width: 90%;
  background-color: #00000050;
  box-shadow: 0px -5px 16px black;
`
const Content = styled.section`
  display: flex;
  flex-direction: column;

  padding: 100px 80px 143px 80px;
`
const BtnBox = styled.div`
  display: flex;
`
const StyledLink = styled(Link)`
  text-decoration: none;
`
const BackBtn = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0px 3px 5px 1px #00000058;
  background-color: #ffffff;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  &:hover {
    background-color: #bbbbbb;
    transition: 0.3s;
  }
`
const Arrow = styled.p`
  color: #000000;
  margin-bottom: 5px;
  font-size: 22px;
`
const BottomSection = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 43vh;
`
const InfoBox = styled.div`
  display: flex;
  align-items: center;
`
const StyledA = styled.a`
  &:visited {
    color: white;
  }
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`
const StyledWikiA = styled(StyledA)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
  background-color: black;
  border: 1px solid white;
  &:hover {
    background-color: #ffffff;
    transition: 0.3s;
  }
`

const StyledP = styled.p`
  color: white;
  font-size: 14px;
  &:hover {
    color: black;
    transition: 0.3s;
  }
  margin-left: 65px;
`
const Triangle = styled.div`
  width: 0;
  height: 0;
  border: solid 10px;
  border-color: transparent transparent transparent white;
  margin-left: 12px;
`
const Watch = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;

  background-color: #d60000;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  &:hover {
    background-color: #b60000;
    transition: 0.3s;
  }
`
const TourPageSingleContainer = ({ id, backgroundSrc, title, location, country, videoUrl, wikiUrl }) => {
  return (
    <>
      <MainSection bgSrc={backgroundSrc}>
        <Background>
          <Content>
            <TitleH1>{title}</TitleH1>
            <LocationP>{location}</LocationP>
            <CountryP>{country}</CountryP>
            <BottomSection>
              <BtnBox>
                <StyledLink to={`/tours/${+id - 1}`}>
                  <BackBtn>
                    <Arrow>&#8592;</Arrow>
                  </BackBtn>
                </StyledLink>
                <StyledLink to={`/tours/${+id + 1}`}>
                  <BackBtn>
                    <Arrow>&#8594;</Arrow>
                  </BackBtn>
                </StyledLink>
              </BtnBox>
              <InfoBox>
                <StyledP>
                  {" "}
                  <StyledA target='_blank' href={videoUrl}>
                    <Watch>
                      <Triangle />
                    </Watch>
                    Watch the video
                  </StyledA>
                </StyledP>
                <StyledP>
                  {" "}
                  <StyledWikiA target='_blank' href={wikiUrl}>
                    More info
                  </StyledWikiA>
                </StyledP>
              </InfoBox>
            </BottomSection>
          </Content>
        </Background>
      </MainSection>
    </>
  )
}

export default TourPageSingleContainer
