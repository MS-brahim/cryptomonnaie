import { Request, Response } from 'express';

import { UserI } from '../models/User.model';

class UserController {
	async create(req: Request, res: Response) {
		try {
			const record = await UserI.create({ ...req.body });
			return res.json({ record, msg: 'Successfully create user' });
		} catch (e) {
			// return res.json(e.message)
			return res.json({ msg: 'fail to create', status: 500, route: '/create' });
		}
	}

	async findAllUsers(req: Request, res: Response) {
		try {
			const limit = req.query?.limit as number | undefined;
			const offset = req.query?.offset as number | undefined;

			const records = await UserI.findAll({ where: {}, limit, offset });
			return res.json(records);
		} catch (e) {
			return res.json({ msg: 'fail to read', status: 500, route: '/read' });
		}
	}
	async findUserById(req: Request, res: Response) {
		try {
			const { id } = req.params;
			const record = await UserI.findOne({ where: { id } });
			return res.json(record);
		} catch (e) {
			return res.json({ msg: 'fail to read', status: 500, route: '/read/:id' });
		}
	}
}

export default new UserController();