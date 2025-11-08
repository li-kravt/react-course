import { Post } from "./post"

export const SectionPosts = ({ data }) => {
  console.log("data:", data)
  return (
    <>
      <div className='counters'>
        {data.posts.map((item) => (
          <Post key={item.id} title={item.title} views={item.views} body={item.body} />
        ))}
        {data.posts2.map((item) => (
          <Post key={item.id} title={item.title} views={item.views} body={item.body} />
        ))}
      </div>
    </>
  )
}