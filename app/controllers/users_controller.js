import express from 'express'
const router = express.Router()
import methodsUser from './methood_controllers/user_methods'

router.get('/',methodsUser.getAll)
      .get('/:id',methodsUser.get) 
      .post('/',methodsUser.create)
      .patch('/:id',methodsUser.update)
      .delete('/:id',methodsUser.deleteUser) 

module.exports = router