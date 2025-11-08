import classes from "./MyButton.module.css"

export const MyButton = ({ post, setPosts, posts, setPost }) => {

  const addPost = () => {
    console.log("click")
    setPosts([...posts, { id: Date.now(), ...post, views: 0 }])

    setPost({ title: "", description: "" })
  }

  return (
    <button className={classes.myBtn}
      onClick={addPost}>
      Create post
    </button>
  )
}