import { query, getClient } from '../../db/index.mjs'

const selectAll = async () => {
  const results = await query('SELECT * FROM test')
  return results.rows
}

const insertOne = async () => {
  const session = await getClient()
  try {
    await session.query('BEGIN')

    const insertQuery = 'INSERT INTO test(code, message) VALUES($1, $2)'
    await session.query(insertQuery, ['000004', 'test4'])

    await session.query('COMMIT')
  } catch (e) {
    await session.query('ROLLBACK')
    throw e
  } finally {
    session.release()
  }
}

export const userModel = {
  selectAll,
  insertOne,
}
