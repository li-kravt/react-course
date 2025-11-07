

export const Post = (props) => {
  console.log(props)
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <p>{props.views}</p>

    </div>
  )
}