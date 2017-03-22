const express           = require('express');
const router            = express.Router();
const controllerArticle = require('../controllers/controllerArticle')


/* GET users listing. */
router.post('/', controllerArticle.createArticle);

router.get('/', controllerArticle.getArticles);

router.get('/:slug', controllerArticle.getOneArticle);

router.put('/:slug', controllerArticle.updateArticle);

router.delete('/:slug', controllerArticle.deleteArticle);

module.exports = router;
