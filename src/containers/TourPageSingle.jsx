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
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
`
const Background = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  background-color: rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 30px 4px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3px);
  margin: 30px 150px 30px 150px;
  padding: 50px;

  @media (max-width: 1080px) {
    margin: 20px;
    padding: 30px;
  }
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
  transition: 0.3s;

  &:hover {
    background-color: #bbbbbb;
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

  @media (max-width: 1080px) {
    flex: 1 0 auto;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    width: 100%;
    height: auto;
    line-height: 6.5em;
  }
`
const InfoBox = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 1080px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
  }
`
const StyledA = styled.a`
  color: inherit;
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
  transition: 0.3s;
  &:hover {
    background-color: #ffffff;
  }
`

const StyledP = styled.div`
  color: white;
  font-size: 14px;
  transition: 0.3s;
  &:hover {
    color: black;
  }
  margin-left: 65px;
  width: 100%;
  @media (max-width: 1080px) {
    margin: 0;
    left: 0;
  }
`
const Triangle = styled.div`
  width: 0;
  height: 0;
  border: solid 10px;
  border-color: inherit;
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
  border-color: transparent transparent transparent white;
  transition: 0.3s;

  &:hover {
    background-color: #b60000;
    border-color: transparent transparent transparent lightgray;
  }
`
const TourPageSingleContainer = ({ id, backgroundSrc, title, location, country, videoUrl, wikiUrl }) => {
  return (
    <>
      <MainSection bgSrc={backgroundSrc}>
        <Background>
          <div>
            <TitleH1>{title}</TitleH1>
            <LocationP>{location}</LocationP>
            <CountryP>{country}</CountryP>
          </div>
          <BottomSection>
            <BtnBox>
              {+id <= 0 ? (
                <div />
              ) : (
                <StyledLink to={`/tours/${+id - 1} `}>
                  <BackBtn>
                    <Arrow>&#8592;</Arrow>
                  </BackBtn>
                </StyledLink>
              )}

              <StyledLink to={`/tours/${+id + 1}`}>
                <BackBtn>
                  <Arrow>&#8594;</Arrow>
                </BackBtn>
              </StyledLink>
            </BtnBox>
            <InfoBox>
              {videoUrl && (
                <StyledP>
                  {" "}
                  <StyledA target='_blank' href={videoUrl}>
                    <Watch>
                      <Triangle />
                    </Watch>
                    Watch the video
                  </StyledA>
                </StyledP>
              )}
              {wikiUrl && (
                <StyledP>
                  {" "}
                  <StyledWikiA target='_blank' href={wikiUrl}>
                    More info
                  </StyledWikiA>
                </StyledP>
              )}
            </InfoBox>
          </BottomSection>
        </Background>
      </MainSection>
    </>
  )
}

export default TourPageSingleContainer
