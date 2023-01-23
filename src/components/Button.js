import { FaShare } from "react-icons/fa";
import { Link } from "react-router-dom";

const Button = () => {
  return (
  <Link to=".." relative="path"><span>На головну</span><FaShare /></Link>
  )
}

export default Button