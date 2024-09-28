import { query } from '../../db/index.mjs'

const selectAll = async () => {
  const results = await query('SELECT * FROM test')
  return results.rows
}

export const userModel = {
  selectAll,
}
