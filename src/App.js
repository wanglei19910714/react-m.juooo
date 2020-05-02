import React from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
// import Index from './views/index/Index'
import perform from './views/perform/perform'
function App() {
  return (
    <Router>
      <Switch>
      {/* <Route path="/index" component={Index}></Route> */}
      <Route path="/perform" component={perform}></Route>
      {/* <Redirect from="/" to="/index"></Redirect> */}
      </Switch>
    </Router>
  );
}

export default App;
