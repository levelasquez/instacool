import { faNewspaper, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { Link } from 'react-router-dom'

const navbar = {
  borderBottom: '1px solid #aaa',
  padding: '10px 15px',
}

const profile = {
  float: 'right'
} as React.CSSProperties

const link = {
 color: '#555',
 textDecoration: 'none',
}

export default class NavBar extends React.Component {
  public render() {
    return (
      <div style={navbar}>
        <Link to='/app/newsfeed' style={link}>
          <FontAwesomeIcon icon={faNewspaper} /> Instacool
        </Link>
        <div style={profile}>
          <Link to='/app/profile' style={link}>
            <FontAwesomeIcon icon={faUser} /> Perfil
          </Link>
        </div>
      </div>
    )
  }
}
