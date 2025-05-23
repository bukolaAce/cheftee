/* eslint-disable react/prop-types */

import FilledStar from "../assets/images/star-filled.png";
import EmptyStar from "../assets/images/star-empty.png";
const Button = ({contact,toggle}) => {
  
  return (
    <button onClick={toggle}>
    <img
      src={contact.isFavorite ? EmptyStar : FilledStar}
      alt=""
      className="w-5 cursor-pointer"
    />
  </button>
  )
}

export default Button