// Author: Laxman Reddy Aileni
import { Fragment } from "react";
import { useSelector } from "react-redux";
import Header from "./components/Layout/Header";
import Recipe from "./components/Recipe/Recipe";
import Login from "./components/Login/Login";
function App() {
let loginValue = useSelector((state) => state.login);
  
  return (
    <Fragment>
      <Header />
      {loginValue ? (
        <main>
          <Recipe />
        </main>
      ) : (
        <Login />
      )}
    </Fragment>
  );
}

export default App;
