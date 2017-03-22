const express           = require('express');
const router            = express.Router();
const controllerUser    = require('../controllers/controllerUser')
const passport          = require('passport');


/* GET users listing. */
router.post('/signup', controllerUser.register);

router.post('/signin', controllerUser.signin);

router.get('/', controllerUser.getUsers);

router.get('/:username', controllerUser.getOneUser);

router.put('/:username', controllerUser.updateUser);

router.delete('/:username', controllerUser.deleteUser);

module.exports = router;
