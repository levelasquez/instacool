import * as React from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import ProfileImage from '../../components/ProfileImage'

const container = {
  padding: '15px',
}

const row = {
  display: 'flex',
  justifyContent: 'space-between',
  marginBottom: '10px',
}

export default class Profile extends React.Component {
  public render() {
    return (
      <div style={container}>
        <div style={row}>
          <ProfileImage />
          <Button>Agregar</Button>
        </div>
        <div style={row}>
          <Card>
            <img src="http://placekitten.com/100/100" />
          </Card>
          <Card>
            <img src="http://placekitten.com/100/100" />
          </Card>
          <Card>
            <img src="http://placekitten.com/100/100" />
          </Card>
        </div>
        <div style={row}>
          <Card>
            <img src="http://placekitten.com/100/100" />
          </Card>
          <Card>
            <img src="http://placekitten.com/100/100" />
          </Card>
          <Card>
            <img src="http://placekitten.com/100/100" />
          </Card>
        </div>
      </div>
    )
  }
}
