import classes from "./MyButton.module.css"

export const MyButton = ({ onCustomClick }) => {

  return (
    <button className={classes.myBtn} onClick={() => onCustomClick()}>
      Create post
    </button>
  )
}