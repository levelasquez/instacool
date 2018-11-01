import * as React from 'react'

const style = {
  backgroundColor: '#fff',
  border: '1px solid #ddd',
  padding: '10px 15px',
}

const footerStyle = {
  backgroundColor: '#eee',
  display: 'flex',
  marginBottom: '-10px',
  marginLeft: '-15px',
  width: 'calc(100% + 30px)'
}

const footerButtonsStyle = {
  flex: 1,
  textAlign: 'center',
} as React.CSSProperties

interface IPostProps {
  image: string
}

export default class Post extends React.Component<IPostProps> {
  public render() {
    const { image } = this.props

    return (
      <div style={style}>
        <img src={image} />
        <div style={footerStyle}>
          <div style={footerButtonsStyle}>
            Like
          </div>
          <div style={footerButtonsStyle}>
            Compartir
          </div>
        </div>
      </div>
    )
  }
}
