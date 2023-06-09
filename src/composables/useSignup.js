import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)

const signup = async (email, password, name) => {
  error.value = null

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password)
    if (!res) {
      throw new Error('Could not complete the signup')
    }
    await res.user.updateProfile({ displayName: name })

    error.value = null

    return res
  } catch (err) {
    error.value = err.message
    throw new Error(err)
  }
}

const useSignup = () => {
  return { error, signup }
}

export default useSignup
