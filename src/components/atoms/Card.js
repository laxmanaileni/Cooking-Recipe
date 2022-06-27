import classes from "./Card.module.css";
import { useSelector } from "react-redux";
//import {loginSelector} from '../../Redux/LoginSlice'
const Card = (props) => {
 let loginValue = useSelector((state)=>state.login);
  // const [btnIsHightlighted, setBtnIsHighlighted] = useState(false);
  const btnClasses = `${classes.card} ${loginValue ? "" : classes.bump}`;
  return <div className={btnClasses}>{props.children}</div>;
};

export default Card;
