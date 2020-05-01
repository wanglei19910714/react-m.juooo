import React from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Index from './views/index/Index'
import Test from './views/test/Test'
function App() {
  return (
    <Router>
      <Switch>
      <Route path="/index" component={Index}></Route>
      <Route path="/test" component={Test}></Route>
      <Redirect from="/" to="/index"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
