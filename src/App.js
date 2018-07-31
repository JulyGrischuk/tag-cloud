import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import listOfTags from "./list-tags";
import Tag from "./tag.component";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-intro">
            <Switch>
                <Route exact path='/' component={listOfTags}/>
                <Route path='/:id' component={Tag}/>
            </Switch>

        </div>
      </div>
    );
  }
}

export default App;
