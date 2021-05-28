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

router.get(
	'/read/:id',
	UserController.findUserById
);

export default router;