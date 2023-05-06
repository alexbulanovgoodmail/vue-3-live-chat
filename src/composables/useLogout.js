import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

const error = ref(null)

const logout = async (email, password) => {
  error.value = null

  try {
    const res = await projectAuth.signOut()
    error.value = null

    return res
  } catch (err) {
    error.value = err.message
    throw new Error(err)
  }
}

const useLogout = () => {
  return { error, logout }
}

export default useLogout
