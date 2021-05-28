import { Sequelize } from 'sequelize';

const db = new Sequelize('postgres://postgres:0909@localhost:5432/cryptodb');

export default db;