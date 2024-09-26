// pages/api/items.js
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../../../lib/database'; // Pastikan jalur ini sesuai
import Item from '../../../models/Item';


export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { itemCode } = req.query; // Ambil itemCode dari query

        try {
            // Ambil data item dengan filter berdasarkan itemCode
            const items = await Item.findAll({
                where: itemCode ? { item_code: itemCode } : {}, // Jika itemCode ada, gunakan untuk filter
                include: SubFamily,
            });
            res.status(200).json(items);
        } catch (error) {
            console.error('Error fetching items:', error);
            res.status(500).json({ message: 'Failed to retrieve items.' });
        }
    } else {
        res.setHeader('Allow', ['GET']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
