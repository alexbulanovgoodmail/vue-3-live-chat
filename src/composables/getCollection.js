import { ref } from 'vue'
import { projectFirestore } from '../firebase/config'

import { query, orderBy, getFirestore, collection, onSnapshot } from 'firebase/firestore'

const getCollection = (myCollection) => {
  const documents = ref(null)
  const error = ref(null)

  const dbRef = collection(projectFirestore, myCollection)
  const orderedQuery = query(dbRef, orderBy('createAt'))

  onSnapshot(
    orderedQuery,
    (docsSnap) => {
      const results = []
      docsSnap.forEach((doc) => {
        doc.data().createAt &&
          results.push({
            ...doc.data(),
            id: doc.id
          })
      })
      documents.value = results
      error.value = null
    },
    (err) => {
      documents.value = null
      error.value = 'Could not fetch data'
    }
  )

  return { error, documents }
}

export default getCollection
