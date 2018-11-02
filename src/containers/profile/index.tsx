import * as React from 'react'
import Button from '../../components/Button'
import ProfileImage from '../../components/ProfileImage'

const container = {
  display: 'flex',
  justifyContent: 'space-between',
  padding: '15px',
}

export default class Profile extends React.Component {
  public render() {
    return (
      <div style={container}>
        <ProfileImage />
        <Button>Agregar</Button>
      </div>
    )
  }
}
