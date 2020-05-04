import React from 'react';
import {BrowserRouter as Router,Route,Redirect,Switch} from 'react-router-dom'
import Index from './views/index/Index'
import perform from './views/perform/perform'
import detail from './views/detail/detail'
function App() {
  return (
    <Router>
      <Switch>
      <Route path="/index" component={Index}></Route>
      <Route path="/perform/:categoryId?" component={perform}></Route>
      <Route path="/detail/:schedular_id" component={detail}></Route>
      <Redirect from="/" to="/index"></Redirect>
      </Switch>
    </Router>
  );
}

export default App;
