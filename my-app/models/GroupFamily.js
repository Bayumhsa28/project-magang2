import { Model, DataTypes } from 'sequelize';
import sequelize from '../lib/database'; // Pastikan jalur ini sesuai

class GroupFamily extends Model {}

GroupFamily.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true, // Menjadikan 'id' sebagai primary key
        allowNull: false, // Tidak boleh null
    },
    departement_id: {
        type: DataTypes.INTEGER,
        allowNull: false, // Tidak boleh null
        references: {
            model: 'departement', // Nama tabel departement
            key: 'id', // Kolom yang direferensikan
        },
    },
    name: {
        type: DataTypes.STRING, // Menggunakan STRING untuk menyimpan nama
        allowNull: false, // Tidak boleh null
    },
}, {
    sequelize,
    tableName: 'group_family', // Nama tabel di database
    timestamps: false, // Tidak ada kolom timestamp di tabel
});

export default GroupFamily;
