import {  useSelector,useDispatch } from "react-redux";
import { Fragment, useEffect } from "react";
import image from "../../assets/images.jpg";
import classes from "./Header.module.css";
import { loginReducer } from "../../Redux/LoginSlice";
function Header(props) {
  const dispatch = useDispatch();
  let loginValue = useSelector((state)=>state.login);

const clickHandler=(e)=>{
e.preventDefault();
if(loginValue){
  dispatch(loginReducer(false));
}
}
useEffect(()=>{},[])

  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Cooking Recipe</h1>
        <button onClick={clickHandler} className={classes.button}>
      <span>{loginValue?"Logout":"Login"}</span>
    </button>
      </header>
      <div className={classes["main-image"]}>
        <img src={image} alt="Biryani" />
      </div>
    </Fragment>
  );
}

export default Header;
