import * as React from 'react'
import Container from '../../components/Container'
import Post from '../../components/Post'

const style = {
  margin: '0 auto'
}

export default class NewsFeed extends React.Component {
  public render() {
    return (
      <Container>
        <div style={style}>
          <Post image='http://placekitten.com/300/200' />
        </div>
      </Container>
    )
  }
}
