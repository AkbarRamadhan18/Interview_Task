// pages/api/login.ts

import { NextApiRequest, NextApiResponse } from 'next';
import { getUserByUsernameAndPassword } from '../../app/login';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { Username, Password } = req.body;

        try {
            const user = await getUserByUsernameAndPassword(Username, Password);
            if (user) {
                res.status(200).json({ message: 'Login successful' });
            } else {
                res.status(401).json({ error: 'Invalid Username or Password' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }
}
