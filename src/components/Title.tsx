import * as React from 'react'

const style = {
  color: '#555',
}

export default class Card extends React.Component {
  public render() {
    return (
      <h2 {...this.props} style={style} />
    )
  }
}
