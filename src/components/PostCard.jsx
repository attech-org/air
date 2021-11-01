import { Link } from "react-router-dom"
import styled from "styled-components"

const Card = styled(Link)`
  width: 300px;
  height: 300px;
  background-color: white;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
  margin: 0.5em;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  font-weight: bold;
`

const Avatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: rgba(220, 0, 200, 0.3);
  margin-right: 0.5rem;
`

const PreviewImg = styled.div`
  flex: 0 0 60%;
  background-image: ${(props) => `url(${props.bg})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`

const Title = styled.h3`
  font-size: 20px;
  padding: 0.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const DateRow = styled.div`
  font-size: 10px;
  text-align: right;
  padding: 0.5rem;
  opacity: 0.7;
`

const convertDate = (dateStr) => {
  return new Date(dateStr).toLocaleDateString()
}

const PostCard = ({ authorAvatarSrc, authorFullName, mainPictureSrc, title, publishedAt, url }) => {
  return (
    <Card to={`blog/${url.toString()}`}>
      <AuthorRow>
        <Avatar src={authorAvatarSrc} alt={authorFullName} />
        <p>{authorFullName}</p>
      </AuthorRow>
      <PreviewImg bg={mainPictureSrc} alt={title} />
      <Title>{title}</Title>
      <DateRow>{convertDate(publishedAt)}</DateRow>
    </Card>
  )
}

export default PostCard
