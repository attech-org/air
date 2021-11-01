import { useEffect, useState } from "react"
import styled from "styled-components"

import PostCard from "../components/PostCard"

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Spinner = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  font-size: 40px;
`

const SOURCE_URL = "https://api.mockaroo.com/api/febabdf0?count=50&key=6b9b6f90"

const PostsContainer = () => {
  const [posts, onPostsChange] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(SOURCE_URL)
      const data = await res.json()
      onPostsChange(data)
    }

    fetchData()
  }, [])

  return (
    <Grid>
      {!posts.length && <Spinner>Loading...</Spinner>}
      {posts.map(({ authorAvatar, authorName, previewImg, title, date, id }) => (
        <PostCard
          key={id}
          authorAvatarSrc={authorAvatar}
          authorFullName={authorName}
          mainPictureSrc={previewImg}
          title={title}
          publishedAt={date}
          url={id}
        />
      ))}
    </Grid>
  )
}

export default PostsContainer
