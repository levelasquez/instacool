import * as React from 'react'
import { Route } from 'react-router'
import './App.css'
import Login from './containers/auth/Login'
import Register from './containers/auth/Register'

class App extends React.Component {
  public render() {
    return (
      <div>
        <Route exact={true} path='/' component={Login} />
        <Route exact={true} path='/register' component={Register} />
      </div>
    );
  }
}

export default App;
