import { Model, DataTypes } from 'sequelize';
import sequelize from '../lib/database'; // Pastikan jalur ini sesuai

class Item extends Model {}

Item.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, // Menjadikan 'id' sebagai primary key
        allowNull: false, // Tidak boleh null
    },
    sub_family_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Tidak boleh null
        references: {
            model: 'sub_family', // Nama tabel sub_family
            key: 'id', // Kolom yang direferensikan
        },
    },
    item_code: {
        type: DataTypes.INTEGER,
        allowNull: false, // Tidak boleh null
        unique: true, // Harus unik
    },
    item_name: {
        type: DataTypes.STRING, // Menggunakan STRING untuk menyimpan nama item
        allowNull: false, // Tidak boleh null
    },
    unit: {
        type: DataTypes.STRING(20), // Menggunakan STRING untuk menyimpan unit
        allowNull: false, // Tidak boleh null
    },
    harga: {
        type: DataTypes.DECIMAL(10, 2), // Menggunakan DECIMAL untuk harga
        allowNull: false, // Tidak boleh null
    },
}, {
    sequelize,
    tableName: 'item', // Nama tabel di database
    timestamps: false, // Tidak ada kolom timestamp di tabel
});

export default Item;
