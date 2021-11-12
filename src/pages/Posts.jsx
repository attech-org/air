import styled from "styled-components"

import Layout from "../containers/Layout"
import PostsContainer from "../containers/Posts"

const HeaderSection = styled.div`
  padding: 0 80px;
  display: flex;
  flex-direction: column;
  background-color: white;
  width: calc(100% - 80px * 2);
`

const TitleWrap = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin: 35px 0;
`

const H1 = styled.h1`
  font-size: 5em;
  font-weight: 700;
`

const Slogan = styled.p`
  color: rgba(50, 50, 50, 0.4);
  font-weight: 400;
  padding: 0 0 3px 45px;
  font-size: 0.9em;
`

const PostsPage = () => {
  return (
    <Layout>
      <HeaderSection>
        <TitleWrap>
          <H1>Posts</H1>
          <Slogan>Our user stories</Slogan>
        </TitleWrap>
      </HeaderSection>
      <PostsContainer />
    </Layout>
  )
}

export default PostsPage
