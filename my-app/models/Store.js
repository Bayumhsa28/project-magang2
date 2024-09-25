import { Model, DataTypes } from 'sequelize';
import sequelize from '../lib/database'; // Pastikan jalur ini sesuai

class Store extends Model {}

Store.init({
    code: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true, // Jika 'code' adalah primary key
    },
    flag: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    tableName: 'store_map',
    timestamps: false, // Tidak ada kolom timestamp di tabel
});

export default Store;
