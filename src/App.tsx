import * as React from 'react'
import { Route } from 'react-router'
import './App.css'
import Login from './containers/auth/Login'

class App extends React.Component {
  public render() {
    return (
      <div>
        <Route exact={true} path='/' component={Login} />
      </div>
    );
  }
}

export default App;
