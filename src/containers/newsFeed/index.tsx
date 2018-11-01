import * as React from 'react'
import Container from '../../components/Container'
import Post from '../../components/Post'

export default class NewsFeed extends React.Component {
  public render() {
    return (
      <Container>
        <div>
          <Post />
        </div>
      </Container>
    )
  }
}
