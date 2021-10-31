import { Link } from "react-router-dom"

const PostsContainer = () => {
  return (
    <>
      <Link to='/blog/one'>One</Link>
      <Link to='/blog/two'>Two</Link>
      <Link to='/blog/three'>Three</Link>
    </>
  )
}

export default PostsContainer
