// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'

import NavBar from './components/NavBar';
import News from './components/News';
import Home from './components/Home';
// import Footer from './components/Footer';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
 
const App = ()=> { 
  const pageSize = 15;

  // passing apiKey for enviroment variable(.env.local) through props, AND do this apiKey= process.env.REACT_APP_NEWS_API(which you sign name for api)
  // apiKey = process.env.REACT_APP_NEWS_API

  const [progress, setProgress] = useState(0)

    return (
      <div>
        <Router>
        <NavBar/>
        <LoadingBar
        height={3}
        color='#f11946'

        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      />
        {/* <News pageSize={5} country="in" category=""/> */}
        <Switch>
          {/* here befor set top loading bar we used News only instead of News setProgress={this.setProgress} */}
          {/* <Route exact path="/"><News key="general" pageSize={this.pageSize} country="in" category="general"/></Route>
          <Route exact path="/business"><News key="business" pageSize={this.pageSize} country="in" category="business"/></Route> */}

          {/* for passing apiKey from enviroment varialble so add apiKey={this.apiKey} in all, .. and also make a file (.env.local) in you react app structure */}
          {/* <Route exact path="/"><News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={this.pageSize} country="in" category="general"/></Route> */}

          <Route exact path="/"><Home/></Route>
          <Route exact path="/general"><News setProgress={setProgress} key="general" pageSize={pageSize} country="in" category="general"/></Route>
          <Route exact path="/business"><News setProgress={setProgress} key="business" pageSize={pageSize} country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News setProgress={setProgress} key="entertainment" pageSize={pageSize} country="in" category="entertainment"/></Route>
          <Route exact path="/health"><News setProgress={setProgress} key="health" pageSize={pageSize} country="in" category="health"/></Route>
          <Route exact path="/science"><News setProgress={setProgress} key="science" pageSize={pageSize} country="in" category="science"/></Route>
          <Route exact path="/sports"><News setProgress={setProgress} key="sports" pageSize={pageSize} country="in" category="sports"/></Route>
          <Route exact path="/technology"><News setProgress={setProgress} key="technology" pageSize={pageSize} country="in" category="technology"/></Route>
          {/* <Route><Footer/></Route> */}
        </Switch>
        </Router>
      </div>
    )
}

export default App;