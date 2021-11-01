import { useEffect, useState } from "react"

const PostContainer = ({ id }) => {
  const [post, onPostCahnge] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("SOURCE_URL/" + id)
      const data = await res.json()
      onPostCahnge(data)
    }
    fetchData()
  }, [])

  return (
    <div>
      <div>{post?.title}</div>
      <p>{post?.content}</p>
    </div>
  )
}

export default PostContainer
