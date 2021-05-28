import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

router.post(
    '/create', 
    UserController.create
);

router.get(
    '/read', 
    UserController.findAllUsers
);

// router.get(
// 	'/read/:id',
// 	TodoValidator.checkIdParam(),
// 	Middleware.handleValidationError,
// 	TodoController.readByID
// );

// router.put(
// 	'/update/:id',
// 	TodoValidator.checkIdParam(),
// 	Middleware.handleValidationError,
// 	TodoController.update
// );

// router.delete(
// 	'/delete/:id',
// 	TodoValidator.checkIdParam(),
// 	Middleware.handleValidationError,
// 	TodoController.delete
// );

export default router;