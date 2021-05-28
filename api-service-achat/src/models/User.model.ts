import { DataTypes, Model } from 'sequelize';
import db from '../config/db';

interface UserAttributes {
	id: string;
	solde: any;
}

export class UserI extends Model<UserAttributes> {}

UserI.init(
	{
		id: {
			type: DataTypes.STRING,
			primaryKey: true,
			allowNull: false,
		},
		solde: {
			type: DataTypes.INTEGER,
			allowNull: false,
            defaultValue:10000
		},
	},
	{
		sequelize: db,
		tableName: 'users',
	}
);