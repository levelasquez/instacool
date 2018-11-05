import { Dispatch } from 'redux'
import { IServices } from 'src/services'

const START = 'posts/fetch-start'
const SUCCESS = 'posts/fetch-success'
const ERROR = 'posts/fetch-error'

const fetchStart = () => ({
  type: START,
})

const fetchSuccess = payload => ({
  payload,
  type: SUCCESS,
})

const fetchError = error => ({
  error,
  type: ERROR,
})

const initialState = {
  data: {},
  error: null,
  fetched: false,
  fetching: false,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START:
      return {
        ...state,
        fetching: true,
      }
    case SUCCESS:
      return {
        ...state,
        data: action.payload,
        fetched: true,
        fetching: false,
      }
    case ERROR:
      return {
        ...state,
        error: action.error,
        fetching: false,
      }
    default:
      return state
  }
}

export const fetchPosts = () => async (
  dispatch: Dispatch,
  getState: () => any,
  { db }: IServices,
) => {
  try {
    dispatch(fetchStart())
    const snaps = await db.collection('posts').get()
    const posts = {}
    snaps.forEach(snap => (posts[snap.id] = snap.data()))
    dispatch(fetchSuccess(posts))
  } catch (error) {
    dispatch(fetchError(error))
  }
}
