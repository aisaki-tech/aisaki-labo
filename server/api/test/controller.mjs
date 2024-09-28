import { userModel } from './model.mjs'

const getTest = async (req, res) => {
  // const response = {
  //   code: '0002',
  //   message: 'test3!!!',
  // }
  const response = await userModel.selectAll()
  res.send(JSON.stringify(response))
}

export const testController = {
  getTest,
}
