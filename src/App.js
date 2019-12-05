import React from "react";
import logo from "./logo.svg";
import "./App.css";
import UserList from "./component/UserList";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserDetails from "./component/UserDetails";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={UserList} />
        <Route exact path="/user:id" component={UserDetails} />
      </Switch>
    </BrowserRouter>
    // <div className="App">
    //   <h3>User App</h3>
    //   <UserList />
    // </div>
  );
}

export default App;
