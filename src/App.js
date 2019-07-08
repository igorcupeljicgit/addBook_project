import React from "react";
import { Switch, Route } from "react-router-dom";

import Genre from "./component/Genre/Genre";
import Header from "./component/Header";
import AddBookForm from "./component/NewBook/AddBookForm";
import Subgenre from "./component/Subgenre/Subgenre";
import BookAdded from "./component/NewBook/BookAdded";
import AddSubgenre from "./component/Subgenre/AddSubgenre";

import "./App.css";

function App() {
  return (
    <div className="main">
      <Header />
      <Switch>
        <Route path="/newsubgenre" component={AddSubgenre} />
        <Route path="/bookadded" component={BookAdded} />
        <Route path="/information" component={AddBookForm} />
        <Route path="/subgenre" component={Subgenre} />
        <Route path="/" component={Genre} />
      </Switch>
    </div>
  );
}

export default App;
