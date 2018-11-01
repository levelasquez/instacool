import * as React from 'react'

const style = {
  backgroundColor: '#00d1b2',
  border: '0px',
  borderRadius: '4px',
  color: '#fff',
  padding: '10px 15px',
}

export default class Button extends React.Component {
  public render() {
    return (
      <button {...this.props} style={style} />
    )
  }
}
