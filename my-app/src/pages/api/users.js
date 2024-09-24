import { NextApiRequest, NextApiResponse } from 'next';
import sequelize from '../../../lib/database'; // Pastikan jalur ini sesuai
import User from '../../../models/User';

export default async function handler(req, res) {
    await sequelize.authenticate(); // Pastikan untuk mengautentikasi koneksi

    if (req.method === 'GET') {
        try {
            const users = await User.findAll();
            res.status(200).json(users); // Kirim data pengguna sebagai respons
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
