import { DataTypes, Model } from 'sequelize';
import db from '../config/db';

interface WalletAttributes {
	id: string;
	coin_name: string;
    value: any;
}

export class WalletI extends Model<WalletAttributes> {}

WalletI.init(
	{
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false,
		},
		coin_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		value: {
			type: DataTypes.FLOAT,
			allowNull: false,
		},
	},
	{
		sequelize: db,
		tableName: 'wallets',
	}
);