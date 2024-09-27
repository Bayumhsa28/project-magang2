// pages/api/items.js
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../../../lib/database'; // Pastikan jalur ini sesuai
import Item from '../../../models/Item';

// Definisi model SubFamily
const SubFamily = sequelize.define('sub_family', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: false, tableName: 'sub_family' });

// Definisikan relasi
Item.belongsTo(SubFamily, { foreignKey: 'sub_family_id' });

export default async function handler(req, res) {
    if (req.method === 'GET') {
        const { itemCode, subFamilyId, subFamilyName } = req.query; // Ambil itemCode, subFamilyId, dan subFamilyName dari query

        try {
            // Buat objek filter untuk query
            const filter = {
                include: SubFamily,
            };

            // Tambahkan filter berdasarkan itemCode jika ada
            if (itemCode) {
                filter.where = { item_code: itemCode };
            }

            // Jika subFamilyId atau subFamilyName ada, tambahkan ke filter
            if (subFamilyId) {
                filter.where = {
                    ...filter.where,
                    sub_family_id: subFamilyId,
                };
            }

            if (subFamilyName) {
                filter.include = {
                    model: SubFamily,
                    where: { name: subFamilyName },
                };
            }

            // Ambil data item dengan filter
            const items = await Item.findAll(filter);
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
