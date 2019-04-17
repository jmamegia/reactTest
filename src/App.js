import './App.css';
import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom'

import Page0 from './components/page0/Page0'
import Page1 from './components/page1/Paje1'
import Page2 from './components/page2/Page2'

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Page0} />
        <Route exact path="/page1" component={Page1} />
        <Route exact path="/page2" component={Page2} />
      </Switch>
    </HashRouter>
  )
}

export default App;
