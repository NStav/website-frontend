import React from "react";
import { Route } from "react-router-dom";
import { Grid } from "@mui/material";

import HomepageComponent from "./components/home/HomeComponent";
import NavBarComponent from "./shared/components/NavBarComponent";
import AboutUsComponent from "./components/aboutUs/AboutUsComponent";
import OurProjectComponent from "./components/ourProject/OurProjectComponent";
import LoginComponent from "./components/login/LoginComponent";
import OurTeamComponent from "./components/ourTeam/OurTeamComponent";
import ContactUsComponent from "./components/contactUs/ContactUsComponent";
import SignUpComponent from "./components/signUp/SignUpComponent";
import GlobalStateProvider from "./stores/GlobalStateProvider";
import Running from './components/Activities/Running';
import Tutorial from './components/Activities/Tutorial';
function App() {
  return (
    <GlobalStateProvider>
      <NavBarComponent />

      <Grid style={{ marginTop: "1em" }}>
        <Route exact path="/" component={HomepageComponent} />
        <Route path="/aboutUs" component={AboutUsComponent} />
        <Route path="/loginIn" component={LoginComponent} />
        <Route path="/ourTeam" component={OurTeamComponent} />
        <Route path="/ourProject" component={OurProjectComponent} />
        <Route path="/contactUs" component={ContactUsComponent} />
        <Route path="/signUp" component={SignUpComponent} />
        <Route path="/running" >
          <Running/>
        </Route>
        <Route path="/tutorial">
          <Tutorial/>
           </Route>
      </Grid>
    </GlobalStateProvider>
  );
}

export default App;
