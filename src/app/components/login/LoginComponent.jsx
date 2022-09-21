import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import "./LoginStyles.css";
import agent from "../../proxy/userService";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import Context from "../../stores/context";
import background from "./img/1.jpg";
import LogInPageFooter from "./LogInPageFooter";

export default function LoginComponent(props) {
  const { globalState, globalDispatch } = useContext(Context);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleClick() {
    const userDetail = {
      username: email,
      password: password,
    };
    agent.UserAPI.login(userDetail).then((response) => {
      sessionStorage.setItem("access_token", response["accessToken"]);
      sessionStorage.setItem("refresh_token", response["refreshToken"]);
      sessionStorage.setItem("username", email);
      globalDispatch({ type: "LOGIN" });
      history.push("/");
    });
  }

  return (
    <div className="LoginComponent">
      <img className="login-component-img" src={background}></img>
      <div className="login-component" style={{ padding: 30 }}>
        <Grid
          container
          spacing={3}
          direction={"column"}
          justify={"center"}
          alignItems={"center"}
        >
          <h1
            style={{
              marginLeft: "100px",
              color: "#FFFF",
              backgroundImage: "url(${background})",
            }}
          >
            Redback Login
          </h1>
          <Grid item xs={12}>
            <TextField
              className="Login-input"
              value={email}
              type="email"
              placeholder="username"
              onChange={(e) => setEmail(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              large
              className="Login-input"
              value={password}
              type="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            ></TextField>
          </Grid>
          <Grid item xs={12}>
            <Button
              component={NavLink}
              to="/"
              onClick={() => handleClick()}
              style={{
                borderRadius: 8,
                backgroundColor: "#e8574d",
                color: "#FFFF",
                width: "180%",
                marginLeft: "15px",
                marginTop: "20px",
                padding: "10px 10px",
                fontSize: "20px",
              }}
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
            >
              Submit
            </Button>
          </Grid>

          <Grid item xs={12}>
            <div
              style={{
                borderRadius: 8,
                backgroundColor: "#e8574d",
                color: "#FFFF",
                width: "260%",
                marginTop: "20px",
                padding: "10px 5px",
                fontSize: "20px",
              }}
              className="SignUp"
              variant="contained"
              color="primary"
              fullWidth
            >
              {" "}
              <Link
                style={{
                  borderRadius: 8,
                  backgroundColor: "#e8574d",
                  color: "#FFFF",
                }}
                to={"./signUp"}
              >
                {" "}
                SignUp{" "}
              </Link>
            </div>
          </Grid>
        </Grid>
      </div>
      <LogInPageFooter />
    </div>
  );
}
