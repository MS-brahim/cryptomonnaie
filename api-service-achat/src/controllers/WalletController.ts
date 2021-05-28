import { Request, Response } from 'express';

import { v4 as uuidv4 } from 'uuid';
import { WalletI } from '../models/Wallet.model';

class WalletController {
	async create(req: Request, res: Response) {
		const id = uuidv4();
		try {
			const record = await WalletI.create({ ...req.body, id });
			return res.json({ record, msg: 'Successfully create wallet' });
		} catch (e) {
			// return res.json({ msg: 'fail to create', status: 500, route: '/create' });
            return res.json(e.message)
		}
	}

	async findAllWallet(req: Request, res: Response) {
		try {
			const limit = req.query?.limit as number | undefined;
			const offset = req.query?.offset as number | undefined;

			const records = await WalletI.findAll({ where: {}, limit, offset });
			return res.json(records);
		} catch (e) {
			return res.json({ msg: 'fail to read', status: 500, route: '/read' });
		}
	}
}


export default new WalletController();