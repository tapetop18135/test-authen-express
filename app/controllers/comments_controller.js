import express from 'express'
import methodComment from './methood_controllers/comment_methods'

const router = express.Router()

router.get('/',methodComment.getAll)
      .get('/:id',methodComment.get)
      .post('/',methodComment.create)
      .patch('/:id',methodComment.update)
      .delete('/:id',methodComment.deleteComment)

module.exports = router