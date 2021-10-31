import Layout from "../containers/Layout"
import PostsContainer from "../containers/Posts"

const PostsPage = () => {
  return (
    <Layout>
      <div>
        <h1>Blog</h1>
        <p>The most interesiting expiriences shared by travelers.</p>
      </div>
      <PostsContainer />
    </Layout>
  )
}

export default PostsPage
