import { useSelector } from "react-redux";
import classes from "./Card.module.css";

const Card = (props) => {
  let loginValue = useSelector((state) => state.login);

  const btnClasses = `${classes.card} ${loginValue ? "" : classes.bump}`;

  return <div className={btnClasses}>{props.children}</div>;
};

export default Card;
