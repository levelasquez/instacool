import { History } from 'history'
import * as React from 'react'
import { Route } from 'react-router'
import './App.css'
import NavBar from './components/NavBar'
import Login from './containers/auth/Login'
import Register from './containers/auth/Register'
import NewsFeed from './containers/newsFeed'
import Profile from './containers/profile'
import services from './services'

interface IAppProps {
  history: History
}
class App extends React.Component<IAppProps> {
  public state = {
    loading: true,
  }

  public componentDidMount() {
    const { auth } = services
    const { history } = this.props

    auth.onAuthStateChanged(user => {
      if (user) {
        if (['/', '/register'].indexOf(location.pathname) > -1) {
          history.push('/app/newsfeed')
        }
      } else {
        if (/\app\/./.test(location.pathname)) {
          history.push('/')
        }
      }

      this.setState({ loading: false })
    })
  }

  public render() {
    const { loading } = this.state

    return loading ? (
      'Loading'
    ) : (
      <div>
        <Route exact={true} path="/" component={Login} />
        <Route exact={true} path="/register" component={Register} />
        <Route path="/app" component={NavBar} />
        <Route exact={true} path="/app/newsfeed" component={NewsFeed} />
        <Route exact={true} path="/app/profile" component={Profile} />
      </div>
    )
  }
}

export default App
