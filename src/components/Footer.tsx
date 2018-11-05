import { faRetweet, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

const footerStyle = {
  backgroundColor: '#eee',
  display: 'flex',
  marginBottom: '-10px',
  marginLeft: '-15px',
  width: 'calc(100% + 30px)',
}

const footerButtonsStyle = {
  cursor: 'pointer',
  flex: 1,
  padding: '10px 15px',
  textAlign: 'center',
} as React.CSSProperties

interface IFooterProps {
  like: () => void
  share: () => void
}

export default class Footer extends React.Component<IFooterProps> {
  public render() {
    const { like, share } = this.props

    return (
      <div style={footerStyle}>
        <div style={footerButtonsStyle} onClick={like}>
          <FontAwesomeIcon icon={faThumbsUp} /> Like
        </div>
        <div style={footerButtonsStyle} onClick={share}>
          <FontAwesomeIcon icon={faRetweet} /> Compartir
        </div>
      </div>
    )
  }
}
