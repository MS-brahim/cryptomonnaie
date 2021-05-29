import { DataTypes, Model } from 'sequelize';
import { UserI } from './User.model'
import db from '../config/db';

interface WalletAttributes {
	id: string;
	uid: string;
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
		uid: {
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

UserI.hasMany(WalletI, {
	sourceKey: 'id',
	foreignKey: 'uid',
	as: 'wallets',
	onDelete: 'CASCADE',
	onUpdate: 'CASCADE',
});
WalletI.belongsTo(UserI, { foreignKey: 'uid', targetKey: 'id' });

