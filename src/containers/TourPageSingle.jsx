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
`
const Content = styled.section`
  display: flex;
  flex-direction: column;
  padding: 100px 80px 0 80px;
  min-height: 100vh;
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
const InfoBox = styled.div``
const StyledA = styled.a``
const StyledWikiA = styled.a``
const TourPageSingleContainer = ({ id, ...el }) => {
  return (
    <>
      <MainSection bgSrc={el.backgroundSrc} key={id}>
        <Content>
          <TitleH1>{el.title}</TitleH1>
          <LocationP>{el.location}</LocationP>
          <CountryP>{el.country}</CountryP>
          <BottomSection>
            <BtnBox>
              <StyledLink to={`/tourpagesingle?tourId=${id - 1}`}>
                <BackBtn>
                  <Arrow>&#8592;</Arrow>
                </BackBtn>
              </StyledLink>
              <StyledLink to={`/tourpagesingle?tourId=${id + 1}`}>
                <BackBtn>
                  <Arrow>&#8594;</Arrow>
                </BackBtn>
              </StyledLink>
            </BtnBox>
            <InfoBox>
              <StyledA>{el.videoUrl}</StyledA>
              <StyledWikiA href={el.wikiPage}>More Info</StyledWikiA>
            </InfoBox>
          </BottomSection>
        </Content>
      </MainSection>
    </>
  )
}

export default TourPageSingleContainer
