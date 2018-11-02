import * as React from 'react'
import { Route } from 'react-router'
import './App.css'
import NavBar from './components/NavBar'
import Login from './containers/auth/Login'
import Register from './containers/auth/Register'
import NewsFeed from './containers/newsFeed'
import Profile from './containers/profile'

class App extends React.Component {
  public render() {
    return (
      <div>
        <Route exact={true} path='/' component={Login} />
        <Route exact={true} path='/register' component={Register} />
        <Route path='/app' component={NavBar} />
        <Route exact={true} path='/app/newsfeed' component={NewsFeed} />
        <Route exact={true} path='/app/profile' component={Profile} />
      </div>
    );
  }
}

export default App;
