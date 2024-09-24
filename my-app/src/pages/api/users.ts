import { NextApiRequest, NextApiResponse } from 'next';
import sequelize from '../../../lib/database'; // Pastikan jalur ini sesuai
import User from '../../../models/User';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    await sequelize.authenticate(); // Pastikan untuk mengautentikasi koneksi

    if (req.method === 'POST') {
        try {
            const { nik } = req.body; // Ambil NIK dari body permintaan

            // Cek apakah NIK valid
            if (!nik) {
                return res.status(400).json({ error: 'NIK is required' });
            }

            // Temukan pengguna berdasarkan NIK
            const user = await User.findOne({ where: { nik } });
            
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }

            res.status(200).json(user); // Kirim data pengguna sebagai respons
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
