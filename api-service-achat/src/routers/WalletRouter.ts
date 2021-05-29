import express from 'express';
import WalletController from '../controllers/WalletController';
import sendMail from '../config/sendMail';

const router = express.Router();

router.post(
    '/create', 
    WalletController.create
);

router.get(
    '/read', 
    WalletController.findAllWallet
);

router.post(
    '/send-mail', 
    sendMail
);

export default router