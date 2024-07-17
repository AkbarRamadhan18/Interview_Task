// app/dbConfig.ts

import { ConnectionPool } from 'mssql';

const dbconfig = {
    user: 'sa', // Ganti dengan username SQL Server Anda
    password: 'akbar', // Ganti dengan password SQL Server Anda
    server: 'AZZAMMILAKBARRA\\SQLEXPRESS03', // Ganti dengan nama server SQL Server Anda
    database: 'NextLoginDB', // Ganti dengan nama database Anda
    options: {
        encrypt: false, // Ubah ke true jika Anda menggunakan koneksi SSL
        enableArithAbort: true, // Mencegah kesalahan 'net'
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

// Panggil initDB saat aplikasi dimulai
initDB();

export { initDB, connectionPool };
