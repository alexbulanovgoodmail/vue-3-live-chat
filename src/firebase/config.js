import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAeJh6MSVmpQA-cctpYHVaijsil2SCRTBY',
  authDomain: 'udemy-vue-firebase-sites-daf09.firebaseapp.com',
  projectId: 'udemy-vue-firebase-sites-daf09',
  storageBucket: 'udemy-vue-firebase-sites-daf09.appspot.com',
  messagingSenderId: '466046711902',
  appId: '1:466046711902:web:52c929ddb301a0b3415ccf'
}

// init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }
