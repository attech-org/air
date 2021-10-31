import styled from "styled-components"

import PostCard from "../components/PostCard"

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const PostsContainer = () => {
  return (
    <Grid>
      {[1, 2, 3, 4].map((el) => (
        <PostCard key={el} />
      ))}
    </Grid>
  )
}

export default PostsContainer
