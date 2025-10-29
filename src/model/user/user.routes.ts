
import express from 'express'
import { userController } from './user.controller.js'
import { createUserSchema, updateUserSchema } from './user.validation.js';
import { validate } from '../middleware/validate.js';

const router = express.Router()

router.post('/create-user',validate(createUserSchema),userController.createUserController)
router.get('/',userController.getAllUserController)
router.get('/:id',userController.getAUserController)
router.put('/update/:id',validate(updateUserSchema),userController.updateUserController)
router.delete('/delete/:id',userController.deleteUserController)

export const userRouter = router