import { NextApiRequest, NextApiResponse } from 'next';
import sequelize from '../../../lib/database'; // Pastikan jalur ini sesuai
import Store from '../../../models/Store';

export default async function handler(req, res) {
    await sequelize.authenticate(); // Pastikan untuk mengautentikasi koneksi

    if (req.method === 'GET') {
        try {
            const stores = await Store.findAll(); // Mengambil semua data store
            res.status(200).json(stores);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else if (req.method === 'POST') {
        const { code, flag } = req.body;
        try {
            const store = await Store.create({ code, flag }); // Menambahkan store baru
            res.status(201).json(store);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else if (req.method === 'DELETE') {
        const { code } = req.body; // Ambil code dari body
        try {
            const deletedStore = await Store.destroy({ where: { code } }); // Menghapus store
            if (deletedStore) {
                res.status(204).end(); // Mengembalikan status 204 No Content jika berhasil dihapus
            } else {
                res.status(404).json({ error: 'Store not found' }); // Jika tidak ditemukan
            }
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
