import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage"
import UserMainPage  from "./pages/UserMainPage";
import ProfilePage  from "./pages/ProfilePage";
import SettingsPage  from "./pages/SettingsPage";
import SearchPeoplePage  from "./pages/SearchPeoplePage";
import TransactionHistoryPage  from "./pages/TransactionHistoryPage";
import NotificationsPage  from "./pages/NotificationsPage";
import GetHelpPage  from "./pages/GetHelpPage";

import TestPage from "./pages/TestPage";

function App() {
  
  return (

<div className="App" style={{height: '100%'}}> 
    <Router basename = {process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/usermainpage" component={UserMainPage} />
          <Route exact path="/searchpeoplepage" component={SearchPeoplePage} />
          <Route exact path="/notificationspage" component={NotificationsPage} />
          <Route exact path="/profilepage" component={ProfilePage} />
          <Route exact path="/transactionhistorypage" component={TransactionHistoryPage} />
          <Route exact path="/settingspage" component={SettingsPage} />
          <Route exact path="/gethelppage" component={GetHelpPage} />
          <Route exact path="/testpage" component={TestPage} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
