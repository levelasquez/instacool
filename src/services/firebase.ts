import * as firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCtvcqYgJu1YgxHRhy3fnaqTAQ-KfQSjeM',
  authDomain: 'instacool-f358a.firebaseapp.com',
  databaseURL: 'https://instacool-f358a.firebaseio.com',
  messagingSenderId: '509762837200',
  projectId: 'instacool-f358a',
  storageBucket: 'instacool-f358a.appspot.com',
}

firebase.initializeApp(config)

const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }
firestore.settings(settings)

export const auth = firebase.auth()
export const db = firestore
export const storage = firebase.storage()
