import React from "react";
import { useDispatch } from "react-redux";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { getRecipe, loginReducer } from "../../Redux/LoginSlice";
import Card from "../atoms/Card"; //Reusable Component
const Login = () => {
  const dispatch = useDispatch();
  
  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginReducer({ login: true }));
    dispatch(getRecipe());
  };

  return (
    <Card>
      <Grid
        container
        justifyContent="center"
        // spacing={0}
        className="login-form"
      >
        <Grid item>
          <Grid item>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
          </Grid>
          <Grid item>
            <form onSubmit={loginHandler}>
              <Grid container direction="column" spacing={2}>
                <Grid item>
                  <TextField
                    type="email"
                    placeholder="Email"
                    fullWidth
                    name="username"
                    variant="outlined"
                    required
                    autoFocus
                  />
                </Grid>
                <Grid item>
                  <TextField
                    type="password"
                    placeholder="Password"
                    fullWidth
                    name="password"
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className="button-block"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};
export default Login;
