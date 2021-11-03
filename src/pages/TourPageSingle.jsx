import { useEffect, useState } from "react"
import styled from "styled-components"

import Layout from "../containers/Layout"
import { MOCK } from "../MOCK"

const StyledH1 = styled.h1`
  color: white;
`
const MainSection = styled.section`
  background-image: ${(props) => `url(${props.bgSrc})`};
  width: 100%;
  min-height: 100vh;
`

const TourPageSingle = () => {
  const [backendData, onBackendDataChange] = useState([])

  useEffect(() => {
    onBackendDataChange(MOCK)
  }, [])

  return (
    <>
      <Layout>
        {backendData.map((el) => (
          <MainSection bgSrc={el.backgroundSrc} key={el.id}>
            <StyledH1>{el.title}</StyledH1>
            <StyledH1>{el.location}</StyledH1>
            <StyledH1>{el.country}</StyledH1>
            <StyledH1>{el.videoUrl}</StyledH1>
            <StyledH1>{el.videoUrl}</StyledH1>
            <StyledH1>{el.wikiPage}</StyledH1>
          </MainSection>
        ))}
      </Layout>
    </>
  )
}

export default TourPageSingle
