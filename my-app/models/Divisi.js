import { Model, DataTypes } from 'sequelize';
import sequelize from '../lib/database'; // Pastikan jalur ini sesuai

class Divisi extends Model {}

Divisi.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, // Menjadikan 'id' sebagai primary key
        allowNull: false, // Tidak boleh null
    },
    name: {
        type: DataTypes.STRING, // Menggunakan STRING untuk menyimpan nama
        allowNull: false, // Tidak boleh null
    },
}, {
    sequelize,
    tableName: 'divisi', // Nama tabel di database
    timestamps: false, // Tidak ada kolom timestamp di tabel
});

export default Divisi;
