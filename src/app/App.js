import React from "react";
import { Route } from "react-router-dom";
import { Grid } from "@mui/material";

import HomepageComponent from "./components/home/HomeComponent";
import NavBarComponent from "./shared/components/NavBarComponent";
import AboutUsComponent from "./components/aboutUs/AboutUsComponent";
import OurProjectComponent from "./components/ourProject/OurProjectComponent";
import LoginComponent from "./components/login/LoginComponent";
import ContactUsComponent from "./components/contactUs/ContactUsComponent";
import SignUpComponent from "./components/signUp/SignUpComponent";
import CommunityComponent from "./components/community/CommunityComponent";
import TutorialComponent from "./components/tutorial/TutorialComponent";
import GlobalStateProvider from "./stores/GlobalStateProvider";
import ExerciseEverydayComponent from "./components/exerciseEveryday/ExerciseEverydayComponent";


function App() {
  return (
    <GlobalStateProvider>
      <NavBarComponent />

      <Grid style={{ marginTop: "1em" }}>
        <Route exact path="/" component={HomepageComponent} />
        <Route path="/aboutUs" component={AboutUsComponent} />
        <Route path="/loginIn" component={LoginComponent} />
        <Route path="/ourProject" component={OurProjectComponent} />
        <Route path="/contactUs" component={ContactUsComponent} />
        <Route path="/signUp" component={SignUpComponent} />
        <Route path="/community" component={CommunityComponent} />
        <Route path="/tutorial" component={TutorialComponent} />
        <Route path="/exerciseEveryday" component={ExerciseEverydayComponent} />
      </Grid>
    </GlobalStateProvider>
  );
}

export default App;
