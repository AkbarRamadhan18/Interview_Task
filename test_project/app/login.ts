// app/login.ts

import { connectionPool } from './dbconfig';

interface User {
    Username: string;
    Password: string;
}

const getUserByUsernameAndPassword = async (Username: string, Password: string): Promise<User | null> => {
    try {
        const query = `
      SELECT Username, Password
      FROM Login
      WHERE Username = @Username AND Password = @Password
    `;
        const result = await connectionPool.request()
            .input('Username', Username)
            .input('Password', Password)
            .query(query);

        if (result.recordset.length > 0) {
            return result.recordset[0];
        } else {
            return null;
        }
    } catch (err) {
        console.error('Error fetching user:', err.message);
        return null;
    }
};

export { getUserByUsernameAndPassword };
