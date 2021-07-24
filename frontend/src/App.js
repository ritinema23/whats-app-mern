import React, {useState, useEffect} from 'react';
import './App.css';
import Sidebar from './Sidebar.js'
import Main_chat from './Main_chat';
import {BrowserRouter, Route, Switch} from 'react-router-dom' ;

function App() {

return (
  <div className="App">
      <div className="app_body">
      <BrowserRouter>
        <Sidebar />
        <Switch>
          <Route path="/rooms/:roomid">
            <Main_chat />
          </Route>
          <Route path="/">
            <Main_chat />
          </Route>
        </Switch>         
      </BrowserRouter> 
      </div>
  </div> 
)

}

export default App;
