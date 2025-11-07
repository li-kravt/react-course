
import { useState } from 'react'
import './index.css'
import { Post } from './components/post'


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
  console.log(posts)

  return (
    <div className='App'>

      <div className='counters'>
        {posts.map((item) => (
          <Post key={item.id} title={item.title} views={item.views} body={item.body} />
        ))}
      </div>
    </div>
  )
}

export default App
