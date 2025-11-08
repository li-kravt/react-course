
import { useState } from 'react'
import './index.css'
import { Post } from './components/post'
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
  console.log(posts)

  return (
    <div className='App'>
      <SectionPosts data={{ posts, posts2 }} />
    </div>
  )
}

export default App