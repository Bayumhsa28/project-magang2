import { Model, DataTypes } from 'sequelize';
import sequelize from '../lib/database'; // Pastikan jalur ini sesuai

class Departement extends Model {}

Departement.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, // Menjadikan 'id' sebagai primary key
        allowNull: false, // Tidak boleh null
    },
    divisi_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Tidak boleh null
        references: {
            model: 'divisi', // Nama tabel divisi
            key: 'id', // Kolom yang direferensikan
        },
    },
    name: {
        type: DataTypes.STRING, // Menggunakan STRING untuk menyimpan nama
        allowNull: false, // Tidak boleh null
    },
}, {
    sequelize,
    tableName: 'departement', // Nama tabel di database
    timestamps: false, // Tidak ada kolom timestamp di tabel
});

export default Departement;
