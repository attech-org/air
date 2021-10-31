import { Link } from "react-router-dom"
import styled from "styled-components"

const Card = styled(Link)`
  width: 300px;
  height: 300px;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin: 0.5em;
  border-radius: 10px;
`

// const AuthorRow = styled.

const PostCard = ({ authorAvatarSrc, authorFullName, mainPictureSrc, title, publishedAt, url }) => {
  return (
    <Card to={`blog/${url.toString()}`}>
      <div>
        <img src={authorAvatarSrc} alt={authorFullName} />
        <p>{authorFullName}</p>
      </div>
      <img src={mainPictureSrc} alt={title} />
      <div>
        <h3>{title}</h3>
      </div>
      <div>
        <span>{publishedAt}</span>
      </div>
    </Card>
  )
}

export default PostCard
