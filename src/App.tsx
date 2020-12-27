import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Amplify from '@aws-amplify/core';
import awsmobile from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react';
import HomeView from "./pages/HomeView/HomeView"
import CalenderView from "./pages/CalenderView/CalenderView"

Amplify.configure(awsmobile);
export const App: React.FunctionComponent=() => {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={HomeView}></Route>
        <Route exact path="/clender" component={CalenderView}></Route>
      </Switch>
    </Router>
  )
}

//@ts-ignore
export default withAuthenticator(App , {
  signUpConfig:{
    hiddenDefaults: ['phone_number']
  }
})
