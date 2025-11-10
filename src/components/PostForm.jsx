import { useState } from "react"
import { MyButton } from "./UI/button/MyButton"

export const PostForm = ({ setPosts, posts }) => {
  const [post, setPost] = useState({ title: "", description: "" })

  const addPost = () => {
    console.log("click")
    setPosts([...posts, { id: Date.now(), ...post, views: 0 }])
    setPost({ title: "", description: "" })
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}
      className='form'>
      <input type='text'
        placeholder="Post's name"
        value={post.title}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
      />

      <input type='text'
        placeholder="Description"
        value={post.description}
        onChange={(e) => setPost({ ...post, description: e.target.value })} />
      <MyButton type="button" onCustomClick={() => addPost()}>

      </MyButton>
    </form>
  )
}