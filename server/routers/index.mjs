import express from 'express'
import path from 'path'
import { testController } from '../api/index.mjs'

const router = express.Router()

router.get('/api/test', testController.getTest)

// client配下は、ブラウザサイドで実行されるファイル（HTML/JS/CSS/画像など）を配置する
router.use(express.static(`${path.resolve()}/client`))

export default router
