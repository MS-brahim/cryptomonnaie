import { Sequelize } from 'sequelize';

// const db = new Sequelize(`postgres://postgres:0909@localhost:5432/cryptodb`);

// const db = new Sequelize('postgres://chuxbitcdruaui:dc1a5858e88a696b0c2a7964255166737e8c7e414e04f59b9def92394ec076c4@ec2-52-4-171-132.compute-1.amazonaws.com:5432/d4cthme49l1m62');
const db = new Sequelize('d4cthme49l1m62','chuxbitcdruaui','dc1a5858e88a696b0c2a7964255166737e8c7e414e04f59b9def92394ec076c4',{
    "host": 'ec2-52-4-171-132.compute-1.amazonaws.com',
    "port": 5432,
    "dialect": "postgres",
    "ssl": true,
    "protocol": "postgres",

    "logging": true, 
    "dialectOptions": { 
        "ssl": {
            "require": true,
            "rejectUnauthorized": false 
        }
    }
})


export default db;