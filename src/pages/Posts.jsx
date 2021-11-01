import Layout from "../containers/Layout"
import PostsContainer from "../containers/Posts"

const PostsPage = () => {
  return (
    <Layout bgSrc='https://cdn.pixabay.com/photo/2021/09/28/00/20/snake-6662549_960_720.jpg'>
      <div>
        <h1>Blog</h1>
        <p>The most interesiting expiriences shared by travelers.</p>
      </div>
      <PostsContainer />
    </Layout>
  )
}

export default PostsPage
