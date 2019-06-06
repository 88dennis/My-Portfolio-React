import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home"
import UserMainPage  from "./pages/UserMainPage";
import ProfilePage  from "./pages/ProfilePage";
import SettingsPage  from "./pages/SettingsPage";
import SearchPeoplePage  from "./pages/SearchPeoplePage";
import TransactionHistoryPage  from "./pages/TransactionHistoryPage";
import NotificationsPage  from "./pages/NotificationsPage";
import GetHelpPage  from "./pages/GetHelpPage";
import NoMatch from "./pages/NoMatch";

function App() {
  return (

<div className="App" style={{height: '100%'}}> 
    <Router basename = {process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/usermainpage" component={UserMainPage} />
          <Route exact path="/searchpeoplepage" component={SearchPeoplePage} />
          <Route exact path="/notificationspage" component={NotificationsPage} />
          
          <Route exact path="/profilepage" component={ProfilePage} />
          <Route exact path="/transactionhistorypage" component={TransactionHistoryPage} />
          <Route exact path="/settingspage" component={SettingsPage} />
          <Route exact path="/gethelppage" component={GetHelpPage} />

          <Route component={NoMatch} />
        </Switch>
    </Router>
    </div>
  );
}

export default App;
