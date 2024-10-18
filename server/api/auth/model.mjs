import { getClient } from '../../db/index.mjs'

const signIn = async () => {
  const session = await getClient()
  try {
    await session.query('BEGIN')

    const authQuery = 'SELECT id FROM "user" WHERE email = $1 AND password = $2'
    const result = await session.query(authQuery, ['test@example.com', 'ttt'])
    if (result.rows.length === 0) {
      throw new Error('not found!!')
    }
    // TODO: 実装途中のため追加すること！
    // const insertQuery = 'INSERT INTO test(code, message) VALUES($1, $2)'
    // await session.query(insertQuery, ['000004', 'test4'])

    await session.query('COMMIT')
  } catch (e) {
    await session.query('ROLLBACK')
    throw e
  } finally {
    session.release()
  }
}

export const authModel = {
  signIn,
}
