var express = require('express');
var router = express.Router();
import methodsArticle from './methood_controllers/article_methods'

router.get('/', methodsArticle.getAll)
      .get('/:id',methodsArticle.get)
      .post('/',methodsArticle.create)
      .patch('/:id',methodsArticle.update)
      .delete('/:id',methodsArticle.deleteArticle)

module.exports = router