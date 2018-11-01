import * as React from 'react'
import { Route } from 'react-router'
import './App.css'
import Login from './containers/auth/Login'
import Register from './containers/auth/Register'
import NewsFeed from './containers/newsFeed'

class App extends React.Component {
  public render() {
    return (
      <div>
        <Route exact={true} path='/' component={Login} />
        <Route exact={true} path='/register' component={Register} />
        <Route exact={true} path='/app/newsfeed' component={NewsFeed} />
      </div>
    );
  }
}

export default App;
