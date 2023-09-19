const Router = require('express')
const router = new  Router()
const userController = require('../controllers/userController')
const autchMiddleware = require('../middleware/authMiddleware')

router.post('/registration',userController.registration)
router.post('/login', userController.login)
router.get('/auth', autchMiddleware, userController.check)


module.exports= router