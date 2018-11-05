import { firestore } from 'firebase'
import { AnyAction, Dispatch } from 'redux'
import { IServices } from 'src/services'

const START = 'posts/fetch-start'
const SUCCESS = 'posts/fetch-success'
const ERROR = 'posts/fetch-error'

export interface IDataPosts {
  [key: string]: {
    userId: string
    comment: string
    createdAt: firestore.Timestamp
    imageURL: string
  }
}

const fetchStart = () => ({
  type: START,
})

const fetchSuccess = (payload: IDataPosts) => ({
  payload,
  type: SUCCESS,
})

const fetchError = (error: Error) => ({
  error,
  type: ERROR,
})

const initialState = {
  data: {},
  error: null,
  fetched: false,
  fetching: false,
}

export default function reducer(state = initialState, action: AnyAction) {
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
  { db, storage }: IServices,
) => {
  try {
    dispatch(fetchStart())
    const snaps = await db.collection('posts').get()
    const posts = {}
    snaps.forEach(snap => (posts[snap.id] = snap.data()))
    const imagesIds = await Promise.all(
      Object.keys(posts).map(async key => {
        const ref = storage.ref(`posts/${key}.jpg`)
        const url = await ref.getDownloadURL()

        return [key, url]
      }),
    )
    const keyedImages = {}
    imagesIds.forEach(image => (keyedImages[image[0]] = image[1]))
    Object.keys(posts).forEach(
      post =>
        (posts[post] = {
          ...posts[post],
          imageURL: keyedImages[post],
        }),
    )
    dispatch(fetchSuccess(posts))
  } catch (error) {
    dispatch(fetchError(error))
  }
}

export const like = (id: string) => async (
  dispatch: Dispatch,
  getState: () => any,
  {  }: IServices,
) => {
  // tslint:disable-next-line:no-console
  console.log(id)
}

export const share = (id: string) => async (
  dispatch: Dispatch,
  getState: () => any,
  {  }: IServices,
) => {
  // tslint:disable-next-line:no-console
  console.log(id)
}
