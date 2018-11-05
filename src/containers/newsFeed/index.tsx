import * as React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import Container from '../../components/Container'
import Post from '../../components/Post'
import * as postsDuck from '../../ducks/Posts'

interface INewsFeedProps {
  fetchPosts: () => void
  fetched: boolean
  loading: boolean
  data: postsDuck.IDataPosts
}

const style = {
  margin: '0 auto',
}

class NewsFeed extends React.Component<INewsFeedProps> {
  constructor(props: INewsFeedProps) {
    super(props)
    const { fetchPosts, fetched } = props
    if (fetched) {
      return
    }
    fetchPosts()
  }

  public render() {
    const { data } = this.props

    return (
      <Container>
        {Object.keys(data).map(key => {
          const post = data[key]

          return (
            <div key={key} style={style}>
              <Post image={post.imageURL} />
            </div>
          )
        })}
      </Container>
    )
  }
}

const mapStateToProps = (state: any) => {
  const {
    Posts: { data, fetched, fetching },
  } = state
  const loading = fetching || !fetched

  return {
    data,
    fetched,
    loading,
  }
}

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, any>) =>
  bindActionCreators(postsDuck, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewsFeed)
