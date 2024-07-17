import { ConnectionPool } from 'mssql';

const dbconfig = {
    user: 'sa',
    password: 'akbar',
    server: 'AZZAMMILAKBARRA\\SQLEXPRESS03',
    database: 'NextLoginDB',
    options: {
        encrypt: false,
        enableArithAbort: true,
    },
};

let connectionPool: ConnectionPool;

const initDB = async () => {
    try {
        const { ConnectionPool } = require('mssql');
        connectionPool = await new ConnectionPool(dbconfig).connect();
        console.log('Connected to SQL Server');
    } catch (err) {
        console.error('Database connection failed:', err.message);
    }
};


initDB();

export { initDB, connectionPool };
