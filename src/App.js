import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Topics from "./pages/BlockTopics";
import Featured from "./pages/Featured";
import SpecificDebate from "./pages/SpecificDebate";
import Press from "./pages/Press";
import NoMatch from "./pages/NoMatch";
import "./App.css";

function App() {
     return (
          <Router>
               <div>
                    <Switch>
                         <Route exact path="/" component={Home} />
                         <Route exact path="/featured" component={Featured} />
                         <Route exact path="/topics" component={Topics} />
                         <Route exact path="/press" component={Press} />
                         <Route exact path="/debate/:id" component={SpecificDebate} />
                         <Route component={NoMatch} />
                   </Switch>
               </div>
          </Router>
     );
}

export default App;
