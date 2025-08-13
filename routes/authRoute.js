import express from 'express'
import {loginController, registerController, testController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
//router object

const router = express.Router()

//routing 
//register Post method
router.post('/register',registerController)

//login post requet
router.post('/login', loginController)

router.get('/test',requireSignIn,isAdmin,testController)

export default router