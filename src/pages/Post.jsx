import Layout from "../containers/Layout"
import PostContainer from "../containers/Post"

const PostPage = ({ match }) => {
  return (
    <Layout>
      <PostContainer id={match.params.id} />
    </Layout>
  )
}

export default PostPage
