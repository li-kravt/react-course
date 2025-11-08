
import { useState } from 'react'
import './index.css'
import { MyButton } from './components/UI/button/MyButton'
import { SectionPosts } from './components/SectionPosts'


function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "1 Post",
      body: "1 description",
      views: 122
    },
    {
      id: 2,
      title: "2 Post",
      body: "2 description",
      views: 185
    },
    {
      id: 3,
      title: "3 Post",
      body: "3 description",
      views: 144
    }
  ])
  const [posts2, setPosts2] = useState([
    {
      id: 1,
      title: "Notes",
      body: "1 description",
      views: 122
    },
    {
      id: 2,
      title: "Notes",
      body: "2 description",
      views: 185
    },
    {
      id: 3,
      title: "Notes",
      body: "3 description",
      views: 144
    }
  ])

  const [post, setPost] = useState({ title: "", description: "" })



  return (
    <div className='App'>
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
        <MyButton type="button"
          setPosts={setPosts}
          post={post}
          posts={posts}
        ></MyButton>
      </form>
      <SectionPosts data={{ posts, posts2 }} />
    </div>
  )
}

export default App