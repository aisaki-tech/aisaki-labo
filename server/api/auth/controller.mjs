import { authModel } from './model.mjs'

const postSignIn = async (req, res) => {
  try {
    await authModel.signIn()
    res.send(JSON.stringify({ status: 'success' }))
  } catch (err) {
    res.send(JSON.stringify({ status: 'error', cause: err.message }))
  }
}

export const authController = {
  postSignIn,
}
