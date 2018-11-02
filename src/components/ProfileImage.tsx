import * as React from 'react'

const image = {
  borderRadius: '100%',
}

export default class ProfileImage extends React.Component {
  public render() {
    return (
      <div>
        <img src="http://placekitten.com/100/100" style={image} />
      </div>
    )
  }
}
