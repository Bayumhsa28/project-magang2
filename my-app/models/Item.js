import { DataTypes } from 'sequelize';
import sequelize from '../lib/database'; // Pastikan jalur ini sesuai
import SubFamily from './SubFamily'; // Import model SubFamily

// Definisi model Item
const Item = sequelize.define('item', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    sub_family_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    item_code: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    item_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    unit: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    harga: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
    },
}, {
    timestamps: false,
    tableName: 'item',
});

// Definisikan relasi
Item.belongsTo(SubFamily, { foreignKey: 'sub_family_id' });


export default Item;
