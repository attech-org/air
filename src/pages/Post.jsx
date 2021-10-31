import Layout from "../containers/Layout"

const PostPage = ({ match }) => {
  return (
    <Layout>
      <div>Single post: {match.params.id}</div>
    </Layout>
  )
}

export default PostPage
