import { userModel } from './model.mjs'

const getTest = async (req, res) => {
  // const response = {
  //   code: '0002',
  //   message: 'test3!!!',
  // }
  const response = await userModel.selectAll()
  res.send(JSON.stringify(response))
}

const postTest = async (req, res) => {
  try {
    await userModel.insertOne()
    res.send(JSON.stringify({ status: 'success' }))
  } catch (err) {
    res.send(JSON.stringify({ status: 'error', cause: err.message }))
  }
}

export const testController = {
  getTest,
  postTest,
}
