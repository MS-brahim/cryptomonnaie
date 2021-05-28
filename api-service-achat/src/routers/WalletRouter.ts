import express from 'express';
import WalletController from '../controllers/WalletController';

const router = express.Router();

router.post(
    '/create', 
    WalletController.create
);

router.get(
    '/read', 
    WalletController.findAllWallet
);

export default router