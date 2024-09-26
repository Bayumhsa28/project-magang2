// pages/api/items.js
import { Sequelize, DataTypes } from 'sequelize';
import sequelize from '../../../lib/database'; // Pastikan jalur ini sesuai

// Definisi model SubFamily
const SubFamily = sequelize.define('sub_family', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: { type: DataTypes.STRING, allowNull: false },
}, { timestamps: false, tableName: 'sub_family' });

// Definisi model Item
const Item = sequelize.define('item', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    sub_family_id: { type: DataTypes.INTEGER, allowNull: false },
    item_code: { type: DataTypes.INTEGER, allowNull: false },
    item_name: { type: DataTypes.STRING, allowNull: false },
    unit: { type: DataTypes.STRING, allowNull: false },
    harga: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
}, { timestamps: false, tableName: 'item' });

// Definisikan relasi
Item.belongsTo(SubFamily, { foreignKey: 'sub_family_id' });

export default async function handler(req, res) {
    try {
        // Ambil data item beserta sub_family
        const items = await Item.findAll({ include: SubFamily });
        res.status(200).json(items);
    } catch (error) {
        console.error('Error fetching items:', error);
        res.status(500).json({ message: 'Failed to retrieve items.' });
    }
}
